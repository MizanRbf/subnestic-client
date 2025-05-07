import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import NewsLetterComponent from "../Components/NewsLetterComponent";

const NewsLetter = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto md:min-h-[calc(100vh-460px)] mt-10 md:mt-40">
        <h2 className="mb-4">Get Surprises in Your Inbox!</h2>
        <NewsLetterComponent></NewsLetterComponent>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default NewsLetter;
