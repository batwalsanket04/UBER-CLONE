import React from "react";
import { Navigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const CaptainProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("CaptainToken");

 
  if (!token) {
    return <Navigate to="/captain-login" replace />;
  }

  try {
    const decoded = jwtDecode(token);

  
    if (decoded.role !== "captain") {
      return <Navigate to="/unauthorized" replace />;
    }

    return children;
  } catch (error) {
  
    return <Navigate to="/captain-login" replace />;
  }
};

export default CaptainProtectedRoute;
