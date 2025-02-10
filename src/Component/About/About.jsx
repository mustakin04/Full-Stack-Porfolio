import React from "react";
import Container from "../Container/Container";
import image from "../../assets/Mustakinhjpg-removebg-preview.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
    <div className="bg-[#212228] py-[60px]">
      <Container>
        <h1
          className="text-[#e98b45]  text-center  font-dan 
            font-bold text-[50px] "
        >
          ABOUT <span className="text-white ml-[5px]"> ME </span>
        </h1>
        <div className="relative w-[600px] h-[2px] m-auto bg-white mt-[30px]">
          <div className="absolute top-[-30px] left-[45%]  flex justify-center items-center w-[60px] h-[60px] rounded-full bg-gray-600">
            <div className="w-[18px] h-[18px] rounded-full bg-[#e98b45] m-[10px] border-2 border-white"></div>
          </div>
        </div>
        <div className="flex gap-[50px] mt-[120px]">
          <div className="w-[50%]">
            <div className="w-[400px] h-[400px] bg-amber-600 rounded-[100%] border-4 border-white overflow-hidden">
              <img
                src={image}
                alt=""
                className="object-cover w-[390px] h-[390px] rounded-full  "
              />
            </div>
            <div className="font-poppins text-white ">
              <h2 className="font-semibold text-[26px] my-[30px] ">
                I'm MD Mustain Hasan
              </h2>
              <p className="font-normal text-[22px] text-justify">
                I am a highly passionate, enthusiastic, hardworking and
                dedicated learner. Self-motivated IT professional with deep
                knowledge and proficiency in JavaScript, HTML, CSS, and mobile
                responsive website development, as well as highly potent skills
                and ability in encoding virus-free and efficient code. I have a
                strong passion for the creativity and discipline that goes into
                front-end development. Keeping in mind scalability and clean
                code that is maintainable and readable.
              </p>
              <div className="bg-[#e98b45] inline-flex  rounded-sm mt-[30px] ">
                <button
                  className="font-poppins font-semibold text-black text-[24px] px-[20px] 
                py-[14px]"
                >
                 <Link to="/contact"> Contact Me</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="w-[50%] ">
            <h2 className="font-poppins font-semibold  text-white text-[40px] text-center mb-[50px]">
              My Skills
            </h2>
            <div>
              <h3 className="font-poppins font-semibold text-[30px] text-white mb-[30px]">
                Comfortabe
              </h3>
              <div className="font-semibold text-black text-[25px] ">
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded-[50px] mr-[12px] mb-[12px]">
                  HTML
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded-[50px]  mr-[12px]  mb-[12px]">
                  CSS
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded-[50px]  mr-[12px]  mb-[12px]">
                  Javascript
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded-[50px]  mr-[12px]  mb-[12px]">
                  ES6
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded-[50px]  mr-[12px]  mb-[12px]">
                  React
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded-[50px]  mr-[12px]  mb-[12px]">
                  Bootstarp
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded-[50px]  mr-[12px]">
                  Tailwindcss
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded-[50px]  mr-[12px]">
                  Figma
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded-[50px]  mr-[12px]">
                  daisyUI
                </button>
              </div>
            </div>
            <div className="mt-[50px]">
              <h3 className="font-poppins font-semibold text-[30px] text-white mb-[30px]">
                Familiar
              </h3>
              <div className="font-semibold text-black text-[25px] ">
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded-[50px] mr-[12px] mb-[12px]">
                  Node.js
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded-[50px]  mr-[12px]  mb-[12px]">
                  Redux
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded-[50px]  mr-[12px]  mb-[12px]">
                  Java
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded-[50px]  mr-[12px]  mb-[12px]">
                  Data Structure
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded-[50px]  mr-[12px]  mb-[12px]">
                  Algorithm
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded-[50px]  mr-[12px]  mb-[12px]">
                  OOP
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded-[50px]  mr-[12px]  mb-[12px]">
                  Java
                </button>
              </div>
            </div>
            <div className="mt-[50px]">
              <h3 className="font-poppins font-semibold text-[30px] text-white mb-[30px]">
                Tools & Platfrom
              </h3>
              <div className="font-semibold text-black text-[25px] ">
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded-[50px] mr-[12px] mb-[12px]">
                  Visual Studio Code
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded-[50px]  mr-[12px]  mb-[12px]">
                  Git
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded-[50px]  mr-[12px]  mb-[12px]">
                  GitHub
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded-[50px]  mr-[12px]  mb-[12px]">
                  Npm
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded-[50px]  mr-[12px]  mb-[12px]">
                  Yarn
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded-[50px]  mr-[12px]  mb-[12px]">
                  Firebase
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded-[50px]  mr-[12px]  mb-[12px]">
                  Netlify
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded-[50px]  mr-[12px]  mb-[12px]">
                  Vercel
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded-[50px]  mr-[12px]  mb-[12px]">
                  Chrome Dev Tool
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
    </>
  );
};

export default About;
