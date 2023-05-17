import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCardComp from "./MovieCardComp";
import Resize from "../../../Resize.ts";

const BlockBuster = ({ data, title, tag }) => {
  const windowSize = Resize().size;
  return (
    <div className="mt-24  mb-12 text-black px-4">
      <h2 className="my-4">{title}</h2>
      <Swiper
        className="flex flex-row"
        spaceBetween={20}
        slidesPerView={
          windowSize <= 700
            ? windowSize <= 600
              ? 1
              : 2
            : windowSize >= 1000
            ? windowSize >= 1400
              ? 4
              : 3
            : 2
        }
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <MovieCardComp item={item} tag={tag} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BlockBuster;
