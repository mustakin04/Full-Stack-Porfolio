import React from "react";
import Container from "../Container/Container";
import { FaFigma } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaGithubSquare } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

const Tools = () => {
  return (
    <div className="bg-[#212228] py-[50px]">
      <Container>
        <h1 className="font-dan font-bold text-[44px] text-center mb-[30px]">
          <span className="text-yellow-600">The Tools</span>
          <span className="text-amber-600">Which I</span>{" "}
          <span className="text-orange-600">For Developer</span>
        </h1>
        <div className="relative w-[600px] h-[2px] m-auto bg-white mt-[30px]">
          <div className="absolute top-[-30px] left-[45%]  flex justify-center items-center w-[60px] h-[60px] rounded-full bg-gray-600">
            <div className="w-[18px] h-[18px] rounded-full bg-[#e98b45] m-[10px] border-2 border-white"></div>
          </div>
        </div>
        <div className="flex justify-evenly mt-[80px]">
        <div className="inline-flex gap-[10px] items-center bg-amber-100 py-[16px] px-[30px] rounded-[50px] ">
          <FaFigma className="text-orange-500 text-3xl" />
          <p className="font-poppins font-medium text-[24px] text-[#283938]">Figma</p>
        </div>
        <div className="inline-flex gap-[10px] items-center bg-amber-100 py-[16px] px-[30px] rounded-[50px] ">
          <VscVscodeInsiders className="text-blue-500 text-3xl" />
          <p className="font-poppins font-medium text-[24px] text-[#283938]">VS Code</p>
        </div>
        <div className="inline-flex gap-[10px] items-center bg-amber-100 py-[16px] px-[30px] rounded-[50px] ">
          <FaGithubSquare className="text-black text-3xl" />
          <p className="font-poppins font-medium text-[24px] text-[#283938]">Github</p>
        </div>
        <div className="inline-flex gap-[10px] items-center bg-amber-100 py-[16px] px-[30px] rounded-[50px] ">
          <SiPostman  className="text-lime-500 text-3xl" />
          <p className="font-poppins font-medium text-[24px] text-[#283938]">Postman</p>
        </div>
        </div>
      </Container>
    </div>
  );
};

export default Tools;
