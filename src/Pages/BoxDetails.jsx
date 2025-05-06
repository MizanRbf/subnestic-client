import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Navbar from "../Components/Navbar";
import BoxDetailsCard from "../Components/BoxDetailsCard";
import Footer from "../Components/Footer";

const BoxDetails = () => {
  const { id } = useParams();
  const boxDetails = useLoaderData();
  const [subBox, setSubBox] = useState({});

  // UseEffect
  useEffect(() => {
    const singleBoxData = boxDetails.find((singleBox) => singleBox.id == id);
    setSubBox(singleBoxData);
  }, [boxDetails, id]);

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="mx-auto min-h-[calc(100vh-288px)]">
        <BoxDetailsCard subBox={subBox}></BoxDetailsCard>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default BoxDetails;
