import { FaSearch, FaHeart } from "react-icons/fa";
import "./Styles/style.css";
import profilePhoto from "/profile-photo.svg";
import Resize from "../../Resize";

const Navbar = () => {
  const windowSize = Resize().size;
  return (
    <nav
      className={`flex ${
        windowSize <= 700 ? "flex-col gap-8" : "flex-row"
      } justify-between p-3 fixed top-0 left-0 right-0 z-40 items-center`}
    >
      <img
        className={`h-10 ${
          windowSize <= 700 ? "hidden" : "block"
        } w-32 object-fill`}
        src="/logo.png"
        alt="Metflix"
      />
      <div
        className={`input--container ${
          windowSize <= 700
            ? windowSize <= 400
              ? "flex-col"
              : "w-full justify-between p-0.5 sticky"
            : ""
        } flex gap-6 items-center`}
      >
        <form className="flex px-2">
          <input
            className={`bg-transparent ${
              windowSize <= 700
                ? windowSize <= 400
                  ? "basis-full"
                  : "flex text-sm"
                : "text-md"
            } text-white outline-none scale-90  border-b-2 border-purple-300 placeholder:text-gray-200 transition ease-in-out duration-200 focus:scale-100`}
            type="text"
            id="movieInput"
            name="movie-name"
            placeholder="Type to search"
          />
          <label
            htmlFor="movie-name"
            className={`transition ${
              windowSize <= 700 ? "hide" : ""
            } ease-in-out duration-300`}
          >
            <FaSearch className="search--icon" />
          </label>
        </form>
        <div className="type--wrapper">
          <select
            name="movie-type"
            className={`${windowSize <= 700 ? "text-sm" : "text-md"}`}
          >
            <option value="movie">Movie</option>
            <option value="movie">Series</option>
            <option value="episode">Episode</option>
          </select>
        </div>
      </div>
      <div
        className={`profile--wrapper ${
          windowSize <= 700
            ? windowSize <= 400
              ? "hidden"
              : "justify-around gap-0  w-full"
            : ""
        } flex px-4 items-center gap-8`}
      >
        <div className="profile--img flex items-center justify-center p-1 rounded-full bg-red-400 transition ease-in duration-400 hover:bg-pink-500">
          <img
            className="w-18 rounded-full h-8"
            src={profilePhoto}
            alt="profile-photo"
          />
        </div>
        <a
          className="text-pink-500 relative"
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          <FaHeart className="text-3xl" />
          <div className="favorite--quantity absolute -top-2 bg-indigo-400 rounded-full py-0.5 px-1.5 text-white  text-xs -right-2">
            4
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
