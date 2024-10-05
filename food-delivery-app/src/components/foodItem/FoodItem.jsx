import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div>
      <div className="w-full shadow-md rounded-md m-auto transition duration-300 overflow-hidden">
        <div className="relative">
          <img
            src={image}
            alt=""
            className=" w-full rounded-tl-md rounded-tr-md rounded-bl-none rounded-br-none"
          />
          {!cartItems[id] ? (
            <img
              src={assets.add_icon_white}
              className="w-8 h-8 absolute right-2 bottom-2"
              onClick={() => addToCart(id)}
              alt=""
            />
          ) : (
            <div className="absolute right-2 bottom-2 flex items-center gap-3 p-1 rounded-full bg-white ">
              <img
                className="w-8 h-8"
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red}
                alt=""
              />
              <p>{cartItems[id]}</p>
              <img
                className="w-8 h-8"
                onClick={() => addToCart(id)}
                src={assets.add_icon_green}
                alt=""
              />
            </div>
          )}
        </div>
        <div className="p-6 ">
          <div className="flex justify-between items-center	mb-3">
            <h3 className="text-xl font-semibold">{name}</h3>
            <img className="w-20" src={assets.rating_starts} alt="" />
          </div>

          <p className="text-gray-500">{description}</p>
          <p className="text-rose-500 font-semibold mt-4 text-xl">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
