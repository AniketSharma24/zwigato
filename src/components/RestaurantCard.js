import { IMG_CDN } from "../constants/constant";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className="card">
      <img src={`${IMG_CDN + cloudinaryImageId}`} />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating} stars</p>
    </div>
  );
};

export default RestaurantCard;
