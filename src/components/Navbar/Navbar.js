import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../../context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, logOut, handleTheme } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
    toast.success("Successfully logged out");
    navigate("/");
  };

  let activeStyle = {
    textDecoration: "underline",

    textDecorationColor: "white",
    textDecorationThickness: "3px",
    fontWeight: "700",
    color: "White ",
    backgroundColor: "black",
    borderRadius: "7px",
  };

  return (
    <div className="relative">
      <div className="navbar bg-base-100 justify-center ">
        <div className="navbar-start lg-flex justify-between mx-4">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/home"
            className="btn btn-ghost normal-case text-3xl font-black"
          >
            tourDE
          </NavLink>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link>Item 1</Link>
              </li>

              <li>
                <Link>Item 3</Link>
              </li>
            </ul>
          </div>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
            <NavLink
            to="/services"
            
            className=" px-3 py-2 border border-dark rounded-lg mx-4"
          >
            Services
          </NavLink>
            <NavLink
            to="/blogs"
            
            className=" px-3 py-2 border border-dark rounded-lg"
          >
            Blogs
          </NavLink>
            </li>
            {user?.uid ? (
              <div className="flex">
                <li>
                  <NavLink className="border rounded-lg mx-4" to={`/my_reviews/${user.email}`}>My reviews</NavLink>
                </li>
                <li>
                  <NavLink className="border rounded-lg" to="/add_services">Add service</NavLink>
                </li>
              </div>
            ) : (
              ""
            )}
          </ul>
        </div>
        <ul className="align-items-center gap-4 menu menu-horizontal p-0 navbar-start">
          <li>
            <Link to={`${!user ? "/login" : "/profile"}`}>
              {user?.photoURL ? (
                <img
                  alt=""
                  className="rounded-full"
                  src={user.photoURL}
                  style={{ height: "40px", padding: "4px" }}
                ></img>
              ) : (
                <FaUserCircle className="text-black fs-3"></FaUserCircle>
              )}
            </Link>
          </li>
          <div className="fw-bold align-items-center gap-2">
            {user?.uid ? (
              <div className="">
                <Link className=" px-6" to="/profile">
                  <span className="me-2 fs-5 ">{user?.displayName}</span>
                </Link>
                <button
                  className=" btn btn-outline btn-error"
                  onClick={handleLogOut}
                >
                  Log Out
                </button>
              </div>
            ) : (
              <li className="gap-4">
                <NavLink
                  to="/login"
                  className="ms-3 px-3 py-2 border border-dark rounded-3"
                 
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  
                  className="ms-3 px-3 py-2 border border-dark rounded-3"
                >
                  Register
                </NavLink>
              </li>
            )}
          </div>
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
