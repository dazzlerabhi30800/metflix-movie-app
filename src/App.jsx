import { useEffect, useState, createContext, useContext, useRef } from "react";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Routes, Route } from "react-router-dom";
import MovieInfo from "./Components/HomePage/InfoPage/MovieInfo";

let InfoContext = createContext();
let ApiContext = createContext();

export function UseInfoContext() {
  return useContext(InfoContext);
}

export function UseApiContext() {
  return useContext(ApiContext);
}

function App() {
  const inputRef = useRef();
  // Api Key
  const apiKey = import.meta.env.VITE_SOME_KEY;

  // States and Hooks
  const [link, setLink] = useState(
    JSON.parse(localStorage.getItem("link")) || null
  );
  const [infoData, setInfoData] = useState(
    JSON.parse(localStorage.getItem("info")) || null
  );
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [type, setType] = useState("movie");
  const [searchData, setSearchData] = useState(null);
  const [response, setResponse] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  // Use Effect functions

  useEffect(() => {
    localStorage.setItem("link", JSON.stringify(link));
  }, [link]);

  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(infoData));
  }, [infoData]);

  return (
    <InfoContext.Provider value={infoData}>
      <ApiContext.Provider value={apiKey}>
        <>
          <Navbar
            inputValue={inputValue}
            setInputValue={setInputValue}
            type={type}
            setType={setType}
            setResponse={setResponse}
            setLoading={setLoading}
            setSearchData={setSearchData}
            setTotalResults={setTotalResults}
            inputRef={inputRef}
            page={page}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <HomePage
                  link={link}
                  setLink={setLink}
                  setInfoData={setInfoData}
                  loading={loading}
                  searchData={searchData}
                  response={response}
                  setResponse={setResponse}
                  setLoading={setLoading}
                  setSearchData={setSearchData}
                  totalResults={totalResults}
                  setTotalResults={setTotalResults}
                  inputRef={inputRef}
                  type={type}
                  setPage={setPage}
                  page={page}
                />
              }
            />
            <Route
              exact
              path={link}
              element={
                <MovieInfo setLink={setLink} setInfoData={setInfoData} />
              }
            />
          </Routes>
        </>
      </ApiContext.Provider>
    </InfoContext.Provider>
  );
}

export default App;
