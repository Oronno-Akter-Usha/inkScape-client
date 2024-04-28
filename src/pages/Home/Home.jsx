import app from "../../firebase/firebase.config";
import Banner from "./Banner";
import FAQ from "./FAQ";

const Home = () => {
  console.log(app);
  return (
    <div className="">
      <Banner></Banner>
      <div className="mx-5 md:mx-20">
        <FAQ></FAQ>
      </div>
      {/* <h2 className="text-3xl text-amber-600">Home</h2> */}
    </div>
  );
};

export default Home;
