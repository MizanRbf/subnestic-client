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
        <div className="text-center mb-10">
          <h1 className="mb-3 text-center text-primary">
            Subscription Services
          </h1>
          <p className="text-sm">
            Discover the joy of monthly surprises! Our curated subscription
            boxes deliver handpicked items straight to your door, offering
            convenience, <br className="hidden lg:block" /> excitement, and
            value—loved by our loyal subscribers everywhere.
          </p>
        </div>
        <div>
          <SubBoxes subBoxes={subBoxes}></SubBoxes>
        </div>
      </div>

      {/* Customer Testimonials */}
      <div className="mt-30">
        <div className="text-center mb-6">
          <h1 className="mb-3 text-center text-primary">
            Customer Testimonials
          </h1>
          <p className="text-sm">
            Our customers love what we do! Their feedback reflects the quality,
            care,
            <br className="hidden lg:block" /> and commitment we bring to every
            service. Read their stories and see why they trust us.
          </p>
        </div>
        <TestimonialsSlider></TestimonialsSlider>
      </div>

      {/* News Letter */}
      <div className="mt-30 mb-20">
        <div className="text-center mb-6">
          <h1 className="mb-3 text-center text-primary">
            Get Surprises in Your Inbox!
          </h1>
          <p className="text-sm">
            Enjoy monthly deliveries filled with handpicked goodies you'll love.
            From exclusive items to everyday essentials, our subscription boxes
            <br className="hidden lg:block" />
            bring excitement, value, and a personalized touch right to your
            doorstep.
          </p>
        </div>

        <NewsLetterComponent></NewsLetterComponent>
      </div>
    </div>
  );
};

export default Home;
