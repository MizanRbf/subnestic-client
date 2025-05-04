import React from "react";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <header>This is Header</header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>This is footer</footer>
    </div>
  );
};

export default RootLayout;
