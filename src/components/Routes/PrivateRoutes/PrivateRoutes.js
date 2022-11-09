import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import toast from "react-hot-toast";
import { AuthContext } from './../../../context/AuthProvider/AuthProvider';


const SecureRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div class="border my-72 border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
  <div class="animate-pulse flex space-x-4">
    <div class="rounded-full bg-gray-400 h-12 w-12"></div>
    <div class="flex-1 space-y-4 py-1">
      <div class="h-4 bg-gray-400 rounded w-3/4"></div>
      <div class="space-y-2">
        <div class="h-4 bg-gray-400 rounded"></div>
        <div class="h-4 bg-gray-400 rounded w-5/6"></div>
      </div>
    </div>
  </div>
</div>
    );
  }

  if (!user) {
    return (
      <>
       {toast.error("Please login first")}
        <Navigate to="/login" state={{ from: location }} replace></Navigate>
      
      </>
    );
  }
  return children;
};

export default SecureRoutes;
