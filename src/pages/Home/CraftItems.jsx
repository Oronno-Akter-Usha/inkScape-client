import { useLoaderData } from "react-router-dom";
import ArtCard from "./ArtCard";

const CraftItems = () => {
  const arts = useLoaderData();
  console.log(arts);
  return (
    <div className="mb-20">
      <h2 className="font-bold text-3xl text-amber-500 mb-6 text-center">
        Craft Items
      </h2>
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-content-center place-items-center">
        {arts.slice(0, 6).map((art) => (
          <ArtCard key={art._id} art={art}></ArtCard>
        ))}
      </div>
    </div>
  );
};

export default CraftItems;
