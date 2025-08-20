import React from "react";
import Container from "../Container/Container";
import chat from "../../assets/Screenshot (3).png";
import petrol from "../../assets/Screenshot (4).png";
import innovate from "../../assets/Screenshot (12).png"

const Project = () => {
  return (
    <div className="bg-[#212228] py-[60px]">
      <Container>
        <h1
          className="text-[#e98b45]  text-center  font-dan 
            font-bold text-[50px] "
        >
          MY <span className="text-white ml-[5px]"> PROJECTS </span>
        </h1>
        <div className="relative w-[600px] h-[2px] m-auto bg-white mt-[30px]">
          <div className="absolute top-[-30px] left-[45%]  flex justify-center items-center w-[60px] h-[60px] rounded-full bg-gray-600">
            <div className="w-[18px] h-[18px] rounded-full bg-[#e98b45] m-[10px] border-2 border-white"></div>
          </div>
        </div>
        <div className="flex justify-between mt-[100px]">
          <div className="w-[31%] border-1 border-white "
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
            <div>
              <img src={chat} alt="" className="object-cover" />
            </div>
            <div className="m-[20px]">
              <h3 className="font-semibold font-poppins text-white text-[26px] mt-[30px] ">
                Chatting Application
              </h3>
              <p className="font-normal font-poppins text-white text-[22px] mt-[20px]">
                Chatting appliction is frontend and backend chatting app.
              </p>
              <ul className="font-normal font-poppins text-white text-[22px] list-inside list-disc">
                <li>Chatting with friend</li>
                <li>Add Friend</li>
                <li>Block</li>
                <li>Authentication</li>
              </ul>
              <div className="font-semibold text-black text-[22px]  mt-[30px]">
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded  mr-[10px]  mb-[8px]">
                  React.js
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded  mr-[10px]  mb-[8px]">
                  Tailwincss
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded  mr-[10px]  mb-[8px]">
                  Firebase
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded  mr-[10px]  mb-[8px]">
                  Redux
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded  mr-[10px]  mb-[8px]">
                  React Router
                </button>
              </div>
              <div className="flex justify-between font-poppins font-semibold text-white text-[24px]
               mt-[150px]">
                <a href="https://profound-faun-d97413.netlify.app/" className="py-[10px] px-[18px] 
                border-2 border-[#e98b45]">Website</a>
                <a href="https://github.com/mustakin04/Chatting-application" className="py-[10px] 
                px-[18px] border-2 border-[#e98b45]">GitHub</a>
              </div>
            </div>
          </div>
          <div className="w-[31%] border-1 border-white"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
            <div>
              <img src={petrol} alt="" className="object-cover" />
            </div>
            <div className="m-[20px]">
              <h3 className="font-semibold font-poppins text-white text-[26px] mt-[30px] ">
                Petroil
              </h3>
              <p className="font-normal font-poppins text-white text-[22px] mt-[20px]">
                Petroil appliction is frontend  part.
              </p>
              <ul className="font-normal font-poppins text-white text-[22px] list-inside list-disc">
                <li>It's fully Responsive Website</li>
              </ul>
              <div className="font-semibold text-black text-[22px]  mt-[30px]">
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded  mr-[10px]  mb-[8px]">
                  React.js
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded  mr-[10px]  mb-[8px]">
                  Tailwincss
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded  mr-[10px]  mb-[8px]">
                  React Router
                </button>
                < button className="bg-[#e98b45] py-[12px] px-[12px] rounded  mr-[10px]  mb-[8px]">
                  Netify
                </button>
                < button className="bg-[#e98b45] py-[12px] px-[12px] rounded  mr-[10px]  mb-[8px]">
                  GitHub
                </button>
              </div>
              <div className="flex justify-between  font-poppins font-semibold text-white text-[24px] 
              mt-[280px]">
                <a href="https://lighthearted-lokum-3ed1d9.netlify.app/" className="py-[10px] px-[18px] 
                border-2 border-[#e98b45]">Website</a>
                <a href="https://github.com/mustakin04/Petroil-Website" className="py-[10px] px-[18px] border-2
                 border-[#e98b45]">GitHub</a>
              </div>
            </div>
          </div>
          <div className="w-[31%] border-1 border-white"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
            <div>
              <img src={innovate} alt="" className="object-cover" />
            </div>
            <div className="m-[20px]">
              <h3 className="font-semibold font-poppins text-white text-[26px] mt-[30px] ">
              E-Commerce 
              </h3>
              <p className="font-normal font-poppins text-white text-[22px] mt-[20px]">
              Full-Stack E-Commerce Application
              </p>
              <ul className="font-normal font-poppins text-white text-[22px] list-inside list-disc">
                <li>React frontend with responsive design</li>
                <li>Node.js/Express backend with session-based authentication</li>
                 <li>Admin dashboard for product & order management</li>
              </ul>
              <div className="font-semibold text-black text-[22px]  mt-[30px]">
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded  mr-[10px]  mb-[8px]">
                  React.js 
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded  mr-[10px]  mb-[8px]">
                  React Router
                </button>
                < button className="bg-[#e98b45] py-[12px] px-[12px] rounded  mr-[10px]  mb-[8px]">
                  Tailwind CSS
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded  mr-[10px]  mb-[8px]">
                  Axios
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded  mr-[10px]  mb-[8px]">
                 Node.js
                </button>
                < button className="bg-[#e98b45] py-[12px] px-[12px] rounded  mr-[10px]  mb-[8px]">
                Express.js
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded  mr-[10px]  mb-[8px]">
                 MongoDB 
                </button>
                <button className="bg-[#e98b45] py-[12px] px-[12px] rounded  mr-[10px]  mb-[8px]">
               express-session
                </button>
                < button className="bg-[#e98b45] py-[12px] px-[12px] rounded  mr-[10px]  mb-[8px]">
                  SSLCommerz
                </button>
              </div>
              <div className="flex justify-between  font-poppins font-semibold text-white text-[24px]
               mt-[10px]">
                 <a href="https://gleeful-maamoul-dc75e4.netlify.app/" className="py-[10px] px-[18px] 
                border-2 border-[#e98b45]">Website</a>
                <a href="https://github.com/mustakin04/Full-Ecommerce" className="py-[10px] 
                px-[18px] border-2 border-[#e98b45]">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Project;
