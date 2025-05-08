import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link, useLoaderData } from "react-router";
import { getStoredBoxes } from "../LocalStorage/Storage";
import HistoryCard from "../Components/HIstoryCard";
import ReChart from "../Components/ReChart";

const OrderHistory = () => {
  const boxesData = useLoaderData();
  const [histories, setHistories] = useState([]);
  console.log(histories);

  useEffect(() => {
    const storedBox = getStoredBoxes();
    const convertedStoredBoxes = storedBox.map((boxId) => parseInt(boxId));
    const orderHistories = boxesData.filter((box) =>
      convertedStoredBoxes.includes(box.id)
    );
    setHistories(orderHistories);
  }, [boxesData, setHistories]);

  return (
    <div>
      <Helmet>
        <title>Subnestic || OrderHistory</title>
      </Helmet>
      <header>
        <Navbar></Navbar>
      </header>

      {/* Main Section */}
      <main className="max-w-[1200px] mx-auto min-h-[calc(100vh-288px)] mt-10 md:px-10 lg:px-0">
        {/* Rechart */}
        <ReChart histories={histories}></ReChart>
        <div
          className={`text-center mb-10 ${
            histories.length == "0" ? "hidden" : "block"
          }`}
        ></div>

        {/* Order History */}
        <div
          className={`text-center mt-10 mb-10 ${
            histories.length == "0" ? "hidden" : "block"
          }`}
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Your Order Histories
          </h1>
          <p>
            Visit homepage and subscribe more updated box as your preference.
          </p>
        </div>

        {/* Empty data Alert */}
        <div
          className={`my-30 text-center md:my-10 ${
            histories.length == "0" ? "block" : "hidden"
          }`}
        >
          <p className="text-2xl md:text-4xl font-bold mb-2">
            You have not subscribe any box yet
          </p>
          <p className="mb-10 mt-6">
            Visit homepage and subscribe any box as your preference.
          </p>
          <Link className="bg-primary text-white py-2 px-6 rounded-md" to="/">
            Subscribe a box
          </Link>
        </div>
        <div>
          <div className="my-10">
            {histories.map((history) => (
              <HistoryCard history={history}></HistoryCard>
            ))}
          </div>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default OrderHistory;
