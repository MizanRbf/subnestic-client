import React, { useEffect, useState } from "react";
import SubBox from "./SubBox";

const SubBoxes = ({ subBoxes }) => {
  const [displaySubBoxes, setDisplaySubBoxes] = useState(subBoxes);
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };
  useEffect(() => {
    if (showAll) {
      setDisplaySubBoxes(subBoxes);
    } else {
      setDisplaySubBoxes(subBoxes.slice(0, 6));
    }
  }, [subBoxes, showAll]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displaySubBoxes.map((subBox) => (
          <SubBox key={subBox.id} subBox={subBox}></SubBox>
        ))}
      </div>
      <div className="w-full text-center">
        <button onClick={handleShowAll} className=" mt-6">
          {showAll ? "Show Less" : "Show All Box"}
        </button>
      </div>
    </div>
  );
};

export default SubBoxes;
