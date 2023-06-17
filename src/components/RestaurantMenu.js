import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4248522&lng=78.6448085&restaurantId=700004&submitAction=ENTER"
      MENU_URL + resId
    );

    const json = await data.json();
    setResInfo(json.data);

    console.log("::json", json);
  };

  //   console.log("::resInfo", resInfo);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  // const dataFromCard =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  //     ?.categories;
  const itemCards =
    // resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  console.log("::data from card ", itemCards);
  let i = 0;

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
