import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import data from "../Data/HeaderData";
import Resize from "../../../Resize";

const Header = () => {
  const windowSize = Resize().size;
  const styles = {
    backgroundRepeat: "no-repeat",
    backgroundPosition: windowSize <= 700 ? "50% 100%" : "center",
    backgroundSize: "cover",
  };
  return (
    <header>
      <Swiper spaceBetween={0} loop={true} slidesPerView={1}>
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                style={{ ...styles, backgroundImage: `url("${item.image}")` }}
                className="movie--slide"
              >
                <div className="movie--container p-6">
                  <h1 className="font-bebas">{item.Title}</h1>
                  <p className="font-inter font-medium">{item.Plot}</p>
                  <span>{item.Released}</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </header>
  );
};

export default Header;
