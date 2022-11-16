import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../../context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";
import "./Navbar.css";
import { themeChange } from "theme-change";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, logOut } = useContext(AuthContext);
  console.log('i am user',user)
  const handleLogOut = () => {
    logOut();
    toast.success("Successfully logged out");
    navigate("/");
  };

  const themeValues = [
    "Light",
    "Night",
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
    "Autumn",
    "Business",
    "Acid",
    "Lemonade",
    "Coffee",
    "Winter",
  ];


  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  };

  

  useEffect(() => {
    themeChange(false);
  });

  let activeStyle = {
    textDecoration: "underline",
    textDecorationColor: "inherit",
    textDecorationThickness: "4px",
    fontWeight: "800",
    textUnderlineOffset: "5px",
    // color:"textSecondary"
  };

  return (
    <div className="relative  border-b-2 border-primary">
      <div className="navbar justify-center lg:justify-between res-nav px-40">
        <div className=" flex  res-nav2  ">
          <ul className="menu menu-horizontal">
            <>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className=" focus:text-secondary hover:underline text-primary nav-link decoration-secondary hover:text-secondary  underline-offset-4 nav-title items-center rounded-lg font-black text-2xl p-0 active:after:text-secondary mx-4"
                to={`/home`}
              >
                <h1 className="py-2 ">tourDE</h1>
              </NavLink>
            </>
          </ul>

          <div className="divider lg:divider-horizontal divide-primary"></div>

          <>
            <select
              className="text-primary  outline-1 outline  outline-primary theme-selector"
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

          <div className="drop-down">
            <div className="dropdown dropdown-bottom  md:dropdown-left flex">
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
                className="menu navbar_menu menu-compact dropdown-content  p-3 shadow bg-base-300/90 outline outline-1 rounded-box "
              >
                <h1 className="text-2xl text-center underline mb-3 font-semibold">
                  Categories
                </h1>
                {user?.uid ? (
                  <div className="">
                    <>
                      <NavLink
                        className="btn btn-primary w-full mb-2   uppercase   rounded-lg "
                        to={`/my_reviews`}
                      >
                        My reviews
                      </NavLink>
                    </>
                    <>
                      <NavLink
                        className="btn btn-primary w-full mb-2   uppercase rounded-lg"
                        to="/add_services"
                      >
                        Add service
                      </NavLink>
                    </>
                  </div>
                ) : (
                  ""
                )}
                <>
                  <NavLink
                    to="/services"
                    className=" px-3 btn btn-primary w-full mb-2  uppercase  rounded-lg "
                  >
                    Services
                  </NavLink>
                </>
                <>
                  <NavLink
                    to="/blogs"
                    className=" px-3 btn btn-primary w-full   uppercase rounded-lg "
                  >
                    Blogs
                  </NavLink>
                </>
              </ul>
            </div>

            <div className="dropdown dropdown-left flex">
              <label tabIndex={1} className=" flex items-center lg:hidden">
                {user?.photoURL ? (
                  <img
                    className=" rounded-full w-10"
                    alt=""
                    src={user.photoURL}
                  />
                ) : (
                  <FaUserCircle className="w-10 h-10 text-primary"></FaUserCircle>
                )}
              </label>

              <ul
                tabIndex={1}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 outline outline-1 rounded-box w-52"
              >
                <div>
                  {user?.photoURL ? (
                    <div className="flex flex-col items-center gap-2">
                      <NavLink
                        to="/profile"
                        className="btn btn-ghost uppercase"
                      >
                        <img
                          alt=""
                          className="rounded-full"
                          src={user.photoURL}
                          style={{ height: "40px" }}
                        ></img>
                      </NavLink>
                      <NavLink
                        className=" px-6 btn btn-primary  uppercase"
                        to="/profile"
                      >
                        <span className="me-2 fs-5 ">{user?.displayName}</span>
                      </NavLink>
                      <button
                        className=" btn btn-primary w-full mb-2"
                        onClick={handleLogOut}
                      >
                        Log Out
                      </button>
                    </div>
                  ) : (
                    <li className="gap-4">
                      <NavLink
                        to="/login"
                        className="ms-3 px-3 py-2 btn btn-outline bg-primary/80 uppercase rounded-3"
                      >
                        Login
                      </NavLink>
                      <NavLink
                        to="/register"
                        className="ms-3 px-3 py-2 btn btn-outline bg-primary/80 uppercase rounded-3"
                      >
                        Register
                      </NavLink>
                    </li>
                  )}
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex items-center ">
          <ul className="menu menu-horizontal p-0 uppercase">
            <>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/services"
                className="hover:underline text-primary font-bold decoration-secondary hover:text-secondary  underline-offset-4 nav-link px-3 py-2  uppercase rounded-lg mx-4"
              >
                Services
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/blogs"
                className="hover:underline text-primary font-bold decoration-secondary hover:text-secondary  underline-offset-4 nav-link px-3 py-2  uppercase rounded-lg"
              >
                Blogs
              </NavLink>
            </>
            {user?.uid ? (
              <div className="flex items-center">
                <>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className=" hover:underline nav-link text-primary font-bold decoration-secondary hover:text-secondary  underline-offset-4 nav-link uppercase  mx-4"
                    to={`/my_reviews`}
                  >
                    My reviews
                  </NavLink>
                </>
                <>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className="hover:underline text-primary font-bold decoration-secondary hover:text-secondary   underline-offset-4 nav-link uppercase rounded-lg"
                    to="/add_services"
                  >
                    Add service
                  </NavLink>
                </>
              </div>
            ) : (
              ""
            )}
          </ul>
          
        </div>
        <div><ul className="align-items-center gap-4 menu menu-horizontal ml-4 navbar-center hidden  lg:flex">
            <div>
              <div className="drop-down rounded-sm flex">
                <div className="dropdown  dropdown-hover dropdown-end ">
                  <label tabIndex={0} className=" max-md:hidden ">
                    {user?.photoURL ? (
                      <img
                        className=" rounded-full w-10"
                        alt=""
                        src={user.photoURL}
                      />
                    ) : (
                      <FaUserCircle className="w-10 h-10 text-primary"></FaUserCircle>
                    )}
                  </label>

                  <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content py-3 bg-slate-100/95 shadow-2xl outline outline-1 rounded w-72 px-3 "
                  >
                    <div className="  ">
                      {user?.photoURL ? (
                        <div className="flex flex-col items-center gap-2">
                          <h1 className="text-2xl font-bold underline">
                            Profile
                          </h1>
                          <NavLink to="/profile" className="">
                            <img
                              alt=""
                              className="rounded-full"
                              src={user.photoURL}
                              style={{ height: "80px" }}
                            ></img>
                          </NavLink>
                          <NavLink
                            className=" w-full btn btn-outline  font-extrabold  uppercase"
                            to="/profile"
                          >
                            <span className="me-2 fs-5 ">
                              {user?.displayName}
                            </span>
                          </NavLink>
                          <button
                            className="w-full btn  font-extrabold btn-primary mb-2"
                            onClick={handleLogOut}
                          >
                            Log Out
                          </button>
                        </div>
                      ) : (
                        <li className="gap-4 flex flex-col">
                          <NavLink
                            to="/login"
                            className="ms-3 font-extrabold px-3 py-2 btn btn-outline    "
                          >
                            Login
                          </NavLink>
                          <NavLink
                            to="/register"
                            className="ms-3 font-extrabold px-3 py-2 btn-outline btn   "
                          >
                            Register
                          </NavLink>
                        </li>
                      )}
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </ul></div>
      </div>
      {/* <hr /> */}
    </div>
  );
};

export default Navbar;
