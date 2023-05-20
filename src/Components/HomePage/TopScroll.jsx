import React from "react";
import { FaChevronUp } from "react-icons/fa";
import Scroll from "../../../Scroll";

const ScrollTop = () => {
  const scrollTop = Scroll().scroll;
  return (
    <div
      onClick={() => window.scrollTo(0, 0)}
      className={`p-2 bg-rose-600  fixed bottom-6 opacity-0 right-2 text-white rounded-sm text-lg w-fit transition ease-in-out duration-400 hover:bg-fuchsia-400 cursor-pointer ${
        scrollTop > 120
          ? "z-50 translate-y-0 opacity-100"
          : "z-0 -translate-y-10"
      } `}
    >
      <FaChevronUp />
    </div>
  );
};

export default ScrollTop;
