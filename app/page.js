"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import ParticleBackground from "./components/ParticleBackground";
import SEO from "./components/SEO";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <>
        <SEO />
        <div className="min-h-screen bg-dark-bg flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <div className="text-6xl font-futura text-neon-blue mb-4">Gokulnath R</div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-neon-green text-lg"
            >
              Loading...
            </motion.div>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title="Gokulnath R - Senior Full-Stack Software Engineer | React JS, Node JS Expert"
        description="Senior Software Engineer with 6+ years of full-stack development expertise in React JS, Node JS, Next.js, and modern web technologies. Specializing in scalable web applications, UI/UX design, and full-stack solutions."
        keywords="Senior Software Engineer, Full-Stack Developer, React JS Developer, Node JS Developer, Next.js Developer, JavaScript Developer, Web Development, UI/UX Design, API Development, Database Design, Performance Optimization, Agile Development, Technical Leadership, Team Management, E-commerce Development, SaaS Development, Enterprise Software, Startup Development"
        tags={[
          "React JS",
          "Node JS", 
          "Next.js",
          "JavaScript",
          "Full-Stack Development",
          "Web Development",
          "UI/UX Design",
          "API Development",
          "Database Design",
          "Performance Optimization",
          "Agile Development",
          "Technical Leadership",
          "Team Management",
          "E-commerce Development",
          "SaaS Development",
          "Enterprise Software",
          "Startup Development"
        ]}
      />
      <main className="min-h-screen bg-dark-bg particle-bg">
        <ParticleBackground />
        <Navigation />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Hero />
          <Summary />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </motion.div>
      </main>
    </>
  );
}
