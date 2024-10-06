import React from "react";
import { assets } from "../../assets/assets";
import { useState } from "react";

const LoginPopup = ({setShowLogin}) => {
  const [curentState, setcurentState] = useState("Login");   

  return (
    <div className="absolute z-10 w-full h-full bg-gray-950 grid"> 
      <form className="place-self-center flex flex-col gap-6 text-slate-800 bg-white p-8 rounded-xl text-xl animate-fadeIn" >
        <div className="flex justify-between items-center text-black">
          <h2 className="font-bold text-2xl">{curentState}</h2>
          <img
          className="w-6 h-6 cursor-pointer"
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="" 
          />
        </div>
        <div className="flex flex-col gap-6 ">
          {curentState === "Login" ? (
            <></>
          ) : (
            <input className="p-2 border border-gray-600 rounded-lg " type="text" placeholder="Your Name" required />
          )}
          <input className="p-2 border border-gray-600 rounded-lg " type="email" placeholder="Your Email" />
          <input className="p-2 border border-gray-600 rounded-lg " type="password" placeholder="Password" />
        </div>
        <button className="bg-orange-600 p-2 rounded-lg text-slate-100">
          {curentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="flex gap-2">
          <input className="" type="checkbox" required />
          <p className="text-lg text-slate-600">
            I agree to the <span>Terms</span> and <span>Privacy Policy</span>
          </p>
        </div>
        {curentState === "Login" ? (
          <p className="text-lg text-slate-600">
            Create a new account? <span className="text-orange-600" onClick={() => setcurentState("Sign Up")} >Click here</span>
          </p>
        ) : (
          <p className="text-lg text-slate-600">
            Already have an account? <span className="text-orange-600" onClick={() => setcurentState("Login")} >Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
