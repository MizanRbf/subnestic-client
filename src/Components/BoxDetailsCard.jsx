import React from "react";
import { Link } from "react-router";

const BoxDetailsCard = ({ subBox }) => {
  const {
    name,
    thumbnail,
    category,
    frequency,
    price,
    features,
    subscription_benefits,
    number_of_reviews,
    ratings,
    description,
  } = subBox;

  return (
    <div className="min-h-[calc(100vh-288px)] flex justify-center items-center">
      <div className="border border-slate-100 rounded-lg p-6 space-y-1 shadow-sm flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Image */}
        <div>
          <img
            className="w-full h-[300px] rounded-lg mb-4"
            src={thumbnail}
            alt=""
          />
        </div>

        {/* Content */}

        <div className="space-y-2">
          {/* Name */}
          <h4 className="text-lg font-semibold">{name}</h4>

          {/* Category */}
          <p>
            <span className="font-semibold">Category: </span> {category}
          </p>
          <p>{description}</p>

          {/* Price */}
          <p>
            <span className="font-semibold">Price: </span> {price}
          </p>

          {/* Frequency */}
          <p>
            <span className="font-semibold">Frequency: </span>
            {frequency}
          </p>

          {/* Features */}
          <div>
            <span className="font-semibold">Features:</span>
            <div className="flex gap-2 *:border *:rounded-xs *:px-3 *:py-1 ">
              {features?.map((feature) => (
                <p>{feature}</p>
              ))}
            </div>
          </div>

          {/* Subscription_Benefits */}
          <div>
            <span className="font-semibold">Subscription_Benefits:</span>
            <div className="flex gap-2 *:border *:rounded-xs *:px-3 *:py-1 ">
              {subscription_benefits?.map((benefit) => (
                <p>{benefit}</p>
              ))}
            </div>
          </div>

          {/* Ratings */}
          <p>
            <span className="font-semibold">Ratings: </span>
            {ratings}
          </p>

          {/* Reviews */}
          <p>
            <span className="font-semibold">Reviews: </span>
            {number_of_reviews}
          </p>

          {/* Button */}
          <Link to="/">
            <button className="min-w-full mt-4">Return</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BoxDetailsCard;
