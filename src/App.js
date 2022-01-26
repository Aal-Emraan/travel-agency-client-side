import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Blogs from "./Pages/Blogs";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import BlogDetails from "./Pages/BlogDetails";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogdetails" element={<BlogDetails />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
