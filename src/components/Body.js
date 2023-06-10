import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [bufferedList, setBufferedList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  console.log("::useeffect called");

  const fetchData = async () => {
    const restaurantList = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4248522&lng=78.6448085&page_type=DESKTOP_WEB_LISTING"
    );
    const restaurantListJson = await restaurantList.json();
    // console.log(restaurantListJson);
    setListOfRestaurants(restaurantListJson.data.cards[2].data.data.cards);
    setBufferedList(restaurantListJson.data.cards[2].data.data.cards);
  };

  //Conditional rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }
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
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              //Filter the res card and update the UI
              //Search text
              const filteredRestaurants = listOfRestaurants.filter(
                (restaurant) =>
                  restaurant.data.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              setBufferedList(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("after", listOfRestaurants);
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            console.log("before", listOfRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {bufferedList.map((res) => {
          return <RestaurantCard key={res.data.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
