import {Code2, Lightbulb, Rocket, Users} from "lucide-react";  
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const highlights =[
    {
        icon: Code2,
        title: "Clean Code",
        description:
        "Writing maintainable, scalable code that stands the test of time.",
    },
    {
        icon: Rocket,
        title: "Performance",
        description:
        "Optimizing for speed and delivering lighting-fast user experience.s",
    },
    {
        icon: Users,
        title: "Collaboration",
        description:
        "Working closely with teams to bring ideas to life.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
        "Staying ahead with the latest technologies and best pratices",
    },
];


export const About = () => {
    return (
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/*Left Column */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                        About Me
                        </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                    Crafting the future, <span className="font-serif italic font-normaal text-white">
                        {""}
                        piece by piece.
                        </span>
                </h2>

                <div className="space-y-4 text-muted-foreground animate-fade-in animaion-delay-200">
                    <p>
                        I am a passionate software engineer with one year of experience building web applications and solving real-world problems through code. 
                        Every project has been a learning opportunity, pushing me to expand my technical skills while developing a deeper understanding of 
                        software architecture and best practices. 
                        I'm eager to take on new challenges and continue growing as a developer. 
                    </p>
                    <p>
                        I specialize in React, Next.js and TypeScript, building
                        everything from sleek landing pages to complex enterprise
                        applications. My approach combines technical excellence with a 
                        keen eye for design and user experience.
                    </p>
                    <p>
                        When I'm not coding, you'll find me exploring new technologies to 
                        contributing to open-source projects, or sharing knowledge with the developer community.
                    </p>
                </div>
                <div className="glass rounded-2xl p-6 glow-border animate-delay-300">
                    <p className="text-lg font-medium italic text-foreground">
                        "My mission is to deliver digital solutions that are beautifully functional—crafting products 
                        that resonate with users and remain elegant for developers to work with".
                    </p>
                </div>
            </div>
            {/* Right Column - Hilights */}
            <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item,idx) => (
                    <div key={idx} className="glass p-6 rounded-2xl animate-fade-in"
                    style={{animationDelay: `${(idx + 1) * 100}ms`}}
                    >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-priamry/20">
                            <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">
                                {item.description}
                                </p>
                            </div>
                ))}
            </div>
            </div>
        </div>
    </section>
    );
};