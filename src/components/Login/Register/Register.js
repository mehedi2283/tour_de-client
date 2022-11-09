import React, { useState } from "react";

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [check, setCheck] = useState(false);
  const [red, setRed] = useState("btn-danger");
  const { createUser, updateUserProfile, verifyEmail, logOut } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.pass.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        toast.success("Registration Complete");
        handleLogOut();
        navigate("/login");
        handleProfile(name, photoURL);
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };
  const handleChecked = () => {
    setCheck(!check);
    if (check) {
      setRed("btn-danger ");
    } else {
      setRed("btn-success");
    }
  };

  const handleProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch(() => {});
  };

  return (
    <div className="border p-4 rounded shadow  mx-auto mb-4 bg-white ">
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center mx-auto">
            <h1 className="text-5xl font-bold">Register now!</h1>

            <img
              className=" p-7 rounded mx-auto"
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=826&t=st=1667910142~exp=1667910742~hmac=01062ebe4c69b441983c44d88757f3acc88b3c04aced35f1ac14889050a4661f"
              alt=""
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  placeholder="photoURL"
                  className="input input-bordered"
                  name="photoURL"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="pass"
                />
                <label className="label">
                  <p>Have an account <Link to='/login' className=" link link-hover">
                     <span className=" text-blue-600">Login</span>
                     </Link></p>
                  
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
