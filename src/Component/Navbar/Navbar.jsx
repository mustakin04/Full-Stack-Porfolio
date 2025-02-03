import React, { useState } from "react";
import Container from "../Container/Container";
import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";


const Navbar = () => {
  const [show,setShow]=useState(false)
  return (
    <div>
      <div className="w-[full] bg-linear-65  from-purple-500 to-pink-500 overflow-x-auto scrollbar-hidden ">
        <Container className='flex py-[15px]'>
          <div className="flex gap-[20px] w-[50%]">
            <div className="flex items-center gap-[10px]">
              <MdCall className="text-2xl " />
              <h3 className="font-poppins font-normal text-[18px]">
                +8801311605545
              </h3>
            </div>
            <div className="flex items-center gap-[10px]">
              <IoIosMail className="text-2xl " />
              <h3 className="font-poppins font-normal text-[18px]">
                mustakinhasan37@gmail.com
              </h3>
            </div>
          </div>
          <div className="w-[50%] ">
            <div className="relative flex justify-end">
              {show&&
              <ul className="absolute right-[50px] flex justify-center gap-[22px] font-poppins font-normal py-[6px] 
              px-[20px] text-[18px] text-white bg-black rounded">
                <li>Home</li>
                <li>About</li>
                <li>Education</li>
                <li>Project</li>
                <li>Contact</li>
              </ul>}
              <IoReorderThreeOutline onClick={()=>setShow(!show)} className="text-4xl" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
