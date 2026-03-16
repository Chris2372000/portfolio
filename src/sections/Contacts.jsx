import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

/* ---------------- CONTACT DATA ---------------- */

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sianichristian237@gmail.com",
    href: "mailto:sianichristian237@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+237 697 671 517",
    href: "tel:+237697671517",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Yaoundé, Cameroon",
    href: "#",
  },
];

/* ---------------- SMALL COMPONENTS ---------------- */

function ContactCard({ icon: Icon, label, value, href }) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 p-5 rounded-xl border border-border hover:border-primary hover:bg-secondary transition-all"
    >
      <div className="p-3 rounded-lg bg-primary/10 text-primary">
        <Icon size={20} />
      </div>

      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </a>
  );
}

function StatusMessage({ type, message }) {
  if (!type) return null;

  const success = type === "success";

  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-xl ${
        success
          ? "bg-green-500/10 border border-green-500/20 text-green-500"
          : "bg-red-500/10 border border-red-500/20 text-red-500"
      }`}
    >
      {success ? (
        <CheckCircle className="w-5 h-5" />
      ) : (
        <AlertCircle className="w-5 h-5" />
      )}

      <p className="text-sm">{message}</p>
    </div>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        formData,
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (err) {
      console.error("EmailJS error:", err);

      setSubmitStatus({
        type: "error",
        message:
          err?.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* ---------- HEADER ---------- */}

        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary tracking-widest">
            CONTACT
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Let's Work Together
          </h2>

          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always open to discussing new ideas and opportunities.
          </p>
        </div>

        {/* ---------- CONTENT GRID ---------- */}

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* CONTACT INFO */}

          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <ContactCard key={index} {...item} />
            ))}

            {/* Availability Card */}

            <div className="glass rounded-3xl p-8 border border-primary/30 mt-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>

              <p className="text-muted-foreground text-sm">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}

          <form
            className="space-y-6 p-8 border border-border rounded-xl bg-card"
            onSubmit={handleSubmit}
          >

            <div className="grid md:grid-cols-2 gap-6">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-border bg-background p-3 rounded-lg focus:outline-none focus:border-primary"
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-border bg-background p-3 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>

            <input
              name="subject"
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-border bg-background p-3 rounded-lg focus:outline-none focus:border-primary"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-border bg-background p-3 rounded-lg focus:outline-none focus:border-primary"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              {isLoading ? "Sending..." : "Send Message"}
              {!isLoading && <Send className="w-5 h-5" />}
            </button>

            <StatusMessage
              type={submitStatus.type}
              message={submitStatus.message}
            />

          </form>
        </div>
      </div>
    </section>
  );
}