import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link, useLoaderData } from "react-router";
import { getStoredBoxes } from "../LocalStorage/Storage";
import HistoryCard from "../Components/HIstoryCard";
import ReChart from "../Components/ReChart";

const SubscriptionHistory = () => {
  const boxesData = useLoaderData();
  const [histories, setHistories] = useState([]);

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
        <title>Subnestic || SubscriptionHistory</title>
      </Helmet>
      <header>
        <Navbar></Navbar>
      </header>

      {/* Main Section */}
      <main className="max-w-[1200px] mx-auto min-h-[calc(100vh-288px)] mt-30 md:mt-10 px-4">
        {/* Order History */}
        <div
          className={`text-center mt-10 mb-10 ${
            histories.length == "0" ? "hidden" : "block"
          }`}
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Your Subscription Histories
          </h1>
          <p>
            Visit homepage and subscribe more updated box as your preference.
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {/* Rechart */}
          <div>
            <ReChart histories={histories}></ReChart>
          </div>

          {/* History Card */}
          <div>
            <div className="">
              {histories.map((history) => (
                <HistoryCard key={history.id} history={history}></HistoryCard>
              ))}
            </div>
          </div>
        </div>
        <div
          className={`text-center mb-10 ${
            histories.length == "0" ? "hidden" : "block"
          }`}
        ></div>

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
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default SubscriptionHistory;
