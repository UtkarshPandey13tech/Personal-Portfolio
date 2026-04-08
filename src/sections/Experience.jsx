const experience = [
      {
        Period:"Feb 2025-Present",
        role:"AI Student Coordinator",
        Organisation:"BBD University, Lucknow",
        Description:"As an AI Student Coordinator at BBD University, I am responsible for awaring my colleagues about the latest Events of AI in Our institution. I also experience Industrial Visits and workshops to enhance my knowledge and skills in the field of AI.",
        Skills:["AI coordination, AI Tools, Communication"]
      },
    {
        Period:"Aug 2024 - Oct 2025",
        role:"Aaina Technical Team Member",
        Organisation:"BBD University, Lucknow",
        Description: "Aaina is the cultural club of BBD University, Lucknow. As a technical team member, I was responsible for managing the technical aspects of the event, including setting up and maintaining the sound and lighting systems, as well as coordinating with other team members to ensure the smooth execution of the event.",
        Skills:["Technical skills, teamwork, communication"]
    }

]

export const Experience = () => {
    return <section 
    id="Experience"
    className="py-32 relative overflow-hidden" > 
<div
className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>
<div className="container mx-auto px-6 relative z-10">
    {/* section header */}
    <div className="max-w-3xl mb-16">
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in"
        >
            Career Journey
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Experience that <span className="font-serif italic font-normal text-white">
            {" "}
            speaks Volumes..</span>
        </h2>
        <p className="text-muted-foreground animate-fade-in animation-delay-200">
            My career journey is a testament to my dedication, adaptability, and passion for learning. From my early days as an AI Coordinator at BBD University, where I honed my skills in AI coordination and communication, to my role as a technical team member for Aaina, the cultural club of BBD University, I have consistently sought opportunities to grow and contribute meaningfully. Each experience has equipped me with valuable skills and insights, shaping me into a versatile professional ready to take on new challenges in the ever-evolving tech landscape.
        </p>
    </div>
{/* timeline */}
<div className="relative ">
    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)] "/>
    {/* experience items */}
    <div className="space-y-12">
        {experience.map((exp ,idx) => (
            <div key={idx} className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
            style={{animationDelay: `${(idx + 1) * 150}ms`}}
            >
                
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>)}
                </div>

                {/* Experience Content */}
                <div className={ `pl-8 md:pl-0 ${idx % 2=== 0 ? "md:pr-16 md:text-right ": "md:col-start-2 md:pl-16"}`}>
                    <div className={`glass p-6 rounded-2xl border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                        <span className="text-sm text-primary font-medium">{exp.Period}</span>
                        <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                        <p className="text-muted-foreground">{exp.Organisation}</p>
                        <p className="text-sm text-muted-foreground mt-4">{exp.Description}</p>
                        <div className={`flex flex-wrap gap-2 mt-4 ${idx %2 === 0 ? "md:justify-end" : ""}`}>{exp.Skills.map((tech ,techIdx)=>(
                            <span key={techIdx} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">{tech}</span>
                        )
                        )}</div>
                    </div>
                </div>
            </div>
        ))}
    </div>

</div>
</div>
    </section>
}