import RestaurantCard, { isBestRestaurant } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantBody from "../utils/useRestaurantBody";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Body = () => {
  const {
    handleOnClickForTopRatedRestaurants,
    handleSetSearchText,
    handleOnClickForSearch,
    listOfRestaurants,
    searchText,
  } = useRestaurantBody();

  const { loggedInUser, setUserName } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  const BestRestaurantComponent = isBestRestaurant(RestaurantCard);

  if (onlineStatus === false) {
    return (
      <h1>
        Oops..!looks like you're offline..!Pls check your internet connection..
      </h1>
    );
  }

  if (!listOfRestaurants) {
    return <h1>Loading...</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => handleSetSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => handleOnClickForSearch()}
          >
            Search
          </button>

          <input
            type="text"
            className="border border-solid border-black"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
            onClick={() => handleOnClickForTopRatedRestaurants()}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {listOfRestaurants.map((res) => {
          {
          }
          return (
            <Link key={res.info.id} to={`/restaurant/${res.info.id}`}>
              {res.info.avgRating > 4 ? (
                <BestRestaurantComponent resData={res.info} />
              ) : (
                <RestaurantCard resData={res.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
