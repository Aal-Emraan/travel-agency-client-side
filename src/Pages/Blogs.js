import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-center text-5xl mb-5">All Blogs</h1>
      {blogs?.map((blog) => (
        <Blog blog={blog} full={true} />
      ))}
    </div>
  );
};

export default Blogs;
