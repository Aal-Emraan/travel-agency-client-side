import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import HomeBlogs from "./HomeBlogs";

const Home = () => {
  return (
    <div>
      <main>
        <Banner />
        <HomeBlogs />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
