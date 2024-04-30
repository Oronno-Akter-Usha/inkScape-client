import { useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import errorPage from "../../assets/error.json";

const ErrorPage = () => {
  const error = useRouteError();

  const style = {
    width: "100%",
  };

  return (
    <div className="flex flex-col justify-center items-center text-center h-screen">
      {error.status === 404 && (
        <div className="mt-10 w-full">
          <Lottie style={style} animationData={errorPage} loop={true}></Lottie>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
