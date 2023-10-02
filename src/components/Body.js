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
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchBox"
            value={searchText}
            onChange={(e) => handleSetSearchText(e.target.value)}
          />
          <button onClick={() => handleOnClickForSearch()}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => handleOnClickForTopRatedRestaurants()}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
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
