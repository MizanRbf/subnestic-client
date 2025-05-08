import React from "react";
import SubBox from "./SubBox";

const SubBoxes = ({ subBoxes }) => {
  // const { id, thumbnail, name, category, price, frequency } = subBoxes;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {subBoxes.map((subBox) => (
        <SubBox key={subBox.id} subBox={subBox}></SubBox>
      ))}
    </div>
  );
};

export default SubBoxes;
