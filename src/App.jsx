import { useEffect } from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { Navbar } from "@/layout/Navbar"
import { Footer } from "@/layout/Footer"
import { Hero } from "@/sections/Hero"
import About from "@/sections/About"
import { Project } from "@/sections/Project"
import { Experience } from "@/sections/Experience"
import { Education } from "@/sections/Education"
import { Certifications } from "@/sections/Certifications"
import { Contact } from "@/sections/Contact"

const pageTitles = {
  "/": "Home",
  "/about": "About",
  "/projects": "Projects",
  "/experience": "Experience",
  "/education": "Education",
  "/certifications": "Certifications",
  "/contact": "Contact",
}

function PageLayout() {
  const { pathname } = useLocation()
  const pageTitle = pageTitles[pathname]

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = pageTitle
      ? `${pageTitle} | Utkarsh Pandey`
      : "Page Not Found | Utkarsh Pandey"
  }, [pageTitle, pathname])

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#121212",
            color: "#fff",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          },
        }}
      />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <section className="container mx-auto flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
                <p className="section-kicker text-sm font-medium uppercase tracking-wider text-primary">
                  404
                </p>
                <h1 className="mt-4 text-4xl font-bold md:text-5xl">Page not found</h1>
                <p className="mt-4 text-muted-foreground">
                  The page you are looking for does not exist.
                </p>
                <a
                  href="/"
                  className="mt-8 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Back to home
                </a>
              </section>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <PageLayout />
    </BrowserRouter>
  )
}

export default App
