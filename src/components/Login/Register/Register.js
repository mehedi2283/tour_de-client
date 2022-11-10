import React, { useState } from "react";

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const Register = () => {

  useTitle('Register')
  const navigate = useNavigate();
  const { loading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const { createUser, updateUserProfile, logOut } =
    useContext(AuthContext);

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
    

    createUser(email, password)
      .then((result) => {
        
       
        setError("");
        form.reset();
        toast.success("Registration Complete");
        handleLogOut();
        navigate("/login");
        handleProfile(name, photoURL);
      })
      .catch((e) => {
        
        setError(e.message);
      });
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


 


  if (loading) {
    return (
      <div className="border my-72 border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
  <div className="animate-pulse flex space-x-4">
    <div className="rounded-full bg-gray-400 h-12 w-12"></div>
    <div className="flex-1 space-y-4 py-1">
      <div className="h-4 bg-gray-400 rounded w-3/4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-400 rounded"></div>
        <div className="h-4 bg-gray-400 rounded w-5/6"></div>
      </div>
    </div>
  </div>
</div>
    );
  }

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
                
              </div>
              <div>
                <p className="text-error">{error}</p>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
              <label className="label">
                  <p>Have an account <Link to='/login' className=" link link-hover">
                     <span className=" text-blue-600">Login</span>
                     </Link></p>
                  
                </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
