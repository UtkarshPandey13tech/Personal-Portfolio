import {Button} from "@/components/Button"
import { Menu ,X} from "lucide-react"
import {useState} from "react"
import { useEffect } from "react"
const navLinks = [
    {  href: "#About", label: "About" },
    {  href: "#Project", label: "Project" },
    {  href: "#Experience", label: "Experience" },
    {  href:"#Education" ,label:"Education"},
    {  href: "#Certifications", label: "Certifications" },
    {  href: "#Contact", label: "Contact" }
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
    <header className=" {`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? 'glass-strong py-3' : 'bg-transparent py-5' } z-50`}">
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" 
            className="text-xl font-bold tracking-tight hover:text-primary"> 
                Utkarsh's <span className="text-primary">Portfolio</span>
            </a>
            {/* desktop nav */}
            <div className="hidden md:flex items-center gap-1">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                    {navLinks.map((link , index) => ( 
                        <a key={index} href={link.href} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
            {/* cta-button */}
            <div className="hidden md:block">
                <Button size="sm" className="text-xs">Contact Me</Button>
            </div>
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
    {navLinks.map((link , index) => ( 
                    <a key={index}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg text-muted-foreground hover:text-foreground py-2">
                    {link.label}
                    </a>
                ))}

                <Button  onClick={() => setIsMobileMenuOpen(false)} size="lg">Contact Me</Button>
</div>
</div>)}
    </header>
)
}