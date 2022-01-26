import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const HomeBlogs = () => {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="mt-10 container mx-auto">
      <h2 className="text-5xl text-center mb-5">Featured Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {blogs?.slice(0, 10).map((blog) => (
          <Blog blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default HomeBlogs;
