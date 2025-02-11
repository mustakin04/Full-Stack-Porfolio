import React from "react";
import Container from "../Container/Container";
import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="w-full">
      <div className="absolute z-[999] w-full text-white py-[34px]">
        <Container className=' md:flex '>
          <div className=" md:flex gap-[20px] md:w-[50%]">
            <div className="flex items-center gap-[10px]">
              <MdCall className="text-2xl " />
              <h3 className="font-poppins font-medium text-[22px]">
                +8801311605545
              </h3>
            </div>
            <div className="flex items-center gap-[10px]">
              <IoIosMail className="text-2xl " />
              <h3 className="font-poppins font-medium text-[22px]">
                mustakinhasan37@gmail.com
              </h3>
            </div>
          </div>
          <div className="md:w-[50%] ">
            <div className="relative md:flex justify-end items-center">
              <ul className="absolute right-[160px] md:flex
               justify-center gap-[26px] font-poppins font-semibold py-[6px] 
              px-[20px] text-[24px] text-white rounded ">
                <li className="hover:text-[#e98b45] hover:border-b-4 hover:border-b-[#e98b45] ">
                 <Link to="/"> Home</Link></li>
                <li className="hover:text-[#e98b45] hover:border-b-4 hover:border-b-[#e98b45] ">
                  <Link to="/about">About</Link></li>
                <li className="hover:text-[#e98b45] hover:border-b-4 hover:border-b-[#e98b45]" >
                  <Link to="/project">Project</Link></li>
                <li className="hover:text-[#e98b45] hover:border-b-4 hover:border-b-[#e98b45]">
                 <Link to="/education"> Education</Link></li>
                <li className="hover:text-[#e98b45] hover:border-b-4 hover:border-b-[#e98b45]"> 
                 <Link to="/contact"> Contact</Link></li>
              </ul>
             <div className="border-2 border-[#e98b45]">
              <a href="https://drive.google.com/file/d/16ogAAYYUqG1-fGu_QPohSxGfUlNvlWpy/view?usp=sharing"
              className="font-poppins font-semibold py-[8px] 
              px-[20px] text-[24px] text-white rounded ">Resume</a>
             </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
