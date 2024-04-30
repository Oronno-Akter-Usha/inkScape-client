import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ArtCard = ({ art }) => {
  const { photo, itemName, subcategory, price } = art;
  return (
    <div className="card shadow-xl">
      <figure className="h-[200px] w-full">
        <img src={photo} alt="Painting and Drawing" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{itemName}</h2>
        <h3 className="text-lg">{subcategory}</h3>
        <p>{price}</p>

        <Link to={`/details/${art._id}`}>
          <button className="btn px-3 py-0 md:px-5 bg-gradient-to-br from-amber-400 to-amber-600 text-white border-none">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

ArtCard.propTypes = {
  art: PropTypes.object,
};

export default ArtCard;
