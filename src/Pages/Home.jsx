import React from "react";
import Slider from "../Components/Slider";
import SubBoxContainer from "../Components/SubBoxContainer";
import { useLoaderData } from "react-router";
import TestimonialsSlider from "../Components/TestimonialsSlider";
import NewsLetterComponent from "../Components/NewsLetterComponent";

const Home = () => {
  const subBoxData = useLoaderData();
  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Slider */}
      <div>
        <Slider></Slider>
      </div>

      {/* Subscription Services */}
      <div className="mt-20">
        <h2 className="mb-4 text-primary">Subscription Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {subBoxData.map((subBox) => (
            <SubBoxContainer subBox={subBox}></SubBoxContainer>
          ))}
        </div>
      </div>

      {/* Extra-1 */}
      <div className="mt-20">
        <h2 className="mb-4 text-primary">Customer Testimonials</h2>
        <TestimonialsSlider></TestimonialsSlider>
      </div>

      {/* Extra-2 */}
      <div className="mt-30 mb-20">
        <h2 className="mb-4 text-primary">Get Surprises in Your Inbox!</h2>
        <NewsLetterComponent></NewsLetterComponent>
      </div>
    </div>
  );
};

export default Home;
