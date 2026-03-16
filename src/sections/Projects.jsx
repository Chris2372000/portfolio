import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
    {
        title: "Fintech Dashboard",
        description:
        "A comprehensive financial analytics platform with real-time data visualization",
        image: "/projects/compo.png", 
        tags: ["React", "Typescript", "NodeJS"],
        link:"#",
        github:"#",
    },
    {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with product catalog, shopping cart, secure checkout, and order management. Built with modern web technologies for optimal performance.",
    image: "/projects/ecom.png", 
    tags: ["React", "Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    link: "#", 
    github: "#"
  },
  {
    title: "Social Media App",
    description: "A dynamic social networking platform featuring real-time messaging, post creation, user profiles, and interactive feeds. Designed for seamless user engagement and connectivity.",
    image: "/projects/social.png",
    tags: ["React", "TypeScript", "Firebase", "Socket.io", "CSS Modules"],
    link: "#",
    github: "#"
  },
  {
    title: "Task Management System",
    description: "An intuitive productivity tool for organizing tasks, setting priorities, and tracking progress. Features include drag-and-drop functionality, deadlines, and project categorization.",
    image: "/projects/task.png",
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "React DnD"],
    link: "#",
    github: "#"
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather application providing real-time forecasts, hourly predictions, and location-based weather data. Clean interface with dynamic weather visualizations.",
    image: "/projects/weather.png",
    tags: ["React", "TypeScript", "Weather API", "Chart.js", "CSS"],
    link: "#",
    github: "#"
  },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
            <div className="container mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Featured Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that <span className="font-serif italic font-normal text-white">
                            make an impact.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A selection of my recent work, from complex web applications to innovative
                        tools that solve real-world problems.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div 
                        key={idx} 
                        className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                        style={{animationDelay: `${(idx + 1) * 100}ms`}}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                /> 
                            </div>
                            
                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3 text-secondary-foreground">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    {project.description}
                                </p>
                                
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span 
                                        key={tagIdx}
                                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                {/* Links */}
                                <div className="flex gap-4">
                                    <a 
                                    href={project.link}
                                    className="text-sm text-primary hover:underline"
                                    >
                                        View Project →
                                    </a>
                                    <a 
                                    href={project.github}
                                    className="text-sm text-muted-foreground hover:text-primary hover:underline"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                {/*View All CTA */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton>
                        View All Projects
                        <ArrowUpRight className="w-5 h-5"/>
                    </AnimatedBorderButton>
                </div>
            </div>
        </section>
    );
};