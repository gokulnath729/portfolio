"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { User, Target, Award } from "lucide-react";

const Summary = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const summaryText =
    "Experienced Senior Software Engineer with 6+ years of expertise in Full-Stack Development, specializing in ReactJS, Redux, NodeJS, and JavaScript. Proficient in multiple UI libraries including Tailwind CSS and Material UI. Proven ability to lead UI teams, collaborate with cross-functional teams to gather requirements, formulate test plans, and optimize testing processes. Demonstrated managerial abilities in overseeing QA teams and ensuring 100% successful completion of deliverables. Skilled in product and service-based projects, with experience in Prompt Engineering.";

  const keywords = [
    "ReactJS",
    "Redux",
    "NodeJS",
    "JavaScript",
    "Tailwind CSS",
    "Material UI",
    "Full-Stack Development",
    "Prompt Engineering",
    "Prompt",
    "Engineering",
    "Python",
    "lead",
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="summary" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-4xl md:text-5xl font-futura font-bold mb-4">
              <span className="text-text-primary">Professional</span>{" "}
              <span className="gradient-text">Summary</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <div className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-lg md:text-xl leading-relaxed text-text-secondary"
              >
                {summaryText.split(" ").map((word, index) => {
                  const isKeyword = keywords.some((keyword) =>
                    word.toLowerCase().includes(keyword.toLowerCase())
                  );
                  return (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.02 }}
                      className={
                        isKeyword ? "text-neon-blue font-semibold" : ""
                      }
                    >
                      {word}{" "}
                    </motion.span>
                  );
                })}
              </motion.p>
            </div>
          </motion.div>

          {/* Key Highlights */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card rounded-xl p-6 text-center"
            >
              <div className="text-neon-blue mb-4">
                <User size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-futura font-bold mb-2 text-text-primary">
                Leadership
              </h3>
              <p className="text-text-secondary">
                Proven ability to lead UI teams and oversee QA processes with
                100% deliverable success rate
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card rounded-xl p-6 text-center"
            >
              <div className="text-neon-purple mb-4">
                <Target size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-futura font-bold mb-2 text-text-primary">
                Full-Stack Expertise
              </h3>
              <p className="text-text-secondary">
                6+ years specializing in React JS, Node JS, and modern web
                technologies
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card rounded-xl p-6 text-center"
            >
              <div className="text-neon-green mb-4">
                <Award size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-futura font-bold mb-2 text-text-primary">
                Innovation
              </h3>
              <p className="text-text-secondary">
                Skilled in Prompt Engineering and cutting-edge development
                methodologies
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 w-20 h-20 border border-neon-blue/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 right-10 w-16 h-16 border border-neon-purple/10 rounded-full"
      />
    </section>
  );
};

export default Summary;
