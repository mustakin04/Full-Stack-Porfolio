import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Education from "../../Component/Education/Education";

const Educations = () => {
  return (
    <div className="w-full h-screen bg-[#212228]">
      <Navbar></Navbar>
      <div className="pt-[80px]">
        <Education></Education>
      </div>
    </div>
  );
};

export default Educations;
