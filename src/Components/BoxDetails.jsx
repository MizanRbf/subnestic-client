import { useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import Reviews from "./Reviews";
import { addToStored } from "../LocalStorage/Storage";
const BoxDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Handle Reviews
  const [reviews, setReviews] = useState([]);
  const handleReviews = (e) => {
    e.preventDefault();
    const form = e.target;
    const text = e.target.review.value;
    setReviews([...reviews, text]);
    form.reset();
  };

  // Id validity function
  const isNumberOnly = (value) => {
    return !isNaN(value) && Number.isInteger(Number(value));
  };

  // Validity check

  const isValidString = isNumberOnly(id);
  const Id = isValidString ? parseInt(id) : null;

  const boxes = useLoaderData();
  const singleBox = boxes.find((box) => box.id === Id);

  const isValidData =
    singleBox && isValidString && typeof singleBox.id === "number";

  if (!isValidData) {
    return (
      <div className="text-center">
        <h1 className="text-xl md:text-4xl text-red-600 mt-50 mb-8">
          Invalid id! You should provide valid id.
        </h1>
        <Link
          className="bg-green-600 text-white px-8 py-2 font-semibold rounded-md"
          to="/"
        >
          Go Back Home
        </Link>
      </div>
    );
  }

  // Destructure
  const {
    name,
    thumbnail,
    category,
    frequency,
    price,
    features,
    subscription_benefits,
    description,
  } = singleBox;

  const handleOrderHistory = (boxId) => {
    const added = addToStored(boxId);
    if (!added) {
      toast.error("Already Subscribed!");
    } else {
      toast.success("Subscribed Successfully");
      navigate("/orderHistory");
    }
  };

  return (
    <div className="min-h-[calc(100vh-288px)] max-w-[1200px] mx-auto md:px-10 lg:px-0 mt-10">
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

          {/* Reviews */}
          <div className="rating rating-xl">
            <input
              type="radio"
              name="rating-9"
              className="mask mask-star-2 bg-orange-400"
              aria-label="1 star"
            />
            <input
              type="radio"
              name="rating-9"
              className="mask mask-star-2 bg-orange-400"
              aria-label="2 star"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-9"
              className="mask mask-star-2 bg-orange-400"
              aria-label="3 star"
            />
            <input
              type="radio"
              name="rating-9"
              className="mask mask-star-2 bg-orange-400"
              aria-label="4 star"
            />
            <input
              type="radio"
              name="rating-9"
              className="mask mask-star-2 bg-orange-400"
              aria-label="5 star"
            />
          </div>
          <br />
          <form onSubmit={handleReviews}>
            <input
              type="text"
              name="review"
              placeholder="Text here..."
              className="border border-slate-300 w-full py-3 rounded-sm pl-2"
            />
            <button type="submit" className="min-w-full mt-2">
              Submit Review
            </button>
          </form>

          {/* Subscribe Button */}
          <button
            onClick={() => {
              handleOrderHistory(id);
            }}
            className="min-w-full"
          >
            Subscribe Now
          </button>

          {/* Return Home */}
          <Link to="/">
            <button className="min-w-full">Return Home</button>
          </Link>
        </div>
      </div>

      {/* Reviews field */}
      <div className="mt-4 min-h-[200px] border mb-10 border-slate-200 shadow rounded-lg px-6 py-2">
        <Reviews reviews={reviews}></Reviews>
      </div>
    </div>
  );
};
export default BoxDetails;
