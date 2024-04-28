const AddArt = () => {
  const handleAddArt = (e) => {
    e.preventDefault();
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
              name="name"
              placeholder="Enter name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Subcategory Name</span>
            </label>
            <input
              type="text"
              name="subcategory"
              placeholder="Enter subcategory name"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* form price and rating row */}
        <div className="md:flex gap-5 mb-6">
          <div className="form-control md:w-1/2 mb-6 md:mb-0">
            <label className="label">
              <span className="label-text font-bold">Price</span>
            </label>
            <input
              type="number"
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
              type="number"
              name="rating"
              placeholder="Enter rating"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* form customization and processing_time row */}
        <div className="md:flex gap-5 mb-6">
          <div className="form-control md:w-1/2 mb-6 md:mb-0">
            <label className="label">
              <span className="label-text font-bold">Customization</span>
            </label>
            <select
              id="customization"
              name="customization"
              className="input input-bordered"
            >
              <option value="chooseOne" disabled selected>
                Choose one
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
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
              name=""
              placeholder=""
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">User Email</span>
            </label>
            <input
              type="text"
              name=""
              placeholder=""
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* form photo row */}
        <div className="mb-6">
          <div className="form-control w-full">
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
