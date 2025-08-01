import { useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import Reviews from "./Reviews";
import { addToStored } from "../LocalStorage/Storage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../Provider/AuthContext";
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
    if (added) {
      return toast.error("Already Subscribed!");
    } else {
      const today = new Date().toDateString();
      localStorage.setItem(`subscriptionDate-${boxId}`, today);
      toast("Subscribed Successfully");
      navigate("/subscriptionHistory");
    }
  };
  // const handleOrderHistory = (boxId) => {
  //   const added = addToStored(boxId);
  //   if (!added) {
  //     return toast.error("Already Subscribed!");
  //   }
  //   // set Subscription Date
  //   const today = new Date().toDateString();
  //   localStorage.setItem(`subscriptionDate-${boxId}`, today);
  //   alert("working");
  //   // toast("Subscribed Successfully");
  //   toast.error("Subscribed!");
  //   navigate("/subscriptionHistory");
  // };

  return (
    <>
      <div className="min-h-[calc(100vh-288px)] max-w-[1200px] mx-auto md:px-10 lg:px-0">
        <header>
          <Navbar></Navbar>
        </header>
        <main>
          <div className="border border-slate-100 rounded-lg p-6 space-y-1 shadow-sm flex flex-col md:flex-row items-center justify-center gap-10 mt-10">
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
                <span className="font-semibold">Price: </span> ${price}
              </p>

              {/* Frequency */}
              <p>
                <span className="font-semibold">Frequency: </span>
                {frequency}
              </p>

              {/* Features */}
              <div>
                <span className="font-semibold">Features:</span>
                <div className="flex gap-2 *:rounded-2xl *:bg-purple-50 *:text-purple-500 *:px-3 *:py-1 *:text-xs mt-2">
                  {features?.map((feature, index) => (
                    <p key={index}>{feature}</p>
                  ))}
                </div>
              </div>

              {/* Subscription_Benefits */}
              <div>
                <span className="font-semibold">Subscription_Benefits:</span>
                <div className="flex gap-2 mt-2 *:rounded-4xl *:px-6 *:py-1 *:bg-lime-50 *:text-primary *:text-xs">
                  {subscription_benefits?.map((benefit, index) => (
                    <p key={index}>{benefit}</p>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div className="rating rating-sm mt-2">
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
              <form onSubmit={handleReviews} className="flex mt-2">
                <input
                  type="text"
                  name="review"
                  placeholder="Write review here..."
                  className="border border-slate-300 py-3 rounded-tl-4xl rounded-bl-4xl w-full pl-2 border-r-0"
                />
                <button type="submit" className="reviewButton">
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
        </main>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};
export default BoxDetails;
