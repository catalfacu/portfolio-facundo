import Landing from "./components/landing/Landing";
import AboutMe from "./components/About me/AboutMe";
import Studies from "./components/Studies/Studies";
import Techs from "./components/Techs/Techs";
import Contact from "./components/Contact/Contact";
import NavBar from "./components/navBar/NavBar";
import {Routes, Route} from 'react-router-dom';
import Projects from "./components/Projects/Projects";


function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/aboutme' element={<AboutMe/>}/>
      <Route path='/studies' element={<Studies/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/techs' element={<Techs/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
