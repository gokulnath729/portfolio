"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MessageCircle,
  Send,
} from "lucide-react";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Gokulnath729@gmail.com",
      link: "mailto:Gokulnath729@gmail.com",
      color: "neon-blue",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6381862993",
      link: "tel:+916381862993",
      color: "neon-green",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "gokulnath-r-15a16a167",
      link: "https://www.linkedin.com/in/gokulnath-r-15a16a167/",
      color: "neon-purple",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-futura font-bold mb-4"
          >
            <span className="text-text-primary">Let's</span>{" "}
            <span className="gradient-text">Connect</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-xl text-text-secondary max-w-2xl mx-auto"
          >
            Ready to build the future together? Let's discuss how we can create
            innovative solutions.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-futura font-bold text-text-primary mb-6">
              Get In Touch
            </h3>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.link}
                  target={contact.label === "LinkedIn" ? "_blank" : undefined}
                  rel={
                    contact.label === "LinkedIn"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="glass-card rounded-xl p-6 flex items-center space-x-4 cursor-pointer group"
                >
                  <div
                    className={`text-${contact.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <contact.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-text-secondary text-sm">
                      {contact.label}
                    </p>
                    <p className="text-text-primary font-medium">
                      {contact.value}
                    </p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="text-neon-blue"
                  >
                    <Send size={20} />
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-futura font-bold text-text-primary mb-6">
              Send Message
            </h3>

            <div className="glass-card rounded-xl p-6 space-y-4">
              <div>
                <label className="block text-text-secondary text-sm mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-text-primary focus:border-neon-blue focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-text-secondary text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-text-primary focus:border-neon-blue focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-text-secondary text-sm mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-text-primary focus:border-neon-blue focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-futura font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Send Message</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-futura font-bold text-text-primary mb-4">
              Let's Build the Future Together
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              With 6+ years of full-stack expertise and a passion for
              innovation, I'm ready to help bring your ideas to life. Whether
              it's a new project, collaboration opportunity, or just a tech
              discussion, I'd love to hear from you.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-2 text-neon-blue font-semibold cursor-pointer"
            >
              <span>Ready to start?</span>
              <Send size={20} />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-36 h-36 border border-neon-purple/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-24 h-24 border border-neon-green/10 rounded-full"
      />
    </section>
  );
};

export default Contact;
