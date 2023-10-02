import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log("::resId ", resId);

  const resInfo = useRestaurantMenu(resId);

  console.log("::resInfo", resInfo);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const itemCards =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")}-{costForTwoMessage}
      </p>
      <ul>
        {itemCards.map((items) => {
          if (items.card.card.itemCards) {
            return items.card.card.itemCards.map((item) => (
              <li key={item.card.info.id}>
                {item.card.info.name}-
                {item.card.info.price / 100 || "Price unavailable"}
              </li>
            ));
          }
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
