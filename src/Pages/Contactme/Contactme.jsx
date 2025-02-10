import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Contact from '../../Component/Contact/Contact'

const Contactme = () => {
  return (
    <div className="w-full h-screen bg-[#212228]">
        <Navbar></Navbar>
       <div className='pt-[80px]'>
       <Contact></Contact>
       </div>
    </div>
  )
}

export default Contactme