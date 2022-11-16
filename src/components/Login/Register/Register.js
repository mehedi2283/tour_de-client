import React, { useState } from "react";

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import regImg from '../../../assets/reg.webp';

const Register = () => {

  useTitle('Register')
  const navigate = useNavigate();
  const { loading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const { createUser, updateUserProfile, logOut,setLoading } =
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
        setLoading(false)
        
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
      <div className="border my-72 border-primary/90 shadow rounded-md p-4 max-w-sm w-full mx-auto">
  <div className="animate-pulse flex space-x-4">
    <div className="rounded-full bg-primary h-12 w-12"></div>
    <div className="flex-1 space-y-4 py-1">
      <div className="h-4 bg-primary rounded w-3/4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-primary rounded"></div>
        <div className="h-4 bg-primary rounded w-5/6"></div>
      </div>
    </div>
  </div>
</div>
    );
  }

  return (
    <div className=" mx-auto mb-4 ">
      <div className="hero  ">
        <div className="hero-content flex-col-reverse lg:flex-row">
          <div className="">
           

            <img
              className=" w-11/12 rounded-2xl mx-auto"
              src={regImg}
              alt=""
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="card flex-shrink-0 w-3/4 lg:max-w-lg shadow-2xl bg-base-100"
          >
            
            <div className="card-body rounded-2xl">
            <h1 className="mt-6 text-5xl font-bold text-center mx-auto">Register now</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered text-primary border-primary  w-full bg-primary/5 focus:bg-primary/30 focus:outline-0"
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
                  className="input input-bordered text-primary border-primary  w-full bg-primary/5 focus:bg-primary/30 focus:outline-0"
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
                  className="input input-bordered text-primary border-primary  w-full bg-primary/5 focus:bg-primary/30 focus:outline-0"
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
                  className="input input-bordered text-primary border-primary  w-full bg-primary/5 focus:bg-primary/30 focus:outline-0"
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
                  <p>Already have an account? <Link to='/login' className=" link link-hover decoration-primary">
                     <span className=" text-primary font-extrabold">Login</span>
                     </Link> here</p>
                  
                </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
