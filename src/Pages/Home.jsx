import React from "react";
import Slider from "../Components/Slider";
import SubBoxes from "../Components/SubBoxes";
import { useLoaderData } from "react-router";
import TestimonialsSlider from "../Components/TestimonialsSlider";
import NewsLetterComponent from "../Components/NewsLetterComponent";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const subBoxes = useLoaderData();
  return (
    <div className="max-w-[1200px] mx-auto">
      <Helmet>
        <title>Subnestic || Home</title>
      </Helmet>
      {/* Slider */}
      <div>
        <Slider></Slider>
      </div>

      {/* Subscription Services */}
      <div className="mt-20">
        <h2 className="mb-4 text-primary">Subscription Services</h2>
        <div>
          <SubBoxes subBoxes={subBoxes}></SubBoxes>
        </div>
      </div>

      {/* Customer Testimonials */}
      <div className="mt-20">
        <h2 className="mb-4 text-primary">Customer Testimonials</h2>
        <TestimonialsSlider></TestimonialsSlider>
      </div>

      {/* News Letter */}
      <div className="mt-30 mb-20">
        <h2 className="mb-4 text-primary">Get Surprises in Your Inbox!</h2>
        <NewsLetterComponent></NewsLetterComponent>
      </div>
    </div>
  );
};

export default Home;
