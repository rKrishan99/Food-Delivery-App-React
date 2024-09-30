import React from "react";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="ml-app-margin-x mr-app-margin-x mt-24 flex flex-col gap-5">
      <h1 className="text-3xl font-semibold">Explore Our Menu</h1>
      <p>
        Discover a wide variety of delicious dishes crafted with the freshest
        ingredients. From appetizers to desserts, our menu offers something for
        everyone. Whether you're in the mood for a hearty meal or a light snack,
        you'll find plenty of options to satisfy your cravings. Browse through
        our menu and find your new favorite dish today!
      </p>
      <div className="flex justify-between overflow-x-scroll scrollbar-hide text-center gap-10 items-center mt-8">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory(category === item.menu_name ? "All" : item.menu_name)
              }
              key={index}
            >
              <img
                className={`${
                  category === item.menu_name ? "border-4 border-rose-500" : ""
                } mb-4 w-32 min-w-32 cursor-pointer rounded-full transition duration-150 ease-out hover:ease-in`}
                src={item.menu_image}
                alt=""
              />{" "}
              <p className="font-normal text-gray-500 text-xl cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="mt-4 mb-8" />
    </div>
  );
};

export default ExploreMenu;
