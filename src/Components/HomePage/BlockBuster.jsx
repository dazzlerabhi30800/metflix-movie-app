import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCardComp from "./MovieCardComp";
import Resize from "../../../Resize.ts";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const BlockBuster = ({
  setLink,
  setLoading,
  setInfoData,
  data,
  title,
  tag,
  link,
}) => {
  const windowSize = Resize().size;
  const sliderRef = useRef();
  return (
    <div className="mt-24  mb-12 text-black px-4">
      <div className="flex justify-between items-center">
        <h2 className="my-4">{title}</h2>
        {windowSize >= 800 && (
          <div className="flex gap-3 text-3xl">
            <FaChevronCircleLeft
              onClick={() => sliderRef.current?.slidePrev()}
              className="cursor-pointer text-violet-600 transition ease-in duration-300 hover:text-violet-400"
            />
            <FaChevronCircleRight
              onClick={() => sliderRef.current?.slideNext()}
              className="cursor-pointer text-rose-600 transition ease-in duration-300 hover:text-rose-400"
            />
          </div>
        )}
      </div>
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
        onBeforeInit={(swiper) => {
          sliderRef.current = swiper;
        }}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <MovieCardComp
                item={item}
                tag={tag}
                setLink={setLink}
                setLoading={setLoading}
                setInfoData={setInfoData}
                link={link}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BlockBuster;
