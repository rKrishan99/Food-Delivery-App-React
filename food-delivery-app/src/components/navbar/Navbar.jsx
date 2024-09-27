import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
            <div className="text-white font-bold">Food Delivery</div>
            <ul className="flex space-x-4">
                <li>
                <NavLink to="/" className="text-white" activeClassName="text-yellow-500" exact>
                    Home
                </NavLink>
                </li>
                <li>
                <NavLink to="/menu" className="text-white" activeClassName="text-yellow-500">
                    Menu
                </NavLink>
                </li>
                <li>
                <NavLink to="/about" className="text-white" activeClassName="text-yellow-500">
                    About
                </NavLink>
                </li>
                <li>
                <NavLink to="/contact" className="text-white" activeClassName="text-yellow-500">
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