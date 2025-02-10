import React from "react";
import Container from "../Container/Container";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa6";


const Education = () => {
  return (
    <div className="bg-[#212228] py-[50px]">
      <Container>
        <h1
          className="max-w-[200px] font-dan font-bold text-[34px] m-auto text-[#e98b45]"
        >
          EDUCAT <span className="text-white">ION</span>
        </h1>
        <div className="relative w-[600px] h-[2px] m-auto bg-white mt-[30px]">
          <div className="absolute top-[-30px] left-[45%]  flex justify-center items-center w-[60px] h-[60px] rounded-full bg-gray-600">
            <div className="w-[18px] h-[18px] rounded-full bg-[#e98b45] m-[10px] border-2 border-white"></div>
          </div>
        </div>
        <div className="flex justify-between mt-[100px] ">
          <div className="w-[470px] h-[300px] bg-[#0a192f] rounded px-[15px] py-[20px] border-1 border-white " data-aos="zoom-in-up">
            <div className="flex items-center justify-between ">
              <div className="flex items-center bg-[#20122a] py-[10px] px-[12px] rounded gap-[10px] ">
                <FaCalendarAlt className="text-2xl text-[#e98b45] " />
                <p className="font-medium font-poppins text-[22px] text-white">
                  2020-2024{" "}
                </p>
              </div>
              <div
                className="font-poppins font-medium text-[22px] text-black
                 bg-yellow-100 py-[10px] px-[10px] rounded"
              >
                Graduation
              </div>
            </div>
            <div className="flex mt-[16px] mb-[15px] ">
              <p
                className="font-poppins font-medium text-[20px] text-white bg-gray-600  
            px-[10px] rounded"
              >
                Bachelor Degreee
              </p>
            </div>
            <p className="font-poppins  font-medium text-[22px] text-white mb-[15px]">
              Computer Science and Engineering
            </p>
            <div>
              <div className="flex items-center gap-[15px]">
                <IoIosSchool className="text-4xl text-[#e98b45] "/>
                <p className="font-poppins  font-medium text-[20px] text-white">
                    Daffodil International University</p>
              </div>
              <div className="flex  items-center gap-[20px] mt-[5px]">
                 <FaLocationDot className="text-2xl text-[#e98b45]"/>
                 <p className="font-poppins  font-medium text-[20px] text-white">
                  DSC,Ashulia,Savar,Dhaka</p>
              </div>
            </div>
          </div>
          <div className="w-[470px] h-[300px] bg-[#0a192f] rounded px-[15px] border-1 border-white py-[20px]" data-aos="zoom-in-up">
            <div className="flex items-center justify-between">
              <div className="flex items-center bg-[#20122a] py-[10px] px-[12px] rounded gap-[10px]">
                <FaCalendarAlt className="text-2xl text-[#e98b45] " />
                <p className="font-medium font-poppins text-[22px] text-white">
                  2017-2019{" "}
                </p>
              </div>
              <div
                className="font-poppins font-medium text-[22px] text-black
                 bg-yellow-100 py-[10px] px-[10px] rounded"
              >
                Intermediate
              </div>
            </div>
            <div className="flex mt-[15px] mb-[10px] ">
              <p
                className="font-poppins font-medium text-[20px] text-white bg-gray-600  
            px-[10px] rounded mb-[10x]"
              >
                HSC
              </p>
            </div>
            <p className="font-poppins  font-medium text-[22px] text-white mb-[10px]">
              Science Group
            </p>
            <div>
              <div className="flex items-center gap-[15px]">
                <FaSchool  className="text-4xl text-[#e98b45] "/>
                <p className="font-poppins  font-medium text-[20px] text-white">
                Sananda Bari Degree College</p>
              </div>
              <div className="flex  items-center gap-[20px] mt-[5px]">
                 <FaLocationDot className="text-2xl text-[#e98b45]"/>
                 <p className="font-poppins  font-medium text-[20px] text-white">
                  Sanadabari,Jamalpur,Dhaka</p>
              </div>
            </div>
          </div>
          <div className="w-[470px] h-[300px] bg-[#0a192f] border-1 border-white rounded px-[15px] py-[20px] " data-aos="zoom-in-up">
            <div className="flex items-center justify-between">
              <div className="flex items-center bg-[#20122a] py-[10px] px-[12px] rounded gap-[10px]">
                <FaCalendarAlt className="text-2xl text-[#e98b45] " />
                <p className="font-medium font-poppins text-[22px] text-white">
                  2011-2016{" "}
                </p>
              </div>
              <div
                className="font-poppins font-medium text-[22px] text-[#20122a]
                 bg-yellow-100 py-[10px] px-[10px] rounded"
              >
                School
              </div>
            </div>
            <div className="flex mt-[15px] mb-[10px] ">
              <p
                className="font-poppins font-medium text-[20px] text-white bg-gray-600  
            px-[10px] rounded mb-[10x]"
              >
                SSC
              </p>
            </div>
            <p className="font-poppins  font-medium text-[22px] text-white mb-[10px]">
              Science Group
            </p>
            <div>
              <div className="flex items-center gap-[15px]">
                <FaSchool  className="text-4xl text-[#e98b45] "/>
                <p className="font-poppins  font-medium text-[20px] text-white">
                Taratia Al-haz-lai Mamud High School</p>
              </div>
              <div className="flex  items-center gap-[20px] mt-[5px]">
                 <FaLocationDot className="text-2xl text-[#e98b45]"/>
                 <p className="font-poppins  font-medium text-[20px] text-white">
                  Taratia,Jamalpur,Dhaka</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Education;
