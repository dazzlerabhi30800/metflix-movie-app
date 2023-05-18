import React from "react";
import { UseInfoContext } from "../../../App";
import { Link } from "react-router-dom";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const MovieInfo = () => {
  const infoContext = UseInfoContext();
  return (
    <>
      {infoContext && (
        <main className="movie--info text-black">
          <div className="poster--img">
            <img src={infoContext.Poster} alt="" />
          </div>
          <div className="add--info">
            <h1>{infoContext.Title}</h1>
            <span>Language</span>
            <p>{infoContext.Plot}</p>
            <p className="font-bold">
              Genre :- <span className="font-normal">{infoContext.Genre}</span>
            </p>
            <div>
              <p>{infoContext.Released}</p>
              <p>{infoContext.Runtime}</p>
            </div>
            <div>
              <p className="font-bold">
                Actors <span className="font-normal">{infoContext.Actors}</span>
              </p>
              <p>{infoContext.Director}</p>
            </div>
            <Stack direction="row" spacing={1}>
              <Rating
                name="half-rating-read"
                defaultValue={infoContext.imdbRating / 2}
                precision={0.5}
                sx={{
                  "& .MuiRating-iconEmpty": {
                    color: "red",
                  },
                  "& .MuiRating-iconFilled": {
                    color: "red",
                  },
                }}
                readOnly
              />
              <span className="text-lg font-medium text-red-700">
                {infoContext.imdbRating}
              </span>
            </Stack>
            <p>Box office :- {infoContext.BoxOffice}</p>
          </div>
          <Link
            className="bg-purple-500 text-white py-1 px-4 text-lg rounded-sm"
            to="/"
          >
            Go Back
          </Link>
        </main>
      )}
    </>
  );
};

export default MovieInfo;
