import { FaSquareGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
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
            <form className="card-body ">
              <h1 className="text-5xl font-medium text-center mb-7">Login</h1>
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
                  // type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="input border-gray-500 "
                  required
                />
                <span
                  className="absolute top-[200px] right-12"
                  // onClick={() => setShowPassword(!showPassword)}
                >
                  {/* {showPassword ? <FaEyeSlash /> : <FaEye />} */}
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
              <button>
                <FcGoogle />
              </button>
              <button>
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
