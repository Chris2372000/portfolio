import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#Hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" }
];

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Renamed for standard camelCase

  useEffect(() => {
    const handleScroll = () => {
      // FIX: You need to actually call the state setter here
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      // FIX: Added a space before ${ to prevent class name merging
      // FIX: Corrected "glasss-strong" (triple 's') to "glass-strong"
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3 shadow-md" : "bg-transparent py-5"
      } z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="text-xl font-bold tracking-tight hover:text-primary transition-colors">
          SC-009<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <a href="#contact">
        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in absolute top-full left-0 w-full border-b border-white/10">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4 bg-background/95 backdrop-blur-lg">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="text-lg text-muted-foreground hover:text-foreground py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)} // Close menu on click
              >
                {link.label}
              </a>
            ))}
            <a href="#contact">
              <Button onClick={() => setMobileMenuOpen(false)}>
                Contact Me
                </Button>
                </a>
          </div>
        </div>
      )}
    </header>
  );
};