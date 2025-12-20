import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Userlogin from "./pages/Userlogin";
import UserSignup from "./pages/UserSignup";
import Captainlogin from "./pages/Captainlogin";
import CaptainSignup from "./pages/CaptainSignup";
import UserProtectedRoute from "./pages/UserProtectedRoute";
import MainHome from "./pages/MainHome";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectedRoute from "./pages/CaptainProtectedRoute";
import Unauthorized from "./pages/Unauthorized";
import Riding from "./pages/Riding";
import CaptainRidingMap from "./pages/CaptainRidingMap";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-login" element={<Userlogin />} />
        <Route path="/riding" element={<Riding/>} />
        <Route path="/captain-riding" element={<CaptainRidingMap/>} />

        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<Captainlogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route
          path="/home"
          element={
            <UserProtectedRoute>
              <MainHome />
            </UserProtectedRoute>
          }
        />
        <Route path="/captain-home" element={
          <CaptainProtectedRoute>
            <CaptainHome/>
          </CaptainProtectedRoute>
        } />
        <Route path="/unauthorized" element={<Unauthorized/>} />

      </Routes>
    </div>
  );
};

export default App;
