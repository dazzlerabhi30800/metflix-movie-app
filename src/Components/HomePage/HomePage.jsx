import BlockBuster from "./BlockBuster";
import Header from "./Header";
import data from "../Data/MovieData.jsx";
import ActionData from "../Data/ActionData.jsx";
import KoreanData from "../Data/KoreanMovieData.jsx";
import SearchComp from "./SearchComp";
import SkeletonLoader from "../SkeletonLoading/SkeletonLoader";

const HomePage = ({
  setInfoData,
  loading,
  link,
  setLink,
  searchData,
  response,
  setResponse,
  setLoading,
  setSearchData,
  totalResults,
  setTotalResults,
  inputRef,
  type,
  setPage,
  page,
}) => {
  return (
    <>
      {!searchData && <Header />}
      <main>
        {!searchData && (
          <BlockBuster
            setLink={setLink}
            setInfoData={setInfoData}
            link={link}
            tag="classic"
            title="Classic BlockBuster Movies"
            data={data}
          />
        )}
        {!searchData && (
          <BlockBuster
            setLink={setLink}
            setInfoData={setInfoData}
            link={link}
            title="Action Movies"
            tag="action"
            data={ActionData}
          />
        )}
        {!searchData && (
          <BlockBuster
            setLink={setLink}
            setInfoData={setInfoData}
            link={link}
            title="Korean Hits"
            tag="korean"
            data={KoreanData}
          />
        )}
        {/* {!searchData && <SkeletonLoader />} */}
        {searchData && (
          <SearchComp
            setLink={setLink}
            setInfoData={setInfoData}
            loading={loading}
            data={searchData}
            response={response}
            setResponse={setResponse}
            setLoading={setLoading}
            setSearchData={setSearchData}
            totalResults={totalResults}
            setTotalResults={setTotalResults}
            searchData={searchData}
            inputRef={inputRef}
            type={type}
            setPage={setPage}
            page={page}
          />
        )}
      </main>
    </>
  );
};

export default HomePage;
