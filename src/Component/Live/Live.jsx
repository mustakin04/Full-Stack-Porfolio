import React from "react";
import Container from "../Container/Container";

const Live = () => {
  return (
    <div className="bg-linear-90 from-slate-500 to-gray-600 py-[50px]">
      <Container>
        <h1 className="font-dan font-bold text-[44px] text-center mb-[40px]">
          <span className="text-cyan-500">Project</span>{" "}
          <span className="text-teal-500">Live Work</span>
          <span className="text-emerald-400 ">ed On</span>
        </h1>
        <div className="flex">
          <div className="w-[600px] h-[450px] bg-blue-300  rounded ml-[400px]"data-aos="fade-down"></div>
          <div className="ml-[10px] mt-[20px]">
            <p className="font-poppins font-semibold text-[24px] text-white">Chatting App</p>
            <div className="font-poppins font-medium text-[22px] text-white mt-[10px]">
              <h2>Feature-</h2>
              <h3>1. Authentication</h3>
              <h4>2. Add Friend</h4>
              <h5>3. Chatting with friend</h5>
            </div>
            <button className="bg-white font-poppins font-semibold text-[22px] py-[10px] px-[60px] rounded-[50px] mt-[20px]">LIVE</button>
            <div className="bg-white font-poppins font-medium text-[22px] py-[10px] px-[60px] rounded-[50px] mt-[20px]">SOURCECODE</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Live;
