import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../foodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className=" ml-app-margin-x mr-app-margin-x">
      <h2 className="text-3xl font-semibold mb-10 mt-12">Top dishes near you</h2>
      <div className="grid gap-10 grid-cols-4 ">
        {food_list.map((item, index) => {
          if(category==="All" || category === item.category){
            return (
              <FoodItem
                key={index}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                
              />
            );
          }
          
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
