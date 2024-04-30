import { Link, useLoaderData } from "react-router-dom";

const ArtCraft = () => {
  const arts = useLoaderData();
  console.log(arts);
  return (
    <div className="mt-28 mx-5 md:mx-20">
      <h2 className="text-center font-bold text-3xl text-amber-500 mb-5">
        All Art & Craft
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th> Image </th>
              <th> Name</th>
              <th> Price</th>
              <th> Stock Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {arts.map((art, i) => (
              <tr key={art._id}>
                <th>{(i = i + 1)}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={art.photo} alt="Painting And Drawing" />
                    </div>
                  </div>
                </td>
                <td>{art.itemName}</td>
                <td>{art.price}</td>
                <td>{art.stockStatus}</td>
                <td>
                  <Link to={`/details/${art._id}`}>
                    <button className="btn px-3 py-0 md:px-5 bg-gradient-to-br from-amber-400 to-amber-600 text-white border-none">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArtCraft;
