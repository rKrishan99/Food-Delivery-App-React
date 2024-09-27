import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="bg-hero-img bg-cover rounded-3xl h-500px  p-15 ml-app-margin-x mr-app-margin-x relative">
        <div className="absolute flex pl-20 flex-col items-start gap-6 max-w-2xl bottom-0 left-0 p-8">
          <h1 className="text-5xl font-medium text-white max-w-lg leading-[4rem]">Order your favourite food here</h1>
          <p className="text-white">
            Choose from a divers menu featuring a delectable array of dishes
            crafted with the freshest ingredients. Order now and get your food
            delivered to your doorstep.
          </p>
          <NavLink to="/menu">
            <button className="bg-white px-6 py-2 rounded-full hover:bg-black hover:text-white">View Menu</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
