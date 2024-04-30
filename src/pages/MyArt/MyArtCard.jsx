import PropTypes from "prop-types";
import { IoIosStar } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const MyArtCard = ({ art, handleDelete }) => {
  console.log(art, handleDelete);
  const { _id, itemName, price, rating, customization, stockStatus, photo } =
    art;

  return (
    <div className="card shadow-xl ">
      <figure className="h-[200px] w-full relative">
        <img src={photo} alt="Painting and Drawing" />
        <div className="absolute  top-3 right-3 flex gap-2">
          <Link to={`/update/${_id}`} className="p-1 rounded-sm bg-amber-400">
            <MdEdit className="text-3xl  text-white" />
          </Link>

          <button
            onClick={() => handleDelete(_id)}
            className="p-1 rounded-sm bg-red-600"
          >
            <MdDelete
              className="text-3xl text-white
           "
            />
          </button>
        </div>
      </figure>
      <div className="card-body">
        <div>
          <h2 className="text-2xl font-medium">{itemName}</h2>
          {/* <h3 className="text-lg">{subcategory}</h3> */}
        </div>
        <div className="flex justify-between w-full">
          <p>{price}</p>
          <p className="flex items-center">
            <IoIosStar />
            {rating}
          </p>
        </div>
        <p>Customization: {customization}</p>
        <p className="flex items-center">Stock Status : {stockStatus}</p>
      </div>
    </div>
  );
};

MyArtCard.propTypes = {
  art: PropTypes.object,
  handleDelete: PropTypes.object,
};

export default MyArtCard;
