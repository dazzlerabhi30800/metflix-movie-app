import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
}

export default App;
