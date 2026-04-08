import { ArrowUpRight, Github } from "lucide-react"
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton"
const projects=[
    {
        title: 'Weather App',
        description: 'A weather forecasting application that provides real-time weather updates and forecasts for any location worldwide.',
        techStack: ['TypeScript', ' Open-Meteo-Weather API', 'CSS'],
        image: '/project-1.png',
        link: "https://weather-predictor-smoky.vercel.app",
        github:"https://github.com/UtkarshPandey13tech/weather-predictor"
    },
    {
        title:"Ticket Booking System",
        description:"A console-based for railway ticket booking system that allows users to book, cancel, and view their tickets.",
        techStack:['Java','OOPS Concepts'],
        image:"/project-2.png",
        github:"https://github.com/UtkarshPandey13tech/Ticket-Management-System"
    }
]

export const Project = () => {
    return ( <section id="Project" className="py-32 relative overflow-hidden">
        {/* bg glows */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
            {/* section header */}
            <div className="text-center mx-automax-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                    Feature Work
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Projects that
                    <span className="font-serif italic font-normal text-white"> make an impact.</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    Here are some of the projects I've worked on, showcasing my skills and passion for creating 
                    innovative solutions. Each project reflects my commitment to building impactful applications that solve real-world problems.
                </p>
                </div>
                {/* Project Section */}
                 <div className="grid md:grid-cols-4 gap-8 ">
                    {projects.map((project , idx) => (
                        <div key={idx}
                         className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                          style={{animationDelay: `${(idx+1)*100}ms`}}
                          >
                            
                            {/* image of project */}
                            <div className="relative overflow-hidden aspect-video">
                             <img src={project.image} 
                             alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t
                             from-card via-card/50 to-transparent opacity-60"
                             />
                             {/* overlay link  */}
                             <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={project.link} target="_blank" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all" >
                                    <ArrowUpRight className="w-5 h-5"/>
                                </a>
                                <a href={project.github} target="_blank" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                    <Github className="w-5 h-5"/>
                                </a>
                             </div>
                            </div>

                            {/*  content  */}
                            <div className="p-6 space-y-4 ">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                    <ArrowUpRight className="w-5 h-5
                                     text-muted-foreground group-hover:text-primary group-hover:translate-x-1 
                                     group-hover:-translate-y-1 transition-all" />
                                </div>
                                <p className="text-muted-foreground">{project.description}</p>
                                <div className="flex flex-wrap gap-2">{project.techStack.map((tech , techIdx) => (
                                    <span
                                     key={techIdx}
                                     className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tech}</span>
                                ))}
                                </div>
                            </div>
                        </div> 
                    ))}
                 </div>
        </div>
    </section>
    )
} 