// import React from "react";
import { format } from "date-fns";
import { removeBoxFromStored } from "../LocalStorage/Storage";
import { Link } from "react-router";

const HistoryCard = ({ history }) => {
  const { name, id, price, frequency } = history;

  // Date Fetch
  const subscriptionDate = localStorage.getItem(`subscriptionDate-${id}`);
  const formattedDate = subscriptionDate
    ? format(new Date(subscriptionDate), "dd.MM.yyyy")
    : "No date found";

  return (
    <div className="border border-primary  rounded-2xl mb-2 p-6">
      <div className="flex justify-between mb-2 mt-2">
        <h5>{name}</h5>
        <h5 className="bg-green-100 py-1 px-3 rounded-2xl text-lime-600">
          Active
        </h5>
      </div>
      <div className="flex justify-between mb-2 mt-2">
        <p className="text-primary">
          <span className="font-semibold">Paid:</span> ${price}
        </p>
        <p className="text-sm mr-2">{frequency}</p>
      </div>
      {/* Subscription Date */}
      <div className="mb-3">
        <p>
          <span className="font-semibold">Subscribed On:</span> {formattedDate}
        </p>
      </div>
      <Link
        onClick={() => {
          removeBoxFromStored(`${id}`);
        }}
        className="unsubscribe"
      >
        Unsubscribe
      </Link>
    </div>
  );
};

export default HistoryCard;
