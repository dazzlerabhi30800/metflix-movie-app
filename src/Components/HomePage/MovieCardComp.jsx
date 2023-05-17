import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const MovieCardComp = ({
  item: { Poster, Genre, Title, Plot, Released, imdbRating },
}) => {
  return (
    <a
      onClick={(e) => e.preventDefault()}
      className="no-underline select-none"
      href="#"
    >
      <div className="card shadow-lg  bg-gradient-to-r from-red-300 rounded-md to-pink-300">
        <img
          className="rounded-t-md w-full h-72 object-contain"
          src={Poster}
          alt={Title}
        />
        <div className="info flex flex-col gap-3 text-center  py-4 px-2">
          <h3 className="title font-medium">{Title}</h3>
          <p>{Plot.substring(0, 100)}...</p>
          <span className="text-sm font-semibold">Genre - {Genre}</span>
          <p className="font-medium text-base">
            Released - <span className="font-normal">{Released}</span>
          </p>
          <Stack direction="row" spacing={1} className="self-center">
            <Rating
              name="half-rating-read"
              defaultValue={imdbRating / 2}
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
              {imdbRating}
            </span>
          </Stack>
        </div>
      </div>
    </a>
  );
};

export default MovieCardComp;
