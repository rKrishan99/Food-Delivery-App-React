import React from 'react'
import { NavLink } from 'react-router-dom'
import {assets} from '../../assets'

const Navbar = () => {
  return (
    <div>
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
            <img src={assets.logo} alt="" />
            <ul className="flex space-x-4">
                <li>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? "text-yellow-500" : "text-white"} 
                    exact
                >
                    Home
                </NavLink>
                </li>
                <li>
                <NavLink 
                    to="/menu" 
                    className={({ isActive }) => isActive ? "text-yellow-500" : "text-white"}
                >
                    Menu
                </NavLink>
                </li>
                <li>
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => isActive ? "text-yellow-500" : "text-white"}
                >
                    About
                </NavLink>
                </li>
                <li>
                <NavLink 
                    to="/contact" 
                    className={({ isActive }) => isActive ? "text-yellow-500" : "text-white"}
                >
                    Contact
                </NavLink>
                </li>
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar