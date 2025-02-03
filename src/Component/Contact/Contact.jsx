import React from "react";
import Container from "../Container/Container";
import email from "../../assets/email.png";

const Contact = () => {
  return (
    <div className="bg-linear-60 from-[#409282] to-[#263463] py-[50px]">
      <Container>
        <h1
          className="text-[#e98b45] w-[170px] m-auto font-dan 
            font-bold text-[44px] border-b-[2px] 
             border-[#e98b45]"
        >
          CONTACT
        </h1>
        <div className="flex mt-[50px]">
          <div className="w-[70%] m-[30px]">
            <div className="">
                <input type="text" name="" id="" 
                placeholder="Enter Your Email"
                className="w-full py-[20px] px-[20px] bg-[#d4254e] rounded-[10px] mt-[20px] outline-none"/>
            </div>
            <div className="mt-[20px]">
                <input type="text" name="" id="" 
                placeholder="Enter your Whatsapp Number"
                className="w-full py-[20px] px-[20px] bg-[#d4254e] rounded-[10px]  outline-none"/>
            </div>
            <div className="mt-[20px]">
                <input type="text" name="" id="" 
                placeholder="Subject"
                className="w-full py-[20px] px-[20px] bg-[#d4254e] rounded-[10px] outline-none"/>
            </div>
            <div className="mt-[20px]">
                <input type="text" name="" id="" 
                placeholder="Message"
                className="w-full h-[100px] py-[20px] px-[20px] bg-white rounded-[10px] outline-none"/>
            </div>
            <div  className="w-full py-[20px] px-[20px] bg-[#d4254e] rounded-[10px] text-center mt-[20px]">
                SEND
            </div>
          </div>
          <div className="w-[30%]">
            <img src={email} alt="" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
