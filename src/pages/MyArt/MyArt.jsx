import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyArtCard from "./MyArtCard";

const MyArt = () => {
  const { user } = useContext(AuthContext) || {};
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myArt/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItem(data);
      });
  }, [user]);

  return (
    <div className="mt-32 mx-5 max-w-6xl md:mx-auto ">
      {/* <h2 className="my-20 ">My art </h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-content-center place-items-center">
        {item.map((art) => (
          <MyArtCard key={art._id} art={art}></MyArtCard>
        ))}
      </div>
    </div>
  );
};

export default MyArt;
