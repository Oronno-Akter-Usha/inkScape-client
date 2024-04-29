import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddArt = () => {
  const { user } = useContext(AuthContext);

  const handleAddArt = (e) => {
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
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const shortDescription = form.shortDescription.value;

    const newArt = {
      itemName,
      subcategory,
      price,
      rating,
      customization,
      stockStatus,
      photo,
      processingTime,
      userName,
      userEmail,
      shortDescription,
    };
    console.log(newArt);

    // send  data to the server
    fetch("http://localhost:5000/arts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newArt),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: " Art Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
        form.reset();
      });
  };
  return (
    <div className="mt-28 mx-5 md:mx-20">
      <h2 className="text-center font-bold text-3xl text-amber-500 mb-5">
        Add Art
      </h2>
      <form onSubmit={handleAddArt}>
        {/* form name and subcategory row */}
        <div className="md:flex gap-5 mb-6">
          <div className="form-control md:w-1/2 mb-6 md:mb-0">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
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
              name="subcategory"
              className="select select-bordered "
              required
            >
              <option disabled selected>
                Choose one
              </option>
              <option value="landscape painting">Landscape Painting</option>
              <option value="protrait drawing"> Portrait Drawing</option>
              <option value="watercolour painting">Watercolour Painting</option>
              <option value="oil painting">Oil Painting</option>
              <option value="charcoal sketching">Charcoal Sketching</option>
              <option value="cartoon drawing">Cartoon Drawing</option>
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
              name="customization"
              className="select select-bordered "
            >
              <option disabled selected>
                Choose one
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="form-control md:w-1/2 mb-6 md:mb-0">
            <label className="label">
              <span className="label-text font-bold">Stock Status</span>
            </label>
            <select
              id="stockStatus"
              name="stockStatus"
              className="select select-bordered"
            >
              <option disabled selected>
                Choose one
              </option>
              <option value="inStock"> In stock</option>
              <option value="madeToOrder">Made to Order</option>
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
              name="processingTime"
              placeholder="Enter processing time"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* form  user_name and user_email row */}
        <div className="md:flex gap-5 mb-6">
          <div className="form-control md:w-1/2 mb-6 md:mb-0">
            <label className="label">
              <span className="label-text font-bold">User Name</span>
            </label>
            <input
              type="text"
              name="userName"
              defaultValue={user?.displayName}
              className="input input-bordered w-full"
              readOnly
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">User Email</span>
            </label>
            <input
              type="text"
              name="userEmail"
              defaultValue={user?.email}
              className="input input-bordered w-full"
              readOnly
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
              id=""
              cols="30"
              rows="50"
              className="input input-bordered"
            ></textarea>
          </div>
        </div>

        <input
          type="submit"
          value="Add Art"
          className="btn btn-block bg-gradient-to-br from-amber-400 to-amber-600 text-white border-none"
        />
      </form>
    </div>
  );
};

export default AddArt;
