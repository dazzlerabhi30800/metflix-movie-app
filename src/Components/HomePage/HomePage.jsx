import BlockBuster from "./BlockBuster";
import Header from "./Header";
import data from "../Data/MovieData.jsx";
import ActionData from "../Data/ActionData.jsx";
import KoreanData from "../Data/KoreanMovieData.jsx";

const HomePage = ({ setInfoData, setLoading, link, setLink }) => {
  return (
    <>
      <Header />
      <main>
        <BlockBuster
          setLink={setLink}
          setInfoData={setInfoData}
          setLoading={setLoading}
          link={link}
          tag="classic"
          title="Classic BlockBuster Movies"
          data={data}
        />
        <BlockBuster
          setLink={setLink}
          setInfoData={setInfoData}
          setLoading={setLoading}
          link={link}
          title="Action Movies"
          tag="action"
          data={ActionData}
        />
        <BlockBuster
          setLink={setLink}
          setInfoData={setInfoData}
          setLoading={setLoading}
          link={link}
          title="Korean Hits"
          tag="korean"
          data={KoreanData}
        />
      </main>
    </>
  );
};

export default HomePage;
