// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Places from "./pages/Places";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import About from "./pages/About";
import MainHome from "./pages/MainHome";

// Layouts
import Layout from "./components/Layout";
import AuthLayout from "./components/AuthLayout"; // à créer comme montré plus haut

function App() {
  return (
    <Routes>
      {/* Routes publiques sans MainHeader */}
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Routes avec MainHeader + Footer */}
      <Route element={<Layout />}>
        <Route path="/home" element={<MainHome />} />
        <Route path="/places" element={<Places />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;