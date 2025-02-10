import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Project from "../../Component/Project/Project";

const Projectall = () => {
  return (
    <div className="w-full h-screen bg-[#212228]">
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className="pt-[80px]">
        <Project></Project>
      </div>
    </div>
  );
};

export default Projectall;
