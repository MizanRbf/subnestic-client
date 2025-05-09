import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const SubBox = ({ subBox }) => {
  const {
    id,
    thumbnail,
    name,
    category,
    price,
    original_price,
    frequency,
    discount_percentage,
  } = subBox;

  return (
    <div className="rounded-lg space-y-1 bg-slate-100 ">
      <div className="relative">
        <img
          className="w-full h-[300px] rounded-tr-lg rounded-tl-lg mb-4"
          src={thumbnail}
          alt=""
        />
        {/* Discount div */}
        <div className="absolute top-12  left-2 bg-primary text-white px-6 py-2 rounded-full flex gap-2 items-end -rotate-40 shadow-2xl star-shape">
          <h1>{discount_percentage}%</h1>
          <p className="text-lg font-bold">off</p>
        </div>
      </div>
      <div className="mx-6 space-y-1">
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
          <del className="text-gray-500 text-sm ml-2">${original_price}</del>
        </p>
        <p>{frequency}</p>
      </div>
      <Link to={`/boxDetails/${id}`}>
        <button className="min-w-full btn-sub">View More</button>
      </Link>
    </div>
  );
};

export default SubBox;
