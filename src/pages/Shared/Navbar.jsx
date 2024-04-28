import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "font-bold mr-10 text-amber-600" : "mr-10"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/art&craft"}
        className={({ isActive }) =>
          isActive ? "font-bold mr-10 text-amber-600" : "mr-10"
        }
      >
        Art & Craft
      </NavLink>
      <NavLink
        to={"/addArt"}
        className={({ isActive }) =>
          isActive ? "font-bold mr-10 text-amber-600" : "mr-10"
        }
      >
        Add Art
      </NavLink>

      <NavLink
        to={"/MyArt"}
        className={({ isActive }) =>
          isActive ? "font-bold mr-10 text-amber-600" : "mr-10"
        }
      >
        My Art
      </NavLink>
    </>
  );
  return (
    <div className="relative">
      <div
        className="navbar w-full drop-shadow-xl
        shadow-xl "
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-transparent bg-clip-text  text-2xl">
              Ink Scape
            </span>
          </a>
        </div>
        <div className="navbar-end pr-6">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <a className="btn px-5 bg-gradient-to-b from-amber-500 to-amber-600 text-white">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
