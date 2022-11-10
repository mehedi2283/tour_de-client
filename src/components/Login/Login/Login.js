import React, { useState } from "react";

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "./../../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

import { FaGoogle } from "react-icons/fa";
import useTitle from "../../../hooks/useTitle";

const Login = () => {
  useTitle('Login')
  const [error, setError] = useState("");
  const { signIn, providerLogin,loading,setLoading } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.pass.value;
    // console.log(email,password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        }

        
        setError("");
        fetch('https://tour-de-server-mehedi2283.vercel.app/jwt',{
          method: 'POST',
          headers:{
              'content-type' :'application/json'
          },
          body: JSON.stringify(currentUser)
        })
        .then(res => res.json())
        .then(data => {
          
          localStorage.setItem('tourDE-token', data.token)
          navigate(from, { replace: true });
        toast.success("Login Successful");
        })



        
        
      })
      .catch((e) => {
        setLoading(false)
        setError(e.message)
      });
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(`user`, user);
        navigate(from, { replace: true });
        toast.success("Login Successful");
      })
      .catch((error) => {
        console.error(`error`, error);
      });
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
    <div className="border rounded shadow  mx-auto mb-4   ">
      <div className="hero">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse ">
          <div className="">
            

            <img
              className=" p-7 rounded mx-auto"
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1668144760~exp=1668145360~hmac=8824fcf444b273049a734a49039366f2bc07427053642f8b7acc1a8f10ee2cda"
              alt=""
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="card flex-shrink-0 w-3/4 lg:max-w-sm shadow-2xl bg-base-100"
          >
            <h1 className="text-center mx-auto mt-4 text-5xl font-bold">Login now</h1>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
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
                <p className=" text-red-700">{error}</p>
                
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-outline"
                  type="submit"
                  value="Login"
                />
                <h1 className="text-2xl font-bold text-center">or</h1>
                <button
                  onClick={handleGoogleSignIn}
                  className="mb-4 rounded-lg border-0 btn flex gap-4 bg-blue-600"
                  variant="outline-primary"
                >
                  <FaGoogle></FaGoogle> <strong>Login with Google</strong>
                </button>
              </div>
              <label className="label">
                  <p>Don't have account? <Link to='/register' className=" link link-hover">
                    <span className=" text-blue-600">Register</span>
                  </Link></p>
                  
                </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
