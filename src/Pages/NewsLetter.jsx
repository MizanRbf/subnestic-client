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
      <main className="w-11/12 mx-auto min-h-[calc(100vh-288px)]">
        <NewsLetterComponent></NewsLetterComponent>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default NewsLetter;
