import React, { useState } from "react";
import MovieSearchComp from "./MovieSearchComp";
import Spinner from "../../Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const SearchComp = ({
  data,
  loading,
  setLink,
  setInfoData,
  setSearchData,
  totalResults,
  setTotalResults,
  searchData,
  inputRef,
  type,
  setPage,
  page,
}) => {
  const [more, setMore] = useState(true);
  const loadMoreData = async () => {
    const fetchTimeout = setTimeout(async () => {
      let response = await fetch(
        `http://www.omdbapi.com/?s=${
          inputRef.current.value
        }&apikey=f0c1a9ad&type=${type}&page=${page + 1}`,
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
    }, 2000);
    return () => clearTimeout(fetchTimeout);
  };
  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <InfiniteScroll
          dataLength={searchData.length}
          next={loadMoreData}
          hasMore={more}
          loader={<Spinner />}
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
