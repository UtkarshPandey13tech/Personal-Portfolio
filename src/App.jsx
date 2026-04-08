import{Navbar} from "@/layout/Navbar"
import {Hero} from "@/sections/Hero"
import  About from "@/sections/About"
import {Project} from "@/sections/Project"
import {Experience} from "@/sections/Experience"
import {Education} from "@/sections/Education"
import {Certifications} from "@/sections/Certifications"
import {Contact} from "@/sections/Contact"
import {Footer} from "@/layout/Footer"

function App() {

  return <div className="min-h-screen overflow-x-hidden">
    <Navbar/>
    <main>
      <Hero/>
      <About/>
      <Project/>
      <Experience/>
      <Certifications/>
      <Education/>
      <Contact/>
    </main>
    <Footer/>
  </div>
}

export default App
