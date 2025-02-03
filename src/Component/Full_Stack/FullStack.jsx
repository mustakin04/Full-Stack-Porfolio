import React, { useEffect } from 'react'
import Container from '../Container/Container'
import AOS from "aos"
import "aos/dist/aos.css"

const FullStack = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
  return (
    <div className='bg-[#22173f] py-[50px]'>
       <Container>
         <h1 className='font-dan font-semibold text-[40px] text-center'> <span className='text-amber-400'>
            A Full</span><span className='text-amber-500'>-Stack</span>
            <span className='text-amber-600'> Software</span><span className='text-amber-800'> Developer</span></h1>
        <div className='bg-linear-65  from-purple-500 to-pink-500 w-[400px] h-[260px] m-auto font-poppins 
        px-[12px] pt-[20px]  mt-[30px] rounded'
        data-aos="fade-up-left">
            <h2 className='font-semibold text-[26px] mb-[10px]'><span className='text-yellow-500'>
              Fronte</span><span className='text-lime-400'>nd</span><span className='text-lime-300'> 
                 Techno</span><span  className='text-lime-200'>logy  -</span></h2>
            <p className='font-medium text-[20px] mb-[5px]'>HTML</p>
            <p className='font-medium text-[20px] mb-[5px]'>CSS</p>
            <p className='font-medium text-[20px] mb-[5px]'>Tailwind CSS</p>
            <p className='font-medium text-[20px] mb-[5px]'>Ract</p>
            <p className='font-medium text-[20px] mb-[5px]'>Redux</p>
        </div>
        <div className='bg-linear-65  from-lime-500 to-stone-500 w-[400px] h-[260px] m-auto font-poppins 
        px-[12px] pt-[20px]  mt-[30px] rounded'
        data-aos="fade-up-right">
            <h2 className='font-semibold text-[26px] mb-[10px] '><span className='text-[#ffcc01]'>
              Backe</span><span className='text-yellow-300'>nd Techn</span><span className='text-yellow-200'>ology -</span></h2>
            <p className='font-medium text-[20px] mb-[5px]'>Node.js</p>
            <p className='font-medium text-[20px] mb-[5px]'>Express.js</p>
            <p className='font-medium text-[20px] mb-[5px]'>Firebase</p>
            <p className='font-medium text-[20px] mb-[5px]'>MySQL</p>
            <p className='font-medium text-[20px] mb-[5px]'>Redux</p>
        </div>
       </Container>
    </div>
  )
}

export default FullStack