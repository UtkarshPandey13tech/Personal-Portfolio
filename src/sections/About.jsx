import { Code2, Users, Rocket, Activity } from "lucide-react";


const highlihts= [
    
    {
        icon: Code2,
        title:"Clean Code",
        Description:"I write clean, maintainable code following best practices and design patterns to ensure scalability and readability."
    },
    {
        icon: Users,
        title:"Team Player",
        Description:"I thrive in collaborative environments, valuing open communication and knowledge sharing to achieve common goals."
    },
    {
        icon:Rocket,
        title:"Fast Learner",
        Description:"I quickly grasp new concepts and technologies, allowing me to adapt and contribute effectively in dynamic environments."
    },
    {
        icon: Activity,
        title:"Problem Solver",
        Description:"I enjoy tackling complex challenges and finding innovative solutions to drive project success."
    },
];

export default function About() {
    return <section  id="About" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
      <div className="grid  lg:grid-cols-2 gap-16 items-center ">
   {/* left column  */}
     <div className="space-y-8 ">
        <div className="animate-fade-in">
        <span className="text-white text-2xl font-lg tracking-wider uppercase">About Me</span>
     </div>
     <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
        Building  the Future,
        <span className="font-serif italic font-normal text-white"> 
            {" "}
            one component at a time.
        </span>
     </h2>

     <div className="space-y-4  text-muted-foreground animate-fade-in animation-delay-200">
        <p className="text-lg text-muted-foreground animate-fade-in animation-delay-200">
            I am a passionate software engineer with a strong foundation in computer science and a keen interest in creating innovative solutions. With a blend of technical skills and creative thinking, I strive to build impactful applications that solve real-world problems.
        </p>
        <p className="text-lg text-muted-foreground animate-fade-in animation-delay-200">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, Currently I am Learning full-stack development and AI/ML.
        </p>
        <p className="text-lg text-muted-foreground animate-fade-in animation-delay-200">
            I have also presented my Research Paper at -  All-India Conference on Advanced Civil Engineering Practices for Sustainable Infrastructure Development.
        </p>
     </div>
     <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
        <p className="text-lg font-medium italic text-foreground">"My mission is to create AI Saas solutions that empower businesses and improve lives."</p>
     </div>
      </div>
      {/* right column */}
      <div className="grid sm:grid-cols-1 gap-8">
        {highlihts.map((item , idx) => (
            <div key={idx} className="glass p-5 rounded-2xl animate-fade-in" 
            style={{animationDelay: `${(idx+1)*100}ms`}}>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20"><item.icon className="w-6 h-6 text-primary "/></div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.Description}</p>
            </div>
        ))}
      </div>
      </div>
      </div>
    </section>
}
