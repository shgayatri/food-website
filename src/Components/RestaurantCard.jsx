
import { CDN_URL } from "../utils/contants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    id,
    name,
    cloudinaryImageId,
    locality,
    costForTwo,
    cuisines,
    avgRating,
    sla,
  } = resData.info;

  return (
    <Link
      to={`/restaurants/${id}`}
      state={{ restaurant: resData }}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="res-card">
        <img
          className="res-logo"
          src={`${CDN_URL}${cloudinaryImageId}`}
          alt={name}
        />

        <h3>{name}</h3>
        <h4>{locality}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    </Link>
  );
};
export default RestaurantCard;