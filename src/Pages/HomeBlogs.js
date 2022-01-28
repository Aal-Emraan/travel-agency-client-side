import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import PaginatedBlog from "./PaginatedBlog";

const HomeBlogs = () => {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="my-10 container mx-auto">
      <h2 className="text-5xl text-center mb-5">Featured Blogs</h2>
      <div className="grid grid-cols-4">
        <div className="bg-gray-500 rounded-xl">
          <h2 className="text-center">Top Rated Spots</h2>
        </div>
        <div className="col-span-3 pl-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {blogs?.slice(0, 10).map((blog) => (
              <Blog blog={blog} full={false} />
            ))}
            {/* <PaginatedBlog items={blogs} itemsPerPage={10} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlogs;
