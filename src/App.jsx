import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Logo from "./components/Logo";

const App = () => {
  return (
    <div>
      <Navbar />

      <Outlet />
    </div>
  );
};

export default App;
