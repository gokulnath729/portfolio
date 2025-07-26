"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      institution: "JKKN College of Engineering and Technology",
      degree: "Bachelors in Computer Science and Engineering",
      duration: "2021 – 2024",
      location: "Tamil Nadu, India",
    },
    {
      institution: "Thiagarajar Polytechnic College",
      degree: "Diploma in Computer Science and Engineering",
      duration: "2013 – 2016",
      location: "Tamil Nadu, India",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="education" className="py-20 relative">
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
            <span className="text-text-primary">Educational</span>{" "}
            <span className="gradient-text">Background</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-12"
          ></motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Terminal Header */}
          <motion.div
            variants={itemVariants}
            className="glass-card rounded-t-xl p-4 border-b border-dark-border"
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-text-secondary font-mono text-sm">
                education_terminal
              </span>
            </div>
          </motion.div>

          {/* Terminal Content */}
          <motion.div
            variants={itemVariants}
            className="glass-card rounded-b-xl p-8 font-mono"
          >
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: index * 0.3 }}
                  className="border-l-2 border-neon-blue pl-6"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-neon-blue">
                      {edu.institution}
                    </h3>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: index * 0.3 + 0.5 }}
                      className="text-neon-green text-sm"
                    >
                      ✓
                    </motion.div>
                  </div>

                  <p className="text-text-primary font-semibold mb-3">
                    {edu.degree}
                  </p>

                  <div className="flex items-center space-x-6 text-text-secondary text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Terminal Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1 }}
              className="mt-8 pt-6 border-t border-dark-border"
            >
              <div className="flex items-center space-x-2 text-text-secondary">
                <span className="text-neon-green">$</span>
                <span className="animate-pulse">_</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 text-center"
        >
          <div className="glass-card rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <GraduationCap size={32} className="text-neon-blue mr-3" />
              <h3 className="text-xl font-futura font-bold text-text-primary">
                Continuous Learning
              </h3>
            </div>
            <p className="text-text-secondary">
              Committed to staying current with emerging technologies and
              industry best practices through continuous education and hands-on
              experience.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-28 h-28 border border-neon-green/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-20 h-20 border border-neon-blue/10 rounded-full"
      />
    </section>
  );
};

export default Education;
