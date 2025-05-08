import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const SubBox = ({ subBox }) => {
  const { id, thumbnail, name, category, price, frequency } = subBox;

  return (
    <div className="border border-slate-300 rounded-lg space-y-1 bg-slate-100">
      <img
        className="w-full h-[300px] rounded-tr-lg rounded-tl-lg mb-4"
        src={thumbnail}
        alt=""
      />
      <div className="m-6 space-y-1">
        <h4 className="text-lg font-semibold">{name}</h4>
        <div className="flex items-center text-amber-500 mb-2 text-lg">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <p className="text-black ml-2 text-sm">5.00</p>
        </div>
        <p>
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p>
          <span className="font-semibold">Price:</span> ${price}
        </p>
        <p>{frequency}</p>
        <Link to={`/boxDetails/${id}`}>
          <button className="min-w-full mt-4">View More</button>
        </Link>
      </div>
    </div>
  );
};

export default SubBox;
