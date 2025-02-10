import React from 'react'
import Container from '../Container/Container'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tdj70o2', 'template_b5lrtzp', form.current, {
        publicKey: 'xK1iWtKvqLcYQD8w_',
      })
      .then(
        () => {

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  const notify = () => toast("Wow so easy!");

  return (
    <div className='bg-[#212228] py-[60px]'>
      <Container>
      <ToastContainer />
      <h1
          className="text-[#e98b45]  text-center  font-dan 
            font-bold text-[50px]"
        >
          CONTACT <span className="text-white ml-[5px]"> ME </span>
        </h1>
        <p className='font-poppins font-normal text-white text-[22px] mt-[10px] text-center'>
          Have a question or want to work together?I'd really have to hear from your feedback</p>
        <div className="relative w-[600px] h-[2px] m-auto bg-white mt-[50px]">
          <div className="absolute top-[-30px] left-[45%]  flex justify-center items-center w-[60px] h-[60px] rounded-full bg-gray-600">
            <div className="w-[18px] h-[18px] rounded-full bg-[#e98b45] m-[10px] border-2 border-white"></div>
          </div>
        </div>
        <form  ref={form} onSubmit={sendEmail}
         className='w-[700px] h-[550px] border-2 m-auto mt-[60px] bg-[#0a192f] p-[30px] border-white'>
          <h3 className='font-poppins font-semibold text-white text-[44px] mt-[10px] text-center'>
            GET   IN   TOUCH</h3>
          <input type="text" name="user_name"
          className='w-full py-[12px] px-[12px] text-gray-700 bg-white rounded-md
          font-poppins font-medium text-[22px] outline-blue-600 mt-[30px] ' 
          placeholder='Your Name'/>
          <input type="email"name="user_email"
          className='w-full py-[12px] px-[12px] text-gray-700 bg-white rounded-md
          font-poppins font-medium text-[22px] outline-blue-600 mt-[20px] ' 
          placeholder='Your Email'/>
          <textarea type="message" name="message"
          className='w-full h-[100px] text-start px-[12px] text-gray-700 bg-white rounded-md
          font-poppins font-medium text-[22px] outline-blue-600 mt-[32px] ' 
          placeholder='Message'/>
          <button  onClick={notify}
           value="Send" type='submit'
           className='w-full py-[12px] px-[12px] text-gray-700 bg-emerald-400 rounded-md
          font-poppins font-medium text-[22px] outline-blue-600 mt-[30px] '>Send</button>
        </form>    
      </Container>
    </div>
  )
}

export default Contact