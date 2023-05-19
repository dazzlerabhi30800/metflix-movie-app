import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Link, useNavigate } from "react-router-dom";
import { UseApiContext } from "../../App";

const MovieCardComp = ({
  item: { Poster, Genre, Title, Plot, imdbID, Released, imdbRating },
  tag,
  setLink,
  setLoading,
  setInfoData,
  link,
}) => {
  const navigate = useNavigate();
  const apiContext = UseApiContext();

  const handleInfo = async (id) => {
    let newLink;
    if (id === imdbID) {
      let response = await fetch(
        `http://www.omdbapi.com/?i=${id}&apikey=${apiContext}`,
        {
          referrerPolicy: "unsafe-url",
        }
      );
      let data = await response.json();
      if (data) {
        let titleJoin = data.Title.toLowerCase().replaceAll(" ", "-");
        newLink = "/" + titleJoin;
        navigate(newLink);
        setLink(newLink);
        setInfoData(data);
      }
    }
  };
  return (
    <Link
      onClick={(e) => {
        e.preventDefault();
        handleInfo(imdbID);
      }}
      className="no-underline select-none"
      to={link}
    >
      <div className={`card shadow-lg ${tag}`}>
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
    </Link>
  );
};

export default MovieCardComp;
