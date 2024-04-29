import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const { createUser } = useContext(AuthContext);

  // navigation systems
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, name, photo);

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer ");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one upper case charecters"
      );
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one lower case charecters"
      );
      return;
    }

    createUser(email, password, name, photo)
      .then((result) => {
        navigate(from);
        console.log(result.user);
        const user = { email, password, name, photo };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: " Account created successfully",
                icon: "success",
                confirmButtonText: "Ok",
              });
            }
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
      <div className="relative w-[430px] h-[580px] mx-auto mb-32">
        <div className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] bg-gradient-to-br from-amber-400 to-amber-600 rounded-full absolute md:top-0 md:left-[-20%]"></div>
        <div className="w-[120px] h-[120px]  md:w-[180px] md:h-[180px] bg-gradient-to-br from-amber-600 to-amber-400 rounded-full absolute  bottom-[-10%] right-[-10px] md:right-[-30%]"></div>
        <div className="pt-32">
          <div
            className="card shrink-0 w-full max-w-sm drop-shadow-3xl
backdrop-blur-sm bg-[#ffffff27] shadow-xl border border-[#ffffff] mx-auto mb-10 absolute top-10 left-10 "
          >
            <form onSubmit={handleRegister} className="card-body ">
              <h2 className="text-5xl font-medium text-center mb-7">
                Register
              </h2>
              <div className="form-control mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input  border-gray-500 "
                  required
                />
              </div>
              <div className="form-control mb-4">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input  border-gray-500 "
                />
              </div>
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
                  className="absolute top-[350px] right-12"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {registerError && <p className="text-red-800">{registerError}</p>}

              <div className="form-control mt-4">
                <button className="btn  bg-gradient-to-br from-amber-400 to-amber-600 text-white border-none ">
                  Register
                </button>
              </div>
            </form>

            <p className="text-black text-base text-center mb-4">
              Already have an account?
              <Link to={"/login"}>
                <button className="btn btn-link text-black text-base m-0 p-2">
                  Login
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
