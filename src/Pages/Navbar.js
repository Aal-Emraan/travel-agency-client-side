import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="shadow py-5 bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1>
            <Link to="/" className="text-3xl">
              Go<span>Here</span>
            </Link>
          </h1>
        </div>
        <div className="flex gap-16">
          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/dashboard">Dashboard</Link>
          <div>
            <Link className="border-r-2 pr-3" to="/login">
              Login
            </Link>
            <Link className="pl-3" to="/register">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
