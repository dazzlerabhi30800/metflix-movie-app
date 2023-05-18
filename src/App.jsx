import { useEffect, useState, createContext, useContext } from "react";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import MovieInfo from "./Components/HomePage/InfoPage/MovieInfo";

let InfoContext = createContext();

export function UseInfoContext() {
  return useContext(InfoContext);
}

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [link, setLink] = useState(
    JSON.parse(localStorage.getItem("link")) || null
  );
  const [infoData, setInfoData] = useState(
    JSON.parse(localStorage.getItem("info")) || null
  );
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   navigate("/");
  // }, []);

  useEffect(() => {
    localStorage.setItem("link", JSON.stringify(link));
  }, [link]);

  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(infoData));
  }, [infoData]);

  return (
    <InfoContext.Provider value={infoData}>
      <>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HomePage
                link={link}
                setLink={setLink}
                setInfoData={setInfoData}
                setLoading={setLoading}
              />
            }
          />
          <Route exact path={link} element={<MovieInfo loading={loading} />} />
        </Routes>
      </>
    </InfoContext.Provider>
  );
}

export default App;
