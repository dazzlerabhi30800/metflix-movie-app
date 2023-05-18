import React from "react";

const MovieSearchComp = ({ item: { Title, Poster, Year, Type } }) => {
  return (
    <a
      onClick={(e) => e.preventDefault()}
      className="no-underline select-none"
      href="#"
    >
      <div className="card shadow-lg">
        <img
          className="rounded-t-md w-full h-72 object-contain"
          src={Poster}
          alt={Title}
        />
        <div className="info flex flex-col gap-5 text-center py-6 my-4 px-2">
          <h3 className="title font-bold">{Title}</h3>
          <p className="py-2 px-4 text-black mx-auto">
            Year - <span>{Year}</span>
          </p>
          <span className="bg-teal-300 text-sm w-fit mx-auto py-2 font-semibold px-4 rounded-md text-black">
            Type - {Type}
          </span>
        </div>
      </div>
    </a>
  );
};

export default MovieSearchComp;
