import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [bufferedList, setBufferedList] = useState([]);
  useEffect(async () => {
    await fetchData();
    // console.log("Body rendered ");
  }, []);
  console.log("::useeffect called");

  const fetchData = async () => {
    const restaurantList = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4248522&lng=78.6448085&page_type=DESKTOP_WEB_LISTING"
    );
    const restaurantListJson = await restaurantList.json();
    console.log(
      "::res list",
      restaurantListJson.data.cards[5].card.card.gridElements.infoWithStyle
        .restaurants
    );
    // setListOfRestaurants(restaurantListJson.data.cards[2].data.data.cards);
    setListOfRestaurants(
      restaurantListJson.data.cards[5].card.card.gridElements.infoWithStyle
        .restaurants
    );
    // setBufferedList(restaurantListJson.data.cards[2].data.data.cards);
    setBufferedList(
      restaurantListJson.data.cards[5].card.card.gridElements.infoWithStyle
        .restaurants
    );
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
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              console.log("::res list 0 on click", filteredRestaurants);

              setBufferedList(filteredRestaurants);
              setListOfRestaurants(filteredRestaurants);
              console.log("::biffered", bufferedList, searchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("::clicked");
            console.log("after", listOfRestaurants);
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            console.log("::filteredlst ", filteredList);
            setListOfRestaurants(filteredList);
            console.log("::filtered before", listOfRestaurants);
          }}
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
