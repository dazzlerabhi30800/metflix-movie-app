import BlockBuster from "./BlockBuster";
import Header from "./Header";
import data from "../Data/MovieData.jsx";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <BlockBuster data={data} />
      </main>
    </>
  );
};

export default HomePage;
