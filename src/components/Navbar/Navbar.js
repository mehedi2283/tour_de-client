import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../../context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

import "./Navbar.css";
import { themeChange } from "theme-change";


const Navbar = () => {
  const navigate = useNavigate();

  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
    toast.success("Successfully logged out");
    navigate("/");
  };

  const themeValues = [
    "light", //["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]
    "Dark",
    "Cupcake",
    "Bumblebee",
    "Emerald",
    "Corporate",
    "Synthwave",
    "Retro",
    "Cyberpunk",
    "Valentine",
    "Halloween",
    "Garden",
    "Forest",
    "Aqua",
    "Lofi",
    "Pastel",
    "Fantasy",
    "Wireframe",
    "Black",
    "Luxury",
    "Dracula",
    "Cmyk",
    "autumn",
    "business",
    "acid",
  ];

  useEffect(() => {
    themeChange(false);
  });

  return (
    <div className="relative">
      <div className="navbar bg-base-100 justify-center res-nav">
        <div className=" navbar-start  flex max-[800px]:flex-wrap max-[500px]:justify-center justify-between mx-4">
          <ul className="menu menu-horizontal">
            <li>
              <NavLink
                className="border rounded-lg font-black text-2xl mx-4"
                to={`/home`}
              >
                tourDE
              </NavLink>
            </li>
          </ul>
          <>
            <select
              className="text-primary focus:outline-none border rounded-md"
              data-choose-theme
            >
              <option className="text-primary" option value="">
                Select Theme
              </option>
              {themeValues.map((value) => (
                <option
                  className="text-primary"
                  key={value.toLowerCase()}
                  value={value.toLowerCase()}
                >
                  {value}
                </option>
              ))}
            </select>
          </>
          <div className="dropdown dropdown-left flex">
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
          
              {user?.uid ? (
              <div className="">
                <li>
                  <NavLink
                    className="border rounded-lg "
                    to={`/my_reviews`}
                  >
                    My reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink className="border rounded-lg" to="/add_services">
                    Add service
                  </NavLink>
                </li>
              </div>
            ) : (
              ""
            )}
              <li>
              <NavLink
                to="/services"
                className=" px-3 border border-dark rounded-lg "
              >
                Services
              </NavLink>
              </li>
              <li>
              <NavLink
                to="/blogs"
                className=" px-3 border border-dark rounded-lg"
              >
                Blogs
              </NavLink>
            </li>
            </ul>
            
             
          </div>











          <div className="dropdown dropdown-bottom flex">
            
            <label tabIndex={1} className="btn btn-ghost lg:hidden">
            <img className=" rounded-full w-10" src={user?.photoURL?user.photoURL:'non_user.png'} alt="" />
              
            </label>
            
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
           <div>
            {user?.photoURL ? (
              <div className="flex flex-col items-center gap-2">
                <NavLink to="/profile" className="btn btn-ghost border border-dark">
                  <img
                    alt=""
                    className="rounded-full"
                    src={user.photoURL}
                    style={{ height: "40px",  }}
                  ></img>
                </NavLink>
                <NavLink className=" px-6 btn btn-ghost border border-dark" to="/profile">
                  <span className="me-2 fs-5 ">{user?.displayName}</span>
                </NavLink>
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
                  <NavLink
                    className="border rounded-lg mx-4"
                    to={`/my_reviews`}
                  >
                    My reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink className="border rounded-lg" to="/add_services">
                    Add service
                  </NavLink>
                </li>
              </div>
            ) : (
              ""
            )}
          </ul>
          <ul className="align-items-center gap-4 menu menu-horizontal ml-4 navbar-center hidden  lg:flex">
          <div>
            {user?.uid ? (
              <div className="flex items-center gap-2">
                <NavLink to="/profile" className="btn btn-ghost border border-dark">
                  <img
                    alt=""
                    className="rounded-full"
                    src={user.photoURL}
                    style={{ height: "40px",  }}
                  ></img>
                </NavLink>
                <NavLink className=" px-6 btn btn-ghost border border-dark" to="/profile">
                  <span className="me-2 fs-5 ">{user?.displayName}</span>
                </NavLink>
                <button
                  className=" btn btn-outline btn-error"
                  onClick={handleLogOut}
                >
                  Log Out
                </button>
              </div>
            ) : (
              
              <li className="gap-4 ">
                
                <NavLink
                  to="/login"
                  className=" px-3 py-2 border border-dark rounded-lg"
                 
                >
                  <img src="non_user.png" alt="" />
                </NavLink>
                <NavLink
                  to="/login"
                  className="ms-3 px-3 py-2 border border-dark rounded-lg"
                 
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  
                  className="ms-3 px-3 py-2 border border-dark rounded-lg"
                >
                  Register
                </NavLink>
              </li>
            )}
          </div>
{/* 
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
                  className=" px-3 py-2 border border-dark rounded-lg"
                 
                >
                  <img src="non_user.png" alt="" />
                </NavLink>
                <NavLink
                  to="/login"
                  className="ms-3 px-3 py-2 border border-dark rounded-lg"
                 
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  
                  className="ms-3 px-3 py-2 border border-dark rounded-lg"
                >
                  Register
                </NavLink>
              </li>
            )}
          </div> */}
        </ul>
        </div>






        
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
