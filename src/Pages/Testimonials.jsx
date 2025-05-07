import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import TestimonialsSlider from "../Components/TestimonialsSlider";
import { useLoaderData } from "react-router";

const Testimonials = () => {
  const testimonials = useLoaderData();
  console.log(testimonials);
  return (
    <div>
      <header className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto min-h-[calc(100vh-425px)] mt-30">
        <h2 className="mb-6">Customer Testimonials</h2>
        <TestimonialsSlider></TestimonialsSlider>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Testimonials;
