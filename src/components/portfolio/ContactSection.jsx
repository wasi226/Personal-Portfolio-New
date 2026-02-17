import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { FaInstagram } from "react-icons/fa";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_d1brc3d",
        "template_svs4nyo", 
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "0nO8capgIlr5E2Cmt"
      );

      alert("Message sent successfully 🚀");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message ❌");
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "haiderwasi2263@gmail.com",
      href: "mailto:haiderwasi2263@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9798674832",
      href: "tel:+919798674832",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bhopal, Madhya Pradesh, India",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/wasi226", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/wasi226/",
      label: "LinkedIn",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/___haider___dotaxe22/",
      label: "Instagram",
    },
  ];

  return (
    <div id="contact" className="w-full py-20">
      <div className="container mx-auto px-6 py-10 relative z-20 w-full">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            Get In<span className="text-red-600"> Touch</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-[2px] bg-red-600 mx-auto mb-8"
          ></motion.div>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work
            together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with
                amazing people. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center border border-red-500/20">
                    <contact.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{contact.label}</p>
                    <a
                      href={contact.href}
                      className="text-white hover:text-red-300 transition-colors font-medium"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-red-600/20 transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <Card className="bg-white/5 backdrop-blur-sm border-red-600/10">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    label="Your Name"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <InputField
                    label="Email Address"
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <InputField
                  label="Subject"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />

                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-[#0e0e11]/80 border-red-600/20 text-white focus:border-red-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600/20 border border-red-500/60 text-red-100 font-medium py-3 transition-all duration-300 hover:bg-red-500/30 hover:scale-105"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

/* Small Reusable Input */
function InputField({ label, id, type = "text", value, onChange }) {
  return (
    <div>
      <label className="block text-sm text-gray-300 mb-2">{label}</label>
      <Input
        required
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="bg-[#0e0e11]/80 border-red-600/20 text-white focus:border-red-500"
      />
    </div>
  );
}



// service id:- service_d1brc3d
// template id:- template_svs4nyo
// public key :-0nO8capgIlr5E2Cmt