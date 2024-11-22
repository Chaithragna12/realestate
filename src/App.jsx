// import React from 'react'

import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Projects from "./Components/Projects"
import Testimonials from "./Components/Testimonials"


const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App