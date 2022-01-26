import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { img, title, description, cost, location, traveler } = blog;

  return (
    <div className="grid grid-cols-3 gap-5 bg-gray-100 p-5 mb-5 rounded-xl">
      <div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      <div className="col-span-2">
        <div>
          <h2 className="text-3xl italic mb-2">{title}</h2>
          <p className="text-gray-600">{description.slice(0, 200)}</p>
          <Link to="/blogdetails">See more...</Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
