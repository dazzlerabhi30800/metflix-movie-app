import React, { useState } from "react";
import MovieSearchComp from "./MovieSearchComp";
import SkeletonLoader from "../SkeletonLoading/SkeletonLoader";
import InfiniteScroll from "react-infinite-scroll-component";
import { UseApiContext } from "../../App";

const SearchComp = ({
  data,
  loading,
  setLink,
  setInfoData,
  setSearchData,
  setTotalResults,
  searchData,
  inputRef,
  type,
  setPage,
  page,
}) => {
  const [more, setMore] = useState(true);
  const apiContext = UseApiContext();

  const loadMoreData = async () => {
    const fetchTimeout = setTimeout(async () => {
      let response = await fetch(
        `http://www.omdbapi.com/?s=${
          inputRef.current.value
        }&apikey=${apiContext}&type=${type}&page=${page + 1}`,
        {
          referrerPolicy: "unsafe-url",
        }
      );
      setPage((prevState) => prevState + 1);
      let data = await response.json();
      if (data.Response === "True") {
        setMore(true);
        setSearchData(searchData.concat(data.Search));
        setTotalResults(data.totalResults);
      } else {
        setMore(false);
        return;
      }
    }, 3000);
    return () => clearTimeout(fetchTimeout);
  };
  return (
    <>
      {loading && <SkeletonLoader />}
      {!loading && (
        <InfiniteScroll
          dataLength={searchData.length}
          next={loadMoreData}
          hasMore={more}
          loader={<SkeletonLoader />}
          style={{ overflow: "hidden" }}
        >
          <div className="movie--search text-black">
            {data.map((item, index) => {
              return (
                <MovieSearchComp
                  item={item}
                  key={index}
                  setLink={setLink}
                  setInfoData={setInfoData}
                  loading={loading}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
};

export default SearchComp;
