import BlockBuster from "./BlockBuster";
import Header from "./Header";
import data from "../Data/MovieData.jsx";
import ActionData from "../Data/ActionData.jsx";
import KoreanData from "../Data/KoreanMovieData.jsx";
import SearchComp from "./SearchComp";

const HomePage = ({
  setInfoData,
  loading,
  link,
  setLink,
  searchData,
  response,
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
        {searchData && (
          <SearchComp loading={loading} data={searchData} response={response} />
        )}
      </main>
    </>
  );
};

export default HomePage;
