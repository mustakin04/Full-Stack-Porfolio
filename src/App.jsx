import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/Banner/Banner'
import About from './Component/About/About'
import FullStack from './Component/Full_Stack/FullStack'
import Education from './Component/Education/Education'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <FullStack></FullStack>
      <Education></Education>
      
    </>
  )
}

export default App
