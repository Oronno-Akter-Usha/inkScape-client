import { useContext, useState } from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, googleLogin, githubLogin } = useContext(AuthContext);

  // navigation systems
  const navigate = useNavigate();
  const from = "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from);

        Swal.fire({
          title: "Success!",
          text: " Successfully login",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => {
        console.error(error);

        Swal.fire({
          title: "Error!",
          text: error,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };
  return (
    <div className="">
      <div className="relative w-[430px] h-[520px]  mx-auto mb-20">
        <div className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] bg-gradient-to-br from-amber-400 to-amber-600 rounded-full absolute md:top-0 md:left-[-20%]"></div>
        <div className="w-[120px] h-[120px]  md:w-[180px] md:h-[180px] bg-gradient-to-br from-amber-600 to-amber-400 rounded-full absolute  bottom-[-10%] right-[-10px] md:right-[-30%]"></div>
        <div className="pt-32">
          <div
            className="card shrink-0 w-full max-w-sm drop-shadow-3xl
backdrop-blur-sm bg-[#ffffff27] shadow-xl border border-[#ffffff] mx-auto mb-10 absolute top-10 left-10 "
          >
            <form onSubmit={handleSignIn} className="card-body ">
              <h2 className="text-5xl font-medium text-center mb-7">Login</h2>
              <div className="form-control mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input  border-gray-500 "
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="input border-gray-500 "
                  required
                />
                <span
                  className="absolute top-[205px] right-12"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <label className="mt-2">
                <a
                  href="#
                "
                  className="label-text-alt link link-hover  "
                >
                  Forgot password?
                </a>
              </label>

              <div className="form-control mt-4">
                <button className="btn  bg-gradient-to-br from-amber-400 to-amber-600 text-white border-none ">
                  Login
                </button>
              </div>
            </form>

            <span className="flex justify-center gap-5 mt-2 text-3xl">
              <button onClick={googleLogin}>
                <FcGoogle />
              </button>
              <button onClick={githubLogin}>
                <FaSquareGithub />
              </button>
            </span>
            <p className="text-black text-base text-center mb-4">
              Don't have an account?
              <Link to={"/register"}>
                <button className="btn btn-link text-black text-base m-0 p-2">
                  Register
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
