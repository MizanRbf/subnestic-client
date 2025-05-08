import React from "react";
import { removeBoxFromStored } from "../LocalStorage/Storage";
import { Link } from "react-router";

const HistoryCard = ({ history }) => {
  const { name, id, price, frequency } = history;
  return (
    <div className="border border-slate-300 rounded-2xl mb-2 p-6">
      <h5>{name}</h5>
      <div className="flex justify-between mb-2 mt-2">
        <p>Price: {price}</p>
        <p>{frequency}</p>
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
