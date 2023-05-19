import React from "react";
import SkeletonComp from "./SkeletonComp";
import Resize from "../../../Resize";

const SkeletonLoader = () => {
  const windowSize = Resize().size;
  let skeletonCount =
    windowSize >= 700
      ? windowSize >= 1100
        ? windowSize >= 1400
          ? 8
          : 6
        : 6
      : 4;
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
