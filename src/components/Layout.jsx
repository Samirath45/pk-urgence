// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
 // ← ici
import Footer from "./Footer";
import MainHeader from "../pages/MainHeader";

const Layout = () => (
  <>
    <MainHeader />            {/* header global */}
    <main style={{ minHeight: "80vh" }}>
      <Outlet />              {/* ici s’affichent Home, Places, etc. */}
    </main>
    <Footer />
  </>
);

export default Layout;