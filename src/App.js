import React, { useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Hire from './components/Hire';
import Home from './components/Home';

import Navbar from './components/Navbar'
import Skills from './components/Skills';
// import img from './img/contactbackgrounddark.jpg'
function App() {
  const [width, setwidth] = useState(0);
  const [mode, setMode] = useState({ background: 'light', color: 'dark' })

  const handleNextClick = () => {

    let container = document.getElementById("skill-container")
    container.style.transform = `translateX(${(width - 300)}px)`
    container.style.transition = '.50s'
    setwidth(width - 200)
    if (width < -1400) {
      container.style.transform = 'translateX(0px)'
      setwidth(0)
    }
    // else{
    // 4
    console.log(width)

  }
  const handlePreviousClick = () => {
    console.log('previous')
    let container = document.getElementById("skill-container")
    container.style.transform = 'translateX(0px)'
    container.style.transition = '1s'
    setwidth(0)
  }

  const toggleMode = () => {
    console.log("dark mode enabled")
    if (mode.background === 'light' && mode.color === 'dark') {
      document.getElementById('root').style.backgroundColor = "rgb(17 24 32)"
      setMode({ background: 'dark', color: 'light' })
      document.getElementById('previous').style.color = "#ffffff";
      document.getElementById('next').style.color = "#ffffff";
      document.getElementById('home').style.background= 'linear-gradient(to bottom, rgb(96 48 48), rgb(26 40 67), rgb(22 45 10))'
    }
    else {
      document.getElementById('root').style.backgroundColor = "white"
      setMode({ background: 'light', color: 'dark' })
      
      document.getElementById('previous').style.color = "#000000";
      document.getElementById('next').style.color = "#000000";
      document.getElementById('home').style.background= 'linear-gradient(to right, #f5dcdc, rgb(107 142 207), rgb(134 148 127))'
      
    }

  }
  


  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Home mode={mode}/>
      <Education mode={mode} />
      <div className='myskills-container d-flex mx-4 align-items-center'>
        <i id='previous' className="mt-4 fa-regular fa-circle-left fa-2xl" onClick={handlePreviousClick} style={{ "color": " #000000" }} ></i>
        <div className="overflow-hidden skills" style={{ 'width': "90vw", 'margin': '5px auto 0 auto' }}>
          <Skills mode={mode} />
        </div>
        <i id='next' className="mt-4 fa-regular fa-circle-right fa-2xl " onClick={handleNextClick} style={{ "color": " #000000" }} ></i>
      </div>
      <Hire />
      <Contact mode={mode} />
      <Footer mode={mode} />
    </>
  );
}

export default App;
