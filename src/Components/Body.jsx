import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [filteredRestaurants, setFilteredRestaurants] = useState(resList);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>You are offline. Please check your internet connection.</h1>;
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          value={searchText}
          placeholder="Search restaurants"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((restaurant) =>
              restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Search
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
