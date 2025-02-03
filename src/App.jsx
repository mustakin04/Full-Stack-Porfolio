
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/Banner/Banner'
import About from './Component/About/About'
import FullStack from './Component/Full_Stack/FullStack'
import Education from './Component/Education/Education'
import Tools from './Component/Tools/Tools'
import Live from './Component/Live/Live'
import Contact from './Component/Contact/Contact'

function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <FullStack></FullStack>
      <Education></Education>
      <Tools></Tools>
      <Live></Live>
      <Contact></Contact>
    </>
  )
}

export default App
