import { useLoaderData } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  console.log(details);
  const {
    itemName,
    subcategory,
    price,
    rating,
    customization,
    stockStatus,
    photo,
    processingTime,
    shortDescription,
  } = details;
  return (
    <div className="mt-28 mx-5 md:mx-20">
      <div className="md:flex gap-12">
        <div className="md:w-1/2">
          <img src={photo} alt="" className="w-full" />
        </div>
        <div className="md:1/2">
          <h3 className="text-2xl font-semibold mb-1"> Name: {itemName}</h3>
          <h4 className=" font-medium mb-6"> Sub category : {subcategory}</h4>
          <p className="font-medium">
            Description: <span className="font-normal">{shortDescription}</span>
          </p>
          <div className="space-y-3">
            <p>
              Price : <span>{price}</span>
            </p>
            <p>
              Rating : <span>{rating}</span>
            </p>
            <p>
              Customization : <span>{customization}</span>
            </p>
            <p>
              Processing Time : <span>{processingTime}</span>
            </p>
            <p>
              Stock Status : <span>{stockStatus}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
