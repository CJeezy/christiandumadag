import React from 'react';
import Intro from './components/Intro'
import Contact from './components/Contact'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {

  return (
      <div className='App'>
        <Intro/>
        <Contact/>
        <Projects/>
        <Timeline/>
        <Footer/>
      </div>    
  )
}

export default App
