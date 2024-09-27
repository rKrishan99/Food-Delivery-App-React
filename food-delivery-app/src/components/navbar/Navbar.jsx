import React from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div>
      <nav className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <img src={assets.logo} alt="" />
          </Link>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-600"
                    : "text-gray hover:text-yellow-600"
                }
                exact
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-600"
                    : "text-gray hover:text-yellow-600"
                }
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-600"
                    : "text-gray hover:text-yellow-600 "
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-600"
                    : "text-gray hover:text-yellow-600"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="flex justify-between items-center space-x-4">
            <Link to="/search">
              <img src={assets.search_icon} alt="" />
            </Link>
            <Link to="/cart">
              <img src={assets.basket_icon} alt="" />
            </Link>
            <NavLink to="/login">
              <button className="bg-yellow-500 text-white hover:bg-black px-4 py-2 rounded-full">
                Sign in
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
