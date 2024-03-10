import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import AuthProvider from "./provider/AuthProvider";

const LayOut = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Outlet />
    </AuthProvider>
  );
};

export default LayOut;
