
import { CDN_URL } from "../utils/contants";
const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    name,
    cloudinaryImageId,
    locality,
    costForTwo,
    cuisines,
    avgRating,
    sla,
  } = resData.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />

      <h3>{name}</h3>
      <h4>{locality}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};
export default RestaurantCard;