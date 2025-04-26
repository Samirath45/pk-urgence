// src/components/AuthLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header"; // Header de la page Landing uniquement

const AuthLayout = () => {
  // const showHeader = location.pathname === "/"; // afficher le header que sur Landing

  return (
    <>
       <Header />
      <Outlet />
    </>
  );
};

export default AuthLayout;