import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blog, full }) => {
  const { img, title, description, cost, location, traveler } = blog;

  return (
    <div className="grid grid-cols-3 gap-5 bg-gray-50 p-5 mb-5 rounded-xl">
      <div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      <div className="col-span-2">
        <div>
          <h2 className="text-3xl italic">{title}</h2>
          <p className="text-sm mb-3 text-gray-500">by {traveler}</p>
          <p className="text-gray-600 text-justify">
            {full ? description.slice(0, 1100) : description.slice(0, 103)}
          </p>
          <Link to="/blogdetails">See more...</Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
