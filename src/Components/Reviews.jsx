import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";

const Reviews = ({ reviews }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-[30%]">
      <h3 className="mb-2">Reviews</h3>
      {reviews.map((review) => (
        <p className="border p-2 rounded-sm border-slate-200 mb-2 w-fit">
          <p className="font-bold">{user.displayName} </p>
          {review}
        </p>
      ))}
    </div>
  );
};

export default Reviews;
