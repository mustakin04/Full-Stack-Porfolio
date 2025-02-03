import React from "react";
import Container from "../Container/Container";
import { FaFigma } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaGithubSquare } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

const Tools = () => {
  return (
    <div className="bg-linear-65  from-gray-500 to-stone-500 py-[50px]">
      <Container>
        <h1 className="font-dan font-bold text-[44px] text-center mb-[30px]">
          <span className="text-yellow-600">The Tools</span>
          <span className="text-amber-600">Which I</span>{" "}
          <span className="text-orange-600">For Developer</span>
        </h1>
        <div className="flex justify-evenly">
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
