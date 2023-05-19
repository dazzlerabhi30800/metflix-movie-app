import React from "react";
import SkeletonComp from "./SkeletonComp";

const SkeletonLoader = () => {
  return (
    <div className="movie--search">
      {Array(6)
        .fill(1)
        .map((item, index) => {
          return <SkeletonComp key={index} />;
        })}
    </div>
  );
};

export default SkeletonLoader;
