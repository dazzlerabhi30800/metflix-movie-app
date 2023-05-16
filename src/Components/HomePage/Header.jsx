import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import data from "../Data/HeaderData";
import Resize from "../../../Resize";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const Header = () => {
  const windowSize = Resize().size;
  const styles = {
    backgroundRepeat: "no-repeat",
    backgroundPosition: windowSize <= 700 ? "50% 100%" : "center 50%",
    backgroundSize: "cover",
  };
  return (
    <header>
      <Swiper
        modules={[Navigation]}
        navigation={windowSize > 700 ? true : false}
        spaceBetween={0}
        className="swiper"
        loop={true}
        slidesPerView={1}
      >
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
                  <div className="link--wrapper my-2 flex gap-4 items-center">
                    <a
                      className={`py-1.5 px-6 rounded-sm bg-sky-500 transition ease-in duration-300 whitespace-nowrap hover:bg-sky-600 text-white ${
                        windowSize <= 700 ? "text-sm" : "text-base"
                      }`}
                      href={item.imdbLink}
                      target="_blank"
                    >
                      Imdb
                    </a>
                    <a
                      className={`py-1.5 px-6 rounded-sm bg-fuchsia-500 transition ease-in whitespace-nowrap duration-300 hover:bg-fuchsia-600 text-white ${
                        windowSize <= 700 ? "text-sm" : "text-base"
                      }`}
                      href={item.trailerLink}
                      target="_blank"
                    >
                      Trailer Now
                    </a>
                  </div>
                  <Stack direction="row" spacing={2}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={item.imdbRating / 2}
                      precision={0.5}
                      sx={{
                        "& .MuiRating-iconEmpty": {
                          color: "#fbbf58",
                        },
                      }}
                      readOnly
                    />
                    <span className="text-lg">{item.imdbRating}</span>
                  </Stack>
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
