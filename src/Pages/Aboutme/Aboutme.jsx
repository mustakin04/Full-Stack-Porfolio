import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import About from "../../Component/About/About";

const Aboutme = () => {
  return (
    <div className="w-full h-screen bg-[#212228]">
      <Navbar></Navbar>
      <div className="pt-[80px]">
        <About></About>
      </div>
    </div>
  );
};

export default Aboutme;
