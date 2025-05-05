import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();

  // sign out
  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("signOut successfully");
        navigate("/auth/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>

          {/* Responsive Menubar */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink>My Profile</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Subnestic</a>
      </div>

      {/* Menubar for Large Device */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink>Home</NavLink>
          </li>

          <li>
            <NavLink>My Profile</NavLink>
          </li>
        </ul>
      </div>

      {/* Login Button */}
      <div className="navbar-end">
        {user ? (
          <button
            onClick={handleSignOut}
            to=""
            className="btn btn-primary px-8 text-white"
          >
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="text-white btn btn-primary px-8">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
