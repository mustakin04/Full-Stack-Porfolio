
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/Banner/Banner'
import About from './Component/About/About'
import Education from './Component/Education/Education'
import Tools from './Component/Tools/Tools'
import Live from './Component/Live/Live'
import Contact from './Component/Contact/Contact'
import Project from './Component/Project/Project'

function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Project></Project>
      <Education></Education>
      <Tools></Tools>
      <Live></Live>
      <Contact></Contact>
    </>
  )
}

export default App
