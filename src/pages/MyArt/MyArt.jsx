import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyArtCard from "./MyArtCard";
import Swal from "sweetalert2";

const MyArt = () => {
  const { user } = useContext(AuthContext) || {};
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`https://ink-scape-sever.vercel.app/myArt/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItem(data);
      });
  }, [user]);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("delete confirmed");
        fetch(`https://ink-scape-sever.vercel.app/arts/${_id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Successfully Deleted",
                icon: "success",
              });
              const remaining = item.filter((art) => art._id !== _id);
              setItem(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="mt-32 mx-5 max-w-6xl md:mx-auto ">
      {/* <h2 className="my-20 ">My art </h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-content-center place-items-center">
        {item.map((art) => (
          <MyArtCard
            key={art._id}
            art={art}
            item={item}
            setItem={setItem}
            handleDelete={handleDelete}
          ></MyArtCard>
        ))}
      </div>
    </div>
  );
};

export default MyArt;
