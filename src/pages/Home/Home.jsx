import Banner from "./Banner";
import CraftItems from "./CraftItems";
import FAQ from "./FAQ";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="mx-5 md:mx-20">
        <CraftItems></CraftItems>
        <FAQ></FAQ>
      </div>
      {/* <h2 className="text-3xl text-amber-600">Home</h2> */}
    </div>
  );
};

export default Home;
