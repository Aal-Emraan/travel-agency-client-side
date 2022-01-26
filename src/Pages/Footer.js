import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto grid grid-cols-2 gap-5 md:grid-cols-3 py-5">
        <div>
          <h2 className="text-2xl mb-5 text-gray-400">Our Services</h2>
          <ul className="pl-3 leading-8">
            <li>Tours</li>
            <li>Plans</li>
            <li>Guides</li>
            <li>Bookings</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl mb-5 text-gray-400">About Us</h2>
          <ul className="pl-3 leading-8">
            <li>Privacy Policy</li>
            <li>Pre-plans</li>
            <li>Pre-book</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl mb-5 text-gray-400">Contact Us</h2>
          <ul className="pl-3 leading-8">
            <li>email</li>
            <li>Phone</li>
            <li>Website</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-900">
        <p className="text-center py-5 border-t text-white">
          &copy; Copyright 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
