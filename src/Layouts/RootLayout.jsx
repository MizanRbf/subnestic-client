import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto">
        {/* Navbar */}
        <Navbar></Navbar>
      </header>

      {/* Main */}
      <main className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>

      {/* Footer */}
      <footer className="text-center">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;
