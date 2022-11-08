import React, { useState } from "react";

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "./../../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");

  const { signIn, logOut, providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.pass.value;
    console.log(email,password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(result.user);
        form.reset();
        setError("");
        
          navigate(from, { replace: true });
          toast.success("Login Successful");
        
      })
      .catch((e) => console.log(e.message));
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

  return (
    <div className="border p-4 rounded shadow  mx-auto mb-4 bg-white  ">
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="text-center mx-auto">
            <h1 className="text-5xl font-bold">Login now!</h1>

            <img
              className="w-3/4 p-7 rounded mx-auto"
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=826&t=st=1667910142~exp=1667910742~hmac=01062ebe4c69b441983c44d88757f3acc88b3c04aced35f1ac14889050a4661f"
              alt=""
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
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
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
