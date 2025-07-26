"use client";

import { motion } from "framer-motion";
import { ChevronDown, Code, Zap, Cpu } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      role="banner"
      aria-label="Gokulnath R - Senior Full-Stack Software Engineer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-futura font-bold mb-4"
            style={{ paddingTop: "100px" }}
          >
            <span className="text-text-primary">GOKULNATH</span>
            <br />
            <span className="gradient-text">R</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-futura text-neon-blue mb-6"
          >
            Senior Software Engineer
          </motion.h2>
        </motion.div>

        {/* Animated Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mb-12"
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-xl md:text-2xl text-text-secondary font-mono"
          >
            Crafting the Future of Digital Experiences
          </motion.p>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            className="text-lg md:text-xl text-neon-green font-mono"
          >
            6+ Years of Full-Stack Innovation
          </motion.p>
        </motion.div>

        {/* Enhanced AEO Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 backdrop-blur-sm border border-neon-blue/30 rounded-xl p-6 md:p-8 shadow-2xl shadow-neon-blue/20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.8 }}
              className="text-center mb-6"
            >
              <h3 className="text-2xl md:text-3xl font-futura font-bold text-neon-blue mb-2">
                Core Competencies
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.4, duration: 0.6 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-neon-blue/20 to-transparent p-4 rounded-lg border border-neon-blue/40 hover:border-neon-blue/60 transition-all duration-300">
                  <h4 className="text-lg font-futura font-bold text-neon-blue mb-3 flex items-center justify-center">
                    {/* <span className="w-2 h-2 bg-neon-blue rounded-full mr-2"></span> */}
                    Expertise
                  </h4>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                    <span className="font-semibold text-neon-green">React JS</span>, <span className="font-semibold text-neon-green">Node JS</span>, <span className="font-semibold text-neon-green">Next.js</span>, 
                    <span className="font-semibold text-neon-green">JavaScript</span>, Full-Stack Development, Web Applications, UI/UX Design
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.6, duration: 0.6 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-neon-purple/20 to-transparent p-4 rounded-lg border border-neon-purple/40 hover:border-neon-purple/60 transition-all duration-300">
                  <h4 className="text-lg font-futura font-bold text-neon-purple mb-3 flex items-center justify-center">
                    {/* <span className="w-2 h-2 bg-neon-purple rounded-full mr-2"></span> */}
                    Specializations
                  </h4>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                    <span className="font-semibold text-neon-green">Scalable Web Applications</span>, <span className="font-semibold text-neon-green">API Development</span>, 
                    <span className="font-semibold text-neon-green">Database Design</span>, Performance Optimization, Agile Development
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.8, duration: 0.6 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-neon-green/20 to-transparent p-4 rounded-lg border border-neon-green/40 hover:border-neon-green/60 transition-all duration-300">
                    <h4 className="text-lg font-futura font-bold text-neon-green mb-3 flex items-center justify-center">
                    {/* <span className="w-2 h-2 bg-neon-green rounded-full mr-2"></span> */}
                    Services
                  </h4>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                    <span className="font-semibold text-neon-green">Custom Web Development</span>, <span className="font-semibold text-neon-green">E-commerce Solutions</span>, 
                    <span className="font-semibold text-neon-green">SaaS Applications</span>, Enterprise Software, Startup Development
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Tech Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex justify-center space-x-8 mb-12"
          role="group"
          aria-label="Technology expertise icons"
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.3 }}
            className="text-neon-blue"
            title="React JS Development"
          >
            <Code size={40} />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.3 }}
            className="text-neon-purple"
            title="Node JS Backend Development"
          >
            <Zap size={40} />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.3 }}
            className="text-neon-green"
            title="Full-Stack Development"
          >
            <Cpu size={40} />
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("experience")}
            className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-futura font-bold rounded-lg neon-border hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300"
            aria-label="View portfolio experience and projects"
          >
            Explore Portfolio
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => scrollToSection("summary")}
            className="cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label="Scroll to portfolio summary"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                scrollToSection("summary");
              }
            }}
          >
            <ChevronDown size={24} className="text-neon-blue" />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-32 h-32 border border-neon-blue/20 rounded-full"
        aria-hidden="true"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-24 h-24 border border-neon-purple/20 rounded-full"
        aria-hidden="true"
      />
    </section>
  );
};

export default Hero;
