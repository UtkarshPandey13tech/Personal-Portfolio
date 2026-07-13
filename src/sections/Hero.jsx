import { Button } from "@/components/Button"
import { ArrowRight, Download, ChevronDown } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"

const skills = [
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
    "MySQL",
    "RESTful APIs",
    "Vercel",
    "Vibe Coding",
    "AI Tools",
]

const skillsRow1 = skills.filter((_, i) => i % 2 === 0)
const skillsRow2 = skills.filter((_, i) => i % 2 === 1)

const SkillMarqueeRow = ({ items, reverse = false }) => (
    <div
        className={`flex w-max animate-marquee hover:[animation-play-state:paused] ${reverse ? "animate-marquee-reverse" : ""
            }`}
    >
        {[...items, ...items].map((skill, idx) => (
            <div key={`${skill}-${idx}`} className="flex-shrink-0 px-2">
                <span className="inline-flex items-center px-5 py-2.5 rounded-full glass text-sm font-medium text-foreground/80 hover:text-primary border border-transparent hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_20px_color-mix(in_srgb,var(--color-primary)_25%,transparent)] whitespace-nowrap">
                    {skill}
                </span>
            </div>
        ))}
    </div>
)

export const Hero = () => {
    return <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* background */}
        <div className="absolute inset-0">
            <img src="/hero-bg4.jpg"
                alt="Hero Background"
                className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>
        {/* green dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(50)].map((_, i) => (
                <div key={i} className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                    style={{
                        backgroundColor: "#20B2A6",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `slow-drift ${20 + Math.random() * 10}s ease-in-out infinite`,
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
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
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
                        <Button href="#Contact" size="lg" >Contact Me <ArrowRight className="w-5 h-5" />
                        </Button>
                        <AnimatedBorderButton
                            href="/Utkarsh_Pandey_Resume_1.pdf" download="Utkarsh_Resume.pdf">
                            <Download className="w-5 h-5 " />
                            Download Resume
                        </AnimatedBorderButton>
                    </div>
                    {/* Social Links */}

                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground ">Follow me: </span>
                        {[
                            { icon: FaGithub, href: 'https://github.com/UtkarshPandey13tech' },
                            { icon: FaLinkedin, href: 'https://www.linkedin.com/in/utkarsh-pandey-865a04292' },
                            { icon: SiLeetcode, href: 'https://leetcode.com/u/Utkarsh_1307/' }
                        ].map((social, idx) => {

                            const Icon = social.icon
                            return (

                                <a
                                    href={social.href}
                                    key={idx}
                                    target="_blank"
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                    <Icon className="w-5 h-5 " />
                                </a>
                            );
                        })}

                    </div>
                </div>

                {/* right colun - photo */}
                <div className="relative animate-fade-in animation-delay-300">
                    {/* profile photo */}
                    <div className="relative max-w-md mx-auto">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
                        <div className="relative glass rounded-full p-2 glow-border">
                            <img src="/profile-photo.jpeg" alt="Utkarsh Pandey" className="w-full aspect-auto object-cover rounded-full" />

                            {/* floating badge */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
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
            <div className="mt-20 animate-fade-in animation-delay-600 space-y-6">
                <p className="text-center">
                    <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
                        Tech stack
                    </span>
                    <span className="block mt-2 text-2xl md:text-3xl font-bold text-foreground">
                        Technologies I{" "}
                        <span className="text-primary glow-text">work with</span>
                    </span>
                </p>
                <div className="relative overflow-hidden py-2 space-y-3">
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 z-10 bg-gradient-to-r from-background to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 z-10 bg-gradient-to-l from-background to-transparent" />

                    <SkillMarqueeRow items={skillsRow1} />
                    <SkillMarqueeRow items={skillsRow2} reverse />
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