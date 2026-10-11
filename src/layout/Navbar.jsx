import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"

const navLinks = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/education", label: "Education" },
    { href: "/certifications", label: "Certifications" },
    { href: "/contact", label: "Contact" }
]

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled]= useState(false);

    useEffect(()=> {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 50);
         
     }

       window.addEventListener("scroll", handleScroll);
       return () => {
        window.removeEventListener("scroll", handleScroll);
       }

    }, []);

    return (
    <header
  className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
    isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
  } z-50`}
>
        <nav className="container mx-auto px-6 flex items-center justify-between relative">
            <Link to="/"
            className="text-xl font-bold tracking-tight hover:text-primary transition-colors"> 
                UTKARSH <span className="text-primary">.</span>
            </Link>
            {/* desktop nav */}
            <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                    {navLinks.map((link) => ( 
                        <NavLink key={link.href} to={link.href} className={({ isActive }) => `px-4 py-2 text-sm rounded-full hover:bg-surface transition-colors duration-300 ${isActive ? "text-primary bg-surface" : "text-muted-foreground hover:text-foreground"}`}>
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            </div>
            {/* cta-button */}

            {/* mobile menu button */}
            <button 
            className="md:hidden p-2 text-foreground cursor-pointer" 
            onClick={() => setIsMobileMenuOpen((prev) => !prev )}>
               { isMobileMenuOpen ? <X /> : <Menu size={24} /> }

            </button>
        </nav>
{/* mobile menu */}
{isMobileMenuOpen &&( 
<div className="md:hidden glass-strong animate-fade-in">
<div className="container mx-auto px-6 py-6 flex flex-col gap-4 ">
    {navLinks.map((link) => ( 
    <NavLink key={link.href}
    to={link.href}
    onClick={() => setIsMobileMenuOpen(false)}
    className={({ isActive }) => `text-lg py-2 ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
    {link.label}
    </NavLink>
                ))}

                
</div>
</div>)}
    </header>
)
}