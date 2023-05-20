import React from "react";
import { UseInfoContext } from "../../../App";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Spinner from "../../../Spinner";

const MovieInfo = ({ setInfoData, setLink }) => {
  const infoContext = UseInfoContext();
  return (
    <>
      {infoContext ? (
        <main className="movie--info text-black">
          <div className="poster--img">
            <img
              loading="lazy"
              src={
                infoContext.Poster !== "N/A"
                  ? infoContext.Poster
                  : "./no-bg.jpg"
              }
              alt={infoContext.Title}
            />
          </div>
          <div className="add--info">
            <h1>{infoContext.Title}</h1>
            <span className="font-bold">Language - {infoContext.Language}</span>
            <p className="plot--info">{infoContext.Plot}</p>
            <p className="font-bold">
              Genre :- <span className="font-normal">{infoContext.Genre}</span>
            </p>
            <div>
              <p className="font-bold my-1">
                Released At -{" "}
                <span className="font-normal">{infoContext.Released}</span>
              </p>
              <p className="font-bold my-1">
                Runtime -{" "}
                <span className="font-normal">{infoContext.Runtime}</span>
              </p>
            </div>
            <div>
              <p className="font-bold mx-auto">
                Actors :-{" "}
                <span className="font-normal">{infoContext.Actors}</span>
              </p>
              <p>{infoContext.Director}</p>
            </div>
            <Stack className="rating--comp" direction="row" spacing={1}>
              <span className="font-bold">Rating -</span>
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
              <span className="text-lg font-bold text-rose-600">
                {infoContext.imdbRating}
              </span>
            </Stack>

            <p className="font-bold">
              Box Office :-{" "}
              <span className="font-normal">{infoContext.BoxOffice}</span>
            </p>
          </div>
          <Link
            className="bg-purple-500 flex items-center gap-2 font-semibold text-white py-1 px-4 text-lg rounded-sm transition ease-in duration-300 hover:bg-purple-700"
            onClick={() => {
              setLink(null);
              setInfoData(null);
              window.scrollTo(0, 0);
            }}
            to="/"
          >
            <FaChevronLeft /> Go Back
          </Link>
        </main>
      ) : (
        <Spinner additionalClass="top" />
      )}
    </>
  );
};

export default MovieInfo;
