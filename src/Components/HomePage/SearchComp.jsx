import React from "react";
import MovieSearchComp from "./MovieSearchComp";

const SearchComp = ({ data, loading, response }) => {
  const movieComp = data.map((item, index) => {
    return <MovieSearchComp item={item} key={index} />;
  });
  return (
    <div className="movie--search text-black">
      {loading ? (
        <h1 className="w-fit mx-auto">Loading ...</h1>
      ) : response ? (
        movieComp
      ) : (
        <h1 className="w-fit mx-auto text-xl font-bold">
          Your Search has not found
        </h1>
      )}
    </div>
  );
};

export default SearchComp;
