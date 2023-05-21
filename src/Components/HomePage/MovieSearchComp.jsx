import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseApiContext } from "../../App";

const MovieSearchComp = ({
  item: { Title, Poster, Year, Type, imdbID },
  setLink,
  setInfoData,
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
        handleInfo(imdbID);
      }}
      className="no-underline select-none"
      href="#"
    >
      <div className="card shadow-lg">
        <img
          className={` ${
            Poster === "N/A" ? "object-cover w-full" : "object-contain w-1/2"
          } mx-auto h-72`}
          src={Poster !== "N/A" ? Poster : "./no-bg.jpg"}
          alt={Title}
          loading="lazy"
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
    </Link>
  );
};

export default MovieSearchComp;
