import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/",
  },
  {
    icon: Mail,
    href: "mailto:sianichristian237@gmail.com",
  },
];

const navLinks = [
  { label: "Hero", href: "#Hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">

      <div className="container mx-auto px-6 py-12 max-w-6xl">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">Christian Siani</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Software Engineer • Web Developer
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-10 pt-6 border-t border-border text-sm text-muted-foreground">

          <p>
            © {new Date().getFullYear()} Christian Siani. All rights reserved.
          </p>

          <a
            href="#Hero"
            className="flex items-center gap-2 hover:text-primary transition mt-4 md:mt-0"
          >
            Back to top
            <ArrowUp size={16} />
          </a>

        </div>
      </div>

    </footer>
  );
}