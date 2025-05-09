import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import TestimonialsSlider from "../Components/TestimonialsSlider";
import { Helmet } from "react-helmet-async";
// import { useLoaderData } from "react-router";

const Testimonials = () => {
  // const testimonials = useLoaderData();
  // console.log(testimonials);
  return (
    <div className="">
      <Helmet>
        <title>Subnestic || Testimonials</title>
      </Helmet>
      <header className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </header>
      <main className="max-w-[1200px] mx-auto min-h-[calc(100vh-425px)] px-4 mt-25 md:mt-20 md:px-10 mb-20">
        <div className="text-center mb-6 ">
          <h1 className="mb-3 text-center text-primary">
            Customer Testimonials
          </h1>
          <p className="text-sm">
            Our customers love what we do! Their feedback reflects the quality,
            care, and commitment we bring to every service.{" "}
            <br className="hidden lg:block" /> Read their stories and see why
            they trust us.
          </p>
        </div>
        <TestimonialsSlider></TestimonialsSlider>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Testimonials;
