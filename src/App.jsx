import{Navbar} from "@/layout/Navbar"
import {Hero} from "@/sections/Hero"
import  About from "@/sections/About"
import {Project} from "@/sections/Project"
import {Experience} from "@/sections/Experience"
import {Education} from "@/sections/Education"
import {Certifications} from "@/sections/Certifications"
import {Contact} from "@/sections/Contact"
import {Footer} from "@/layout/Footer"
import { Reveal } from "@/components/Reveal"

import { Toaster } from "react-hot-toast"

function App() {

  return <div className="min-h-screen overflow-x-hidden">
    <Toaster 
      position="bottom-right" 
      toastOptions={{
        style: {
          background: "#121212",
          color: "#fff",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }
      }}
    />
    <Navbar/>
    <main>
      <Hero/>
        <Reveal><About/></Reveal>
        <Reveal delay={80}><Project/></Reveal>
        <Reveal delay={120}><Experience/></Reveal>
        <Reveal delay={80}><Certifications/></Reveal>
        <Reveal delay={120}><Education/></Reveal>
        <Reveal><Contact/></Reveal>
    </main>
    <Footer/>
  </div>
}

export default App
