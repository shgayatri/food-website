import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Shimmer from "./Shimmer";
import { mockMenuData } from "../utils/mockData";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { resId } = useParams();
  const location = useLocation();
  const restaurantFromState = location.state?.restaurant;

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7041&lng=77.1025&restaurantId=${resId}&submitAction=ENTER`,
        {
          method: "GET",
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            Accept: "application/json",
            Referer: "https://www.swiggy.com",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const text = await response.text();
      if (!text) {
        throw new Error("Empty response from API");
      }

      const json = JSON.parse(text);
      setMenu(json?.data);
    } catch (fetchError) {
      console.error("Menu fetch error:", fetchError);
      setError(
        "Live menu fetch blocked by Swiggy. Showing mock menu instead."
      );
      setMenu(mockMenuData.data);
    } finally {
      setLoading(false);
    }
  };

  const restaurantInfo =
    restaurantFromState?.info ||
    (menu?.cards?.find((card) => card?.card?.card?.info)?.card?.card?.info || {});

  if (loading && !menu && !restaurantFromState) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating, sla } = restaurantInfo;

  const menuItems =
    menu?.cards?.find((card) => card?.card?.card?.groupedItemsV2)
      ?.card?.card?.groupedItemsV2 || [];

  return (
    <div>
      <h1>{name || "Restaurant Menu"}</h1>
      {error && (
        <div style={{ color: "#d32f2f", marginBottom: "12px" }}>{error}</div>
      )}
      {cuisines?.length > 0 && <p>{cuisines.join(", ")}</p>}
      {costForTwoMessage && <p>{costForTwoMessage}</p>}
      {avgRating && <p>Rating: {avgRating}</p>}
      {sla?.deliveryTime && <p>Delivery Time: {sla.deliveryTime} mins</p>}

      {menuItems.length > 0 ? (
        menuItems.map((group) => (
          <div key={group?.groupId}>
            <h3>{group?.groupName}</h3>
            {group?.items?.map((item) => (
              <div key={item?.id}>
                <h4>{item?.name}</h4>
                <p>{item?.description}</p>
                <p>₹{(item?.price / 100).toFixed(2)}</p>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p>No menu items available</p>
      )}
    </div>
  );
};

export default RestaurantMenu;