import React from "react";
import banner from "../../assets/ptbanner.jpg";
import Container from "../Container/Container";
import kuyasha from "../../assets/kuyasha-removebg-preview.png";
import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import  { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";

const Banner = () => {
  const typewriterRef = useRef(null);
  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      loop: true,
      delay: 75,
    });

    typewriter
      .pauseFor(2500)
      .typeString("Full-Stack Web Developer")
      .pauseFor(300)
      .deleteChars(10)
      .pauseFor(1000)
      .start();
  }, []);

  return (
    <div className="relative ">
      <div
        className=" z-[-111] py-[60px]   bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <Container className="">
          <div className="">
            <h1 className="font-poppins font-bold text-[56px] text-[#FFFFFF] text-center pt-[60px]">
              Hello! I am
              <span className="text-[#00c0ff]"> Mustakin Hassan</span>
            </h1>
            <h2 ref={typewriterRef}
            className="font-poppins font-semibold text-[36px] text-[#FFFFFF] text-center pt-[10px]">
              
            </h2>
            <p className="font-poppins font-semibold text-[26px] text-[#FFFFFF] text-center pt-[6px] tracking-wide">
              With <span className="text-yellow-300  ">1+ Years </span>
              Self Learing Experience
            </p>
          </div>
          <div
            className="absolute bottom-0 right-[50%] translate-x-[50%] bg-amber-500 w-[900px] 
             h-[500px] rounded-t-full flex justify-center"
          >
            <img src={kuyasha} alt="" className="" />
            <div
              className="absolute flex top-[200px] right-[-20px] items-center gap-[10px]  bg-white py-[20px] 
            px-[20px] rounded-[25px]"
            >
              <SiTailwindcss className="text-4xl text-[#16b4b1]" />
              <p className="font-poppins font-semibold text-[#283938] text-[24px]">
                Tailwind
              </p>
            </div>
            <div
              className="absolute flex top-[230px] left-[-70px] items-center gap-[10px]  bg-white py-[20px] 
            px-[20px] rounded-[25px]"
            >
              <RiJavascriptFill className="text-5xl text-[#e8d44d]" />
              <p className="font-poppins font-semibold text-[#283938] text-[24px]">
                JavaScript
              </p>
            </div>
            <div
              className="absolute top-[30px] right-[80px] flex items-center gap-[10px]  bg-white py-[20px] 
              px-[20px] rounded-[25px]"
            >
              <FaReact className="text-4xl text-[#57d3f5]" />
              <p className="font-poppins font-semibold text-[#283938] text-[24px]">
                React
              </p>
            </div>
            <div
              className="absolute top-[50px] left-[50px] flex items-center gap-[10px]  bg-white py-[20px] 
              px-[20px] rounded-[25px]"
            >
              <SiNextdotjs className="text-4xl text-[#f57457]" />
              <p className="font-poppins font-semibold text-[#283938] text-[24px]">
                Next.js
              </p>
            </div>
            <div
              className="absolute bottom-[20px] right-[10px] flex items-center gap-[10px]  bg-white py-[20px] 
              px-[20px] rounded-[25px]"
            >
              <SiFirebase className="text-4xl text-[#d62b00]" />
              <p className="font-poppins font-semibold text-[#283938] text-[24px]">
                Firebase
              </p>
            </div>
            <div
              className="absolute bottom-[20px] left-[10px] flex items-center gap-[10px]  bg-white py-[20px] 
              px-[20px] rounded-[25px]"
            >
              <IoLogoFigma className="text-4xl text-[#d600ab]" />
              <p className="font-poppins font-semibold text-[#283938] text-[24px]">
                Figma
              </p>
            </div>
          </div>
          <div id="app" className="mt-[300px]">
              <div className="arrow arrowSliding delay1"></div>
              <div className="arrow arrowSliding delay2"></div>
              <div className="arrow arrowSliding delay3"></div>
              <div className="arrow arrowSliding delay2"></div>
              <div className="arrow arrowSliding delay3"></div>
            </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
