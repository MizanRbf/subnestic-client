import React from "react";
import SubBox from "./SubBox";

const SubBoxes = ({ subBoxes }) => {
  // const { id, thumbnail, name, category, price, frequency } = subBoxes;
  return (
    <div className="border border-slate-100 rounded-lg p-6 space-y-1 shadow-xl">
      {subBoxes.map((subBox) => (
        <SubBox key={subBox.id} subBox={subBox}></SubBox>
      ))}
    </div>
  );
};

export default SubBoxes;
