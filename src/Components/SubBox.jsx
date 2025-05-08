import React from "react";
import { Link } from "react-router";

const SubBox = ({ subBox }) => {
  const { id, thumbnail, name, category, price, frequency } = subBox;

  return (
    <div className="border border-slate-200 rounded-lg p-6 space-y-1 shadow-lg">
      <img
        className="w-full h-[300px] rounded-lg mb-4"
        src={thumbnail}
        alt=""
      />
      <h4 className="text-lg font-semibold">{name}</h4>
      <p>Category: {category}</p>
      <p>Price: {price}</p>
      <p>{frequency}</p>
      <Link to={`/boxDetails/${id}`}>
        <button className="min-w-full mt-4">View More</button>
      </Link>
    </div>
  );
};

export default SubBox;
