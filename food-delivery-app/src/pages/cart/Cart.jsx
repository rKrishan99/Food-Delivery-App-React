import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="mt-16 px-app-margin-x py-app-margin-x">
      <div className="">
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-lg">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className="h-px bg-gray-400 border-none" />
        {food_list.map((item) => {
          if (cartItems[item.id] > 0) {
            return (
              <div>
                <div
                  key={item.id}
                  className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-800 text-lg m-4"
                >
                  <img className="w-32" src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item.id]}</p>

                  <p>${item.price * cartItems[item.id]}</p>
                  <button
                    className="cursor-pointer text-red-600"
                    onClick={() => removeFromCart(item.id)}
                  >
                    X
                  </button>
                </div>
                <hr className="h-px bg-gray-300 border-none" />
              </div>
            );
          }
        })}
      </div>
      <div className="mt-16 flex justify-between  w-full">
        <div className="flex flex-1 flex-col gap-8">
          <h2>Cart Total</h2>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-slate-950">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between text-slate-950">
              <p>Delivery Fee</p>
              <p>${0}</p>
            </div>
            <hr />
            <div className="flex justify-between text-slate-950">
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>
          <button className="bg-orange-600 text-slate-50 w-96 p-2 rounded-lg">PROCEED TO CHECKOUT</button>
        </div>
        <div className="flex flex-1 justify-end w-full">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="mt-4 flex justify-between items-center bg-white rounded-lg ">
              <input className="bg-slate-300 w-96 p-2 pl-6 rounded-tl-lg rounded-bl-lg focus:outline-none" type="text" placeholder="promo code" />
              <button className="w-32 max-w-32 p-2 bg-black border-none text-white rounded-tr-lg rounded-br-lg">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
