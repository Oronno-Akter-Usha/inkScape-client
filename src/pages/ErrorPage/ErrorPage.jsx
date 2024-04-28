import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center text-center h-screen">
      {error.status === 404 && (
        <div className="mt-10">
          <img
            className="md:h-[400px]"
            src="https://i.postimg.cc/zGgX7ZPt/13315300-5203299.jpg"
            alt=""
          />
          <Link to={"/"}>
            <p className="text-xl mb-3 text-amber-600">Go Back Home</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
