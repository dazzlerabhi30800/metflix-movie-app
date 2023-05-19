import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonComp = () => {
  const duration = 2;
  return (
    <SkeletonTheme baseColor="#A8A6A6" highlightColor="#F1EAEB">
      <a
        onClick={(e) => {
          e.preventDefault();
        }}
        className="no-underline select-none"
        href="#"
      >
        <div className="card shadow-lg">
          <div className="bg-cover w-1/2 mx-auto h-auto">
            <Skeleton borderRadius={0} duration={duration} height={200} />
          </div>
          <div className="info flex flex-col gap-5 text-center py-6 my-4 px-2">
            <h3 className="title font-bold">
              <Skeleton duration={duration} height={20} width={300} />
            </h3>
            <p className="py-2 none px-4 text-black mx-auto">
              <Skeleton duration={duration} height={20} width={300} />
            </p>
            <span className="text-sm w-fit mx-auto py-2 font-semibold px-4 rounded-md text-black">
              <Skeleton duration={duration} height={20} width={300} />
            </span>
          </div>
        </div>
      </a>
    </SkeletonTheme>
  );
};

export default SkeletonComp;
