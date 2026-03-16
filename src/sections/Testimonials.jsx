import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    role: "Startup Founder",
    company: "TechStart",
    message:
      "Christian delivered an amazing website for our startup. His attention to detail and modern UI skills are exceptional.",
  },
  {
    name: "Sarah Williams",
    role: "Product Manager",
    company: "InnovateX",
    message:
      "Working with Christian was a great experience. He built a clean, fast, and scalable interface for our product.",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    company: "DevHub",
    message:
      "Christian is highly skilled in React and frontend architecture. I highly recommend him for any modern web project.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-highlight/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary text-sm font-medium tracking-widest">
            TESTIMONIALS
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            What people say
          </h2>

          <p className="text-muted-foreground mt-4">
            Feedback from clients and collaborators I've worked with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass p-8 rounded-xl animate-fade-in"
            >

              <Quote className="text-primary mb-4" size={28} />

              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.message}"
              </p>

              <div className="flex items-center gap-4">

                {/* Avatar */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 text-primary font-bold">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <p className="font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}