import React from "react";
import { Navigate } from "react-router-dom";
import {jwtDecode} from 'jwt-decode';

const UserProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // Not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded = jwtDecode(token);

    // Logged in but NOT user
    if (decoded.role !== "user") {
      return <Navigate to="/unauthorized" replace />;
    }

    return children;
  } catch (error) {
    // Invalid / expired token
    return <Navigate to="/login" replace />;
  }
};

export default UserProtectedRoute;
