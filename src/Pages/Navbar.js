import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="shadow py-5">
      <div className="container mx-auto flex justify-between">
        <div>
          <h1>
            Go<span>Here</span>
          </h1>
        </div>
        <div className="flex gap-20">
          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
