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
    const filteredList = bufferedList.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setListOfRestaurants(filteredList);
  };

  const fetchData = async () => {
    const restaurantList = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4248522&lng=78.6448085&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4267972&lng=78.4524801&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const restaurantListJson = await restaurantList.json();
    setListOfRestaurants(
      restaurantListJson?.data?.cards[2]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants
    );
    setBufferedList(
      restaurantListJson.data.cards[2].card.card.gridElements.infoWithStyle
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
