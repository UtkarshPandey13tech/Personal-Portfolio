import {Button} from "@/components/Button"
import { ArrowRight, Download , ChevronDown} from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"

const skills=[
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Java",
    "Python",
    "JavaScript",
    "Git & GitHub",
    "HTML & CSS",
    "Tailwind CSS",
    "Problem Solving",
    "Data Structures & Algorithms",
    "MySQL",
    "RESTful APIs",
    "Vercel",
    "Vibe Coding",
    "AI Tools",
    "Machine Learning Basics",
    "GenAI",
    "AWS Basics",
]


export const Hero = () => {
    return <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* background */}
        <div className="absolute inset-0">
            <img src="/hero-bg4.jpg" 
            alt="Hero Background"
             className="w-full h-full object-cover opacity-40"/>
           <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background"/>
        </div>
        {/* green dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="absolute w-1.5 h-1.5 rounded-full opacity-60" 
               style={{
                backgroundColor:"#20B2A6",
                left: `${Math.random() *100}%`,
                top: `${Math.random() *100}%` ,
                animation:`slow-drift ${20 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
               }}
              />
                ))}
        </div>
        {/* content hero */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* left column-text content */}
                <div className="space-y-8 ">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                       B.Tech -  Computer Science Student 
                        </span>
                    </div>
                    {/* headline for hero section */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-2xl lg:text-2xl font-bold leading-tight animate-fade-in animation-delay-100 ">
                            Problem Solver <span className="text-primary glow-text">Passionate Coder </span> <br />
                              Aspiring Software Engineer <br />
                              <span className="font-serif italic font-normal text-white">Quick Learner

                              </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200 "> 
                            Hey, I am Utkarsh Pandey - a B.Tech Pre-Final Year Student,
                        with a passion for coding and problem-solving. I am an aspiring software engineer, eager to learn and grow in the tech industry. 
                        I am dedicated to honing my skills and contributing to innovative projects. 
                        </p>
                    </div>
                    {/* cta section */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <Button size="lg">Contact Me <ArrowRight className="w-5 h-5"/>
                        </Button>
                        <AnimatedBorderButton>
                        <Download className="w-5 h-5 "/>
                        Download Resume
                        </AnimatedBorderButton>
                    </div>
                    {/* Social Links */}
                   
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground ">Follow me: </span>
                        {[
                            {icon: FaGithub , href: 'https://github.com/UtkarshPandey13tech'},
                            {icon: FaLinkedin ,href: 'https://www.linkedin.com/in/utkarsh-pandey-865a04292'},
                            {icon: SiLeetcode ,href: 'https://leetcode.com/u/Utkarsh_1307/'}
                            ].map((social , idx) =>{

                                const Icon = social.icon
                                return (    

                            <a 
                            href={social.href}
                            key={idx}
                            target="_blank"
                            className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                               <Icon className="w-5 h-5 "/>
                            </a>
                                );
                           } )}
        
                    </div>
                </div>
                      
                {/* right colun - photo */}
                <div className="relative animate-fade-in animation-delay-300">
                    {/* profile photo */}
                    <div className="relative max-w-md mx-auto">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"/>
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img src="/img5.jpeg" alt="Utkarsh Pandey" className="w-full aspect-auto object-cover rounded-2xl" />

                            {/* floating badge */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                    <span className="text-sm font-medium">Available for Work</span>
                                </div>
                            </div>
                            {/* stats badge */}
                            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                <div className="text-2xl font-bold text-primary">Fresher</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Skills Section */}
            <div className="mt-20 animate-fade-in animation-delay-600">
                <p className="text-sm text-muted-foreground mb-6 text-center">Technlogies I work With</p>
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee">
                        {[...skills,...skills].map((skill,idx)=>(
                            <div key={idx} className="flex-shrink-0 px-8 py-4 ">
                                <span className="text-xl fnt-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                                <div/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
         <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
} 