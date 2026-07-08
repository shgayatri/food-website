import { useParams, useLocation } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const location = useLocation();
  const restaurantFromState = location.state?.restaurant;

  const menu = useRestaurantMenu(resId);

  const restaurantInfo =
    restaurantFromState?.info ||
    menu?.cards?.find((card) => card?.card?.card?.info)?.card?.card?.info ||
    {};

  if (!menu && !restaurantFromState) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating, sla } = restaurantInfo;

  const menuItems =
    menu?.cards?.find((card) => card?.card?.card?.groupedItemsV2)
      ?.card?.card?.groupedItemsV2 || [];

  return (
    <div>
      <h1>{name || "Restaurant Menu"}</h1>

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
                <p>₹{((item?.price || item?.defaultPrice || 0) / 100).toFixed(2)}</p>
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