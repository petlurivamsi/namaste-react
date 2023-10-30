import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, setShowIndex }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowIndex();
    setShowItems(!showItems);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-6 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {`${data.title} (${data.itemCards.length})`}
          </span>
          <span>⬇️</span>
        </div>
        <div>{showItems && <ItemList items={data.itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
