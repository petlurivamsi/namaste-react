import { useState, useEffect } from "react";
const useRestaurantBody = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [bufferedList, setBufferedList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnClickForSearch = () => {
    const filteredRestaurants = listOfRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    // setBufferedList(filteredRestaurants);
    setListOfRestaurants(filteredRestaurants);
  };

  const handleSetSearchText = (value) => {
    setSearchText(value);
  };

  const handleOnClickForTopRatedRestaurants = () => {
    console.log("::buffered list of restauratns ", bufferedList);
    const filteredList = bufferedList.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setListOfRestaurants(filteredList);
  };

  const fetchData = async () => {
    const restaurantList = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4248522&lng=78.6448085&page_type=DESKTOP_WEB_LISTING"
    );
    const restaurantListJson = await restaurantList.json();
    console.log("::res list json", restaurantListJson);
    // setListOfRestaurants(restaurantListJson.data.cards[2].data.data.cards);
    setListOfRestaurants(
      restaurantListJson?.data?.cards[4]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants
    );
    // setBufferedList(restaurantListJson.data.cards[2].data.data.cards);
    setBufferedList(
      restaurantListJson.data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants
    );
  };

  return {
    handleOnClickForTopRatedRestaurants,
    handleSetSearchText,
    handleOnClickForSearch,
    bufferedList,
    listOfRestaurants,
    searchText,
  };
};

export default useRestaurantBody;
