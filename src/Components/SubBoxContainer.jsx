import React from "react";
import BoxCard from "./BoxCard";

const SubBoxContainer = ({ subBox }) => {
  const { thumbnail, name, category, price, frequency } = subBox;
  return (
    <div className="border border-slate-100 rounded-lg p-6 space-y-1 shadow-xl">
      <img
        className="w-full h-[300px] rounded-lg mb-4"
        src={thumbnail}
        alt=""
      />
      <h4 className="text-lg font-semibold">{name}</h4>
      <p>Category: {category}</p>
      <p>Price: {price}</p>
      <p>{frequency}</p>
      <button className="min-w-full mt-4">View More</button>
    </div>
  );
};

export default SubBoxContainer;
