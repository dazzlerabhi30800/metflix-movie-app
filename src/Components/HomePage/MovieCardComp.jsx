import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Link, useNavigate } from "react-router-dom";
import { UseApiContext } from "../../App";

const MovieCardComp = ({
  item: { Poster, Genre, Title, Plot, imdbID, Released, imdbRating },
  tag,
  setLink,
  setInfoData,
  link,
}) => {
  const navigate = useNavigate();
  const apiContext = UseApiContext();

  const handleInfo = async (id, title) => {
    let newLink;
    let titleJoin = title.toLowerCase().replaceAll(" ", "-");
    newLink = "/" + titleJoin + `-${id}`;
    navigate(newLink);
    setLink(newLink);
    window.scrollTo(0, 0);
    if (id === imdbID) {
      let response = await fetch(
        `http://www.omdbapi.com/?i=${id}&apikey=${apiContext}`,
        {
          referrerPolicy: "unsafe-url",
        }
      );
      let data = await response.json();
      if (data) {
        let dataTimeout = setTimeout(() => {
          setInfoData(data);
        }, 4000);
        return () => clearTimeout(dataTimeout);
      }
    }
  };
  return (
    <Link
      onClick={(e) => {
        e.preventDefault();
        handleInfo(imdbID, Title);
      }}
      className="no-underline select-none"
      to={link}
    >
      <div className={`card movie--card shadow-lg ${tag}`}>
        <img
          className="rounded-t-md w-full h-72 object-contain"
          src={Poster}
          alt={Title}
          loading="lazy"
        />
        <div className="info flex flex-col gap-3 text-center  py-4 px-2">
          <h3 className="title font-medium">{Title}</h3>
          <p>{Plot.substring(0, 90)}...</p>
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
                  color: "#000",
                },
                "& .MuiRating-iconFilled": {
                  color: "#000",
                },
              }}
              readOnly
            />
            <span className="text-lg font-bold text-black">{imdbRating}</span>
          </Stack>
        </div>
      </div>
    </Link>
  );
};

export default MovieCardComp;
