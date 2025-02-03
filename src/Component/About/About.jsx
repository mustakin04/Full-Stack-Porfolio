import React from "react";
import Container from "../Container/Container";

const About = () => {
  return (
    <div className="bg-[#20122a] py-[60px]">
      <Container>
        <h1
          className="text-[#e98b45] inline-block text-center ml-[560px] font-dan 
            font-bold text-[34px] border-b-[2px] 
             border-[#e98b45]"
        >
          ABOUT ME
        </h1>
        <div className="flex">
          <div className="w-[50%]">
            <div>
              <p
                className=" font-poppins font-semibold text-[25px] text-[#e98b45] 
                    py-[20px] px-[20px] rounded-2xl"
              >
                I love to-
              </p>
              <div className="flex gap-[30px]">
                <h4
                  className="bg-[#e2c6bb] font-poppins font-medium text-[22px] text-[#283938] 
                    py-[20px] px-[20px] rounded-2xl "
                >
                  Play Cricket
                </h4>
                <h5
                  className="bg-[#e2c6bb] font-poppins font-medium text-[22px] text-[#283938] 
                    py-[20px] px-[20px] rounded-2xl"
                >
                  Travelling
                </h5>
              </div>
              <div className="flex gap-x-[30px] mt-[20px]">
                <h4
                  className="bg-[#e2c6bb] font-poppins font-medium text-[22px] text-[#283938] 
                    py-[20px] px-[20px] rounded-2xl "
                >
                  Mountain
                </h4>
                <h5
                  className="bg-[#e2c6bb] font-poppins font-medium text-[22px] text-[#283938] 
                    py-[20px] px-[20px] rounded-2xl"
                >
                  Help People
                </h5>
              </div>
            </div>
          </div>
          <div className="w-[50%] mt-[70px]">
            <div className="flex justify-end gap-[30px]">
              <div className="bg-[#1f2022] py-[30px] px-[30px]  rounded ">
                <h2 className="font-dan font-semibold text-[30px] text-[#e98b45] text-center ">
                  1 <span className="text-5xl">+</span>
                </h2>
                <p className="font-poppins font-semibold text-[20px] text-[#e2c6bb]">
                  {" "}
                  Years Expreience
                </p>
              </div>
              <div className="bg-[#1f2022] py-[30px] px-[30px]  rounded">
                <h2 className="font-dan font-semibold text-[30px] text-[#e98b45] text-center ">
                  10 <span className="text-5xl">+</span>
                </h2>
                <p className="font-poppins font-semibold text-[20px] text-[#e2c6bb]">
                  Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
