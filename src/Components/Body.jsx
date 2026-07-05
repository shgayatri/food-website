import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);
  const [filteredRestaurants, setFilteredRestaurants] = useState(resList);
  const [loading, setLoading] = useState(false);
  const [isApiData, setIsApiData] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "/dapi/restaurants/list/v5?lat=28.7041&lng=77.1025&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await response.json();

      const restaurantCard = json?.data?.cards?.find((card) =>
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      const restaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [];

      if (restaurants.length > 0) {
        setListOfRestaurant(restaurants);
        setFilteredRestaurants(restaurants);
        setIsApiData(true);
      } else {
        setListOfRestaurant(resList);
        setFilteredRestaurants(resList);
        setIsApiData(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setListOfRestaurant(resList);
      setFilteredRestaurants(resList);
      setIsApiData(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
  const searchText = searchQuery.toLowerCase().trim();

  const filteredList = listOfRestaurants.filter((res) => {
    const name = res?.info?.name?.toLowerCase() || "";
    const cuisines = res?.info?.cuisines?.join(" ").toLowerCase() || "";

    return name.includes(searchText) || cuisines.includes(searchText);
  });

  setFilteredRestaurants(filteredList);
};
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <button onClick={handleSearch}>
          <span>Search</span>
        </button>

        <div style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}>
          {isApiData ? "Showing Live Swiggy Data" : "Showing Mock Data"}
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4.3
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRestaurants(listOfRestaurants);
            setSearchQuery("");
          }}
        >
          All Restaurants
        </button>
      </div>

      {loading ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {filteredRestaurants.length === 0 ? (
            <div>No restaurants found</div>
          ) : (
            filteredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant?.info?.id}
                resData={restaurant}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Body;