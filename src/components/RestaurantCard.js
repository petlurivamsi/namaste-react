import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, maxDeliveryTime, cloudinaryImageId } =
    resData.data;
  return (
    <div
      className="restaurant-card"
      style={{ backgroundColor: "#f0f0f0", height: "350px" }}
    >
      <img
        className="res-logo"
        alt="res-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4 style={{ wordWrap: "break-word" }}>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{maxDeliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
