import { FaSearch, FaHeart } from "react-icons/fa";
import "./Styles/style.css";
import profilePhoto from "/profile-photo.svg";
import Resize from "../../Resize";
import Scroll from "../../Scroll";
import { useLocation } from "react-router-dom";

const Navbar = ({
  setType,
  type,
  setResponse,
  setLoading,
  setSearchData,
  setTotalResults,
  inputRef,
  page,
}) => {
  const windowSize = Resize().size;
  const scrollTop = Scroll().scroll;
  // const inputRef = useRef();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let response = await fetch(
      `http://www.omdbapi.com/?s=${inputRef.current.value}&apikey=f0c1a9ad&type=${type}&page=${page}`,
      {
        referrerPolicy: "unsafe-url",
      }
    );
    let data = await response.json();
    setSearchData(data.Search);
    if (data.Response) {
      // console.log(data.totalResults);
      setTotalResults(data.totalResults);
      setTimeout(() => {
        setResponse(data.Response);
        setLoading(false);
      }, 4000);
    }
    // inputRef.current.value = "";
    inputRef.current.blur();
  };
  return (
    <nav
      className={`flex ${
        windowSize <= 700 ? "justify-between gap-3" : "justify-between"
      }  ${
        scrollTop >= 100 ? "fixed glued top-0 left-0 right-0" : ""
      } p-3 z-40 items-center transition ease-in-out duration-200`}
    >
      <img
        className={`h-10 ${
          windowSize <= 700 ? "w-16 h-6" : "w-32"
        }  object-fill cursor-pointer`}
        src="/logo.png"
        alt="Metflix"
        onClick={() => {
          setSearchData(null);
          setLoading(false);
          setResponse(null);
          window.location.reload();
        }}
      />
      <div
        className={`input--container ${
          windowSize <= 700 ? "justify-center gap-2" : "justify-between"
        } ${
          location.pathname === "/" ? "flex" : "hidden"
        }  gap-10 items-center`}
      >
        <form className="flex px-2" onSubmit={handleSubmit}>
          <input
            className={`bg-transparent ${
              windowSize <= 700 ? "text-xs w-full" : ""
            } text-black outline-none scale-90 text-md w-full  border-b-2 border-purple-300 placeholder:text-gray-600 transition ease-in-out duration-200 focus:scale-100`}
            type="text"
            id="movieInput"
            name="movie-name"
            ref={inputRef}
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
            onChange={(e) => setType(e.target.value)}
            name="movie-type"
            className={`${windowSize <= 700 ? "text-sm" : "text-md"}`}
          >
            <option value="movie">Movie</option>
            <option value="series">Series</option>
            <option value="episode">Episode</option>
          </select>
        </div>
      </div>
      <div
        className={`profile--wrapper ${
          windowSize <= 700
            ? windowSize <= 400
              ? "hidden"
              : "justify-around hidden gap-0  w-full"
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
