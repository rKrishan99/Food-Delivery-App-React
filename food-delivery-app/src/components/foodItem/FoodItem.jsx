import React from "react";
import { assets } from "../../assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {

    const [itemCount, setItemCount] = useState(0);

  return (
    <div>
      <div className="w-full shadow-md rounded-md m-auto transition duration-300 overflow-hidden">
        <img
          src={image}
          alt=""
          className=" w-full rounded-tl-md rounded-tr-md rounded-bl-none rounded-br-none"
        />
        {!itemCount
            ? <img src={assets.add_icon_white} 
            className="w-20 h-20 absolute top-2 right-2"
            onClick={() => setItemCount(prev=>prev+1)} 
            alt=""/>
            : <div className=""> 
                <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt="" />
                <p>{itemCount}</p>
                <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" />

            </div>
        }
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
