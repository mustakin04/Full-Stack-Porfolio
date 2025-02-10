import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import About from '../About/About'
import Project from '../Project/Project'
import Education from '../Education/Education'
import Tools from '../Tools/Tools'
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <About></About>
        <Project></Project>
        <Education></Education>
        <Tools></Tools>
        <Contact></Contact>
    </div>
  )
}

export default Home