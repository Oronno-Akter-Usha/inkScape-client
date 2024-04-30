import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";

const Update = () => {
  const art = useLoaderData();
  console.log(art);
  const {
    _id,
    itemName,
    subcategory,
    price,
    rating,
    customization,
    stockStatus,
    photo,
    processingTime,
    shortDescription,
  } = art;

  const handleUpdateArt = (e) => {
    e.preventDefault();
    const form = e.target;
    const itemName = form.itemName.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const stockStatus = form.stockStatus.value;
    const photo = form.photo.value;
    const processingTime = form.processingTime.value;
    const shortDescription = form.shortDescription.value;

    const updatedArt = {
      itemName,
      subcategory,
      price,
      rating,
      customization,
      stockStatus,
      photo,
      processingTime,
      shortDescription,
    };
    console.log(updatedArt);

    fetch(`http://localhost:5000/arts/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedArt),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: " Successfully Updated",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div className="mt-28 mx-5 md:mx-20">
      <h2 className="text-center font-bold text-3xl text-amber-500 mb-5">
        Update Art
      </h2>
      <form onSubmit={handleUpdateArt}>
        {/* form name and subcategory row */}
        <div className="md:flex gap-5 mb-6">
          <div className="form-control md:w-1/2 mb-6 md:mb-0">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              defaultValue={itemName}
              name="itemName"
              placeholder="Enter name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2 mb-6 md:mb-0">
            <label className="label">
              <span className="label-text font-bold">Subcategory Name</span>
            </label>
            <select
              id="subcategory"
              defaultValue={subcategory}
              name="subcategory"
              className="select select-bordered "
              required
            >
              <option disabled selected>
                Choose one
              </option>
              <option value="Landscape Painting">Landscape Painting</option>
              <option value="Protrait Drawing"> Portrait Drawing</option>
              <option value="watercolour Painting">Watercolour Painting</option>
              <option value="Oil Painting">Oil Painting</option>
              <option value="Charcoal Sketching">Charcoal Sketching</option>
              <option value="Cartoon Drawing">Cartoon Drawing</option>
            </select>
          </div>
        </div>
        {/* form price and rating row */}
        <div className="md:flex gap-5 mb-6">
          <div className="form-control md:w-1/2 mb-6 md:mb-0">
            <label className="label">
              <span className="label-text font-bold">Price</span>
            </label>
            <input
              type="text"
              defaultValue={price}
              name="price"
              placeholder="Enter price"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Rating</span>
            </label>
            <input
              type="text"
              defaultValue={rating}
              name="rating"
              placeholder="Enter rating"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* form customization  row */}
        <div className="md:flex gap-5 mb-6">
          <div className="form-control md:w-1/2 mb-6 md:mb-0">
            <label className="label">
              <span className="label-text font-bold">Customization</span>
            </label>
            <select
              id="customization"
              defaultValue={customization}
              name="customization"
              className="select select-bordered "
            >
              <option disabled selected>
                Choose one
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="form-control md:w-1/2 mb-6 md:mb-0">
            <label className="label">
              <span className="label-text font-bold">Stock Status</span>
            </label>
            <select
              id="stockStatus"
              defaultValue={stockStatus}
              name="stockStatus"
              className="select select-bordered"
            >
              <option disabled selected>
                Choose one
              </option>
              <option value="In stock"> In Stock</option>
              <option value="Made to Order">Made to Order</option>
            </select>
          </div>
        </div>

        {/* form photo and processing_time row */}
        <div className=" md:flex gap-5 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Photo</span>
            </label>
            <input
              type="text"
              defaultValue={photo}
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Processing Time</span>
            </label>
            <input
              type="text"
              defaultValue={processingTime}
              name="processingTime"
              placeholder="Enter processing time"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* form short description row */}
        <div className="mb-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Short Description</span>
            </label>
            <textarea
              name="shortDescription"
              defaultValue={shortDescription}
              id=""
              cols="30"
              rows="50"
              className="input input-bordered"
            ></textarea>
          </div>
        </div>

        <input
          type="submit"
          value="Update"
          className="btn btn-block bg-gradient-to-br from-amber-400 to-amber-600 text-white border-none"
        />
      </form>
    </div>
  );
};

export default Update;
