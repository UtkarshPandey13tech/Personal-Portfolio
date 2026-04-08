import { ArrowUpRight } from "lucide-react"
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton"
const certifications=[
    {
        title: 'AI Tools Workshop',
        description: 'In this workshop , i got to know about AI Tools that can make our work faster',
        image: '/certi1.jpg',
        link: "https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd0997696986",
    },
    {
        title:"AI Workplace Proficiency Certification",
        description:"Learn how to use the most important AI tools to get tangible results at work and boost your productivity",
        image:"/certi3.jpg",
        link: "https://education.superhuman.ai/certificates/kmpt8cdys7"
    },
    {
        title:"Research Paper Presentation",
        description:"Presented my research paper at All India Conference on Advanced Civil Engineering Practices for Sustainable Infrastructure Development(ACED-2025)",
        image:"/certi2.jpeg",
    },
]

export const Certifications = () => {
    return ( <section id="Certifications" className="py-32 relative overflow-hidden">
        {/* bg glows */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
            {/* section header */}
            <div className="text-center mx-automax-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">

                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                   Certifications and
                    <span className="font-serif italic font-normal text-white"> Achievements</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    Here are some of the Achievements and Certifications that I got during B.Tech 
                </p>
                </div>
                {/* Project Section */}
                 <div className="grid md:grid-cols-4 gap-8 ">
                    {certifications.map((certificate , idx) => (
                        <div key={idx}
                         className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                          style={{animationDelay: `${(idx+1)*100}ms`}}
                          >
                            
                            {/* image of project */}
                            <div className="relative overflow-hidden aspect-video">
                             <img src={certificate.image} 
                             alt={certificate.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t
                             from-card via-card/50 to-transparent opacity-60"
                             />
                             {/* overlay link  */}
                             <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={certificate.link} target="_blank" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all" >
                                    <ArrowUpRight className="w-5 h-5"/>
                                </a>
                             </div>
                            </div>

                            {/*  content  */}
                            <div className="p-6 space-y-4 ">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{certificate.title}</h3>
                                    
                                </div>
                                <p className="text-muted-foreground">{certificate.description}</p>
                            </div>
                        </div> 
                    ))}
                 </div>
        </div>
    </section>
    )
} 