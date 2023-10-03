import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantBody from "../utils/useRestaurantBody";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const {
    handleOnClickForTopRatedRestaurants,
    handleSetSearchText,
    handleOnClickForSearch,
    listOfRestaurants,
    searchText,
  } = useRestaurantBody();

  const onlineStatus = useOnlineStatus();
  console.log("::online status ", onlineStatus);

  if (onlineStatus === false) {
    return (
      <h1>
        Oops..!looks like you're offline..!Pls check your internet connection..
      </h1>
    );
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
            console.log("::res is ", res.info);
          }
          return (
            <Link key={res.info.id} to={`/restaurant/${res.info.id}`}>
              <RestaurantCard resData={res.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
