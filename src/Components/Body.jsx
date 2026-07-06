import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "/dapi/restaurants/list/v5?lat=28.7041&lng=77.1025&page_type=DESKTOP_WEB_LISTING",
        {
          method: 'GET',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            'Accept': 'application/json',
            'Referer': 'https://www.swiggy.com',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

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
      } else {
        setError("No restaurants found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch restaurants: " + error.message);
      setListOfRestaurant([]);
      setFilteredRestaurants([]);
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
          Search
        </button>

        <div style={{ marginBottom: "10px", fontSize: "14px", color: error ? "#d32f2f" : "#666" }}>
          {error ? "❌ " + error : "📍 Fetching from Swiggy API..."}
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