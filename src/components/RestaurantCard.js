import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  const { name, cuisines, avgRating, maxDeliveryTime, cloudinaryImageId } =
    resData;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400"
      // style={{ backgroundColor: "#f0f0f0", height: "350px" }}
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 style={{ wordWrap: "break-word" }}>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{maxDeliveryTime}</h4>
      <h4>{loggedInUser}</h4>
    </div>
  );
};

export const isBestRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-4">Best</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
