import BlockBuster from "./BlockBuster";
import Header from "./Header";
import data from "../Data/MovieData.jsx";
import ActionData from "../Data/ActionData.jsx";
import KoreanData from "../Data/KoreanMovieData.jsx";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <BlockBuster
          tag="classic"
          title="Classic BlockBuster Movies"
          data={data}
        />
        <BlockBuster title="Action Movies" tag="action" data={ActionData} />
        <BlockBuster title="Korean Hits" tag="korean" data={KoreanData} />
      </main>
    </>
  );
};

export default HomePage;
