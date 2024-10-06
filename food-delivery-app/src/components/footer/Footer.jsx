import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-3 px-32 py-8 pt-24 mt-32 bg-stone-800 text-slate-200">
      <div className="w-full grid gap-20 grid-cols-[2fr_1fr_1fr]">
        <div className="flex flex-col items-start gap-8">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            alias quibusdam est esse cum tempora illo eligendi dignissimos,
            consectetur eum temporibus consequatur deleniti aspernatur magni
            saepe autem fugiat, culpa officia?
          </p>
          <div className="flex flex-row gap-6">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-8">
            <h3 className="font-semibold text-xl text-white">COMPANY</h3>
            <ul className="flex flex-col gap-2">
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="flex flex-col items-start gap-8">
            <h2 className="font-semibold text-xl text-white">GET IN TOUCH</h2> 
            <ul className="flex flex-col gap-2">
                <li>+1-212-456-7890</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr className="w-full mt-6 bg-slate-400 rounded-none" />
      <p className="">
        &copy; 2024 Tomato. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
