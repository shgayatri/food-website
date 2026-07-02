import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);
  const [loading, setLoading] = useState(false);
  const [isApiData, setIsApiData] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      console.log("Fetching data from Swiggy API...");
      
      const response = await fetch(
        "/dapi/restaurants/list/v5?lat=28.7041&lng=77.1025&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      console.log("Full API Response:", json);
      
      // Find the correct card with restaurant data
      const restaurantCard = json?.data?.cards?.find(
        (card) => 
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      
      const restaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      console.log("Extracted Restaurants:", restaurants);
      console.log("Number of restaurants found:", restaurants.length);
      
      if (restaurants.length > 0) {
        setListOfRestaurant(restaurants);
        setIsApiData(true);
        console.log("✅ Successfully loaded API data");
      } else {
        console.log("⚠️ No restaurants found in API response, using mock data");
        setIsApiData(false);
      }
    } catch (error) {
      console.error("❌ Error fetching data:", error);
      console.log("Using mock data as fallback");
      setIsApiData(false);
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="body">
      <div className="filter">
        <div style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}>
          {isApiData ? " Showing Live Swiggy Data" : " Showing Mock Data"}
        </div>
        
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            console.log("Filtered restaurants:", filteredList.length);
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            fetchData(); 
          }}
        >
          All Restaurants
        </button>
      </div>

      {loading ? (
        <div className="loading">Loading restaurants...</div>
      ) : (
        <div className="res-container">
          {listOfRestaurants.length === 0 ? (
            <div>No restaurants found</div>
          ) : (
            listOfRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.info.id}
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