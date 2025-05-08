import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import NewsLetterComponent from "../Components/NewsLetterComponent";
import { Helmet } from "react-helmet-async";

const NewsLetter = () => {
  return (
    <div>
      <Helmet>
        <title>Subnestic || NewsLetter</title>
      </Helmet>
      <header className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto md:min-h-[calc(100vh-460px)] mt-10 md:mt-40">
        <div className="text-center mb-6">
          <h1 className="mb-3 text-center text-primary">
            Get Surprises in Your Inbox!
          </h1>
          <p className="text-sm">
            Enjoy monthly deliveries filled with handpicked goodies you'll love.
            From exclusive items to everyday essentials, our subscription boxes
            bring excitement, value, and a personalized touch right to your
            doorstep.
          </p>
        </div>
        <NewsLetterComponent></NewsLetterComponent>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default NewsLetter;
