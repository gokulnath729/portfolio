"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  Star,
  TrendingUp,
  Users,
  Code,
} from "lucide-react";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedJob, setExpandedJob] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);

  const experienceData = [
    {
      id: 1,
      company: "Mareana",
      position: "Senior Software Engineer",
      location: "Bangalore",
      duration: "June 2024 – Present",
      achievements: [
        "Optimized product quality by reducing Code Smells by 80% and enhancing performance by 40%",
        "Led development for critical Genealogy and Simulation Modules, overseeing team progress and deliverables",
        "Spearheaded the integration of the Yworks library into the Genealogy module, marking a significant product milestone",
        "Successfully delivered multiple service-side projects, consistently meeting deadlines",
        "Contributed extensively to various product and service-side modules, ensuring robust functionality",
        'Awarded "Rookie Rockstar" for rapid learning and successfully implementing Yworks Proof of Concept in the MI application',
        "Developed comprehensive test cases, achieving 90% code coverage to ensure software reliability",
      ],
      icon: TrendingUp,
      color: "neon-blue",
    },
    {
      id: 2,
      company: "Giglabz Private Limited",
      position: "Software Developer",
      location: "Remote",
      duration: "Nov 2021 – June 2024",
      achievements: [
        "Collaborated and coordinated in multiple projects, playing major roles in establishing project objectives and deliverables",
        "Developed 3 projects from scratch using React JS with Redux and Next JS, increasing checkout conversion rate by 15% through UI and backend optimization",
        "Implemented performance enhancements in a web application, resulting in a 20% reduction in page load times and improving overall user satisfaction",
        "Led a team in refactoring legacy code, achieving a 50% reduction in bugs reported by users and increasing code maintainability by 30%",
      ],
      projects: [
        {
          name: "The Good Platform",
          description:
            "Maintained day-to-day organizational activities, tracking programs and activities. Developed modules for Admin, Super Admin, Beneficiary, and custom roles with document validator flow.",
          tech: [
            "React Js",
            "Redux",
            "Yup",
            "Formik",
            "Tailwind CSS",
            "Material UI",
          ],
        },
        {
          name: "TGP - LMS",
          description:
            "Developed a Learning Management System with modules for Documents, Quiz, Assessments, and learning content.",
          tech: ["React Js", "Redux", "Tailwind CSS", "Ant Design"],
        },
        {
          name: "Azvasa - LMS",
          description:
            "Built a school-based Learning Management System for students to access notes, quizzes, assessments, marksheets, and attendance. Included separate modules for students, teachers, admin, and content-manager.",
          tech: ["React Js", "Redux", "Next Js", "Material UI"],
        },
        {
          name: "Nolte-FZE",
          description:
            "Implemented a CRM project to track all activities within a single application.",
          tech: ["React Js", "Redux", "AG-Grid", "Material UI"],
        },
        {
          name: "FINO Payments Bank",
          description:
            "Developed an internal banking system for managing user data, charges, and commissions.",
          tech: ["Next Js", "Tailwind Css", "Material UI"],
        },
      ],
      icon: Users,
      color: "neon-purple",
    },
    {
      id: 3,
      company: "Asista Software Solutions",
      position: "Software Engineer",
      location: "Remote",
      duration: "May 2019 – Nov 2021",
      achievements: [
        "Designed and developed a product from scratch using ReactJS with Redux, Postgresql, and NodeJs, achieving 90% coverage of completion and reducing 95% of manual efforts",
        "Implemented continuous integration and deployment pipelines, reducing the release cycle by 60% and enabling rapid delivery of features to production",
        "Integrated third-party APIs, improving system functionality and reducing development time by 40% compared to building from scratch",
        "Conducted performance tuning of algorithms, leading to a 20% improvement in processing speed and optimizing resource utilization by 20%",
      ],
      projects: [
        {
          name: "Asista Software",
          description:
            "Developed a product from scratch to receive and manage user tickets (queries) across all platforms, maintaining severity and status. Enabled support teams to reply and handle assigned tickets, functioning similar to Jira and Freshworks CRM.",
          tech: ["React Js", "Redux", "Next Js", "Tailwind CSS", "Material UI"],
        },
      ],
      icon: Code,
      color: "neon-green",
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 relative">
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
            <span className="text-text-primary">Professional</span>{" "}
            <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-12"
          ></motion.div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-green"></div>

          <div className="space-y-12">
            {experienceData.map((job, index) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-${job.color} border-2 border-dark-bg z-10`}
                ></div>

                {/* Job Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card rounded-xl p-6 cursor-pointer"
                    onClick={() =>
                      setExpandedJob(expandedJob === job.id ? null : job.id)
                    }
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`text-${job.color}`}>
                          <job.icon size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-futura font-bold text-text-primary">
                            {job.position}
                          </h3>
                          <p className="text-neon-blue font-semibold">
                            {job.company}
                          </p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedJob === job.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {expandedJob === job.id ? (
                          <ChevronUp size={20} />
                        ) : (
                          <ChevronDown size={20} />
                        )}
                      </motion.div>
                    </div>

                    <div className="flex items-center space-x-4 text-text-secondary text-sm mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{job.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                    </div>

                    <AnimatePresence>
                      {expandedJob === job.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-dark-border pt-4 mt-4">
                            <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center">
                              <Star
                                size={20}
                                className="text-neon-green mr-2"
                              />
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {job.achievements.map((achievement, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="text-text-secondary text-sm flex items-start"
                                >
                                  <span className="text-neon-blue mr-2">•</span>
                                  {achievement}
                                </motion.li>
                              ))}
                            </ul>

                            {job.projects && (
                              <div className="mt-6">
                                <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center">
                                  <Code
                                    size={20}
                                    className="text-neon-purple mr-2"
                                  />
                                  Projects
                                </h4>
                                <div className="space-y-3">
                                  {job.projects.map((project, idx) => (
                                    <motion.div
                                      key={idx}
                                      whileHover={{ scale: 1.02 }}
                                      className="glass-card rounded-lg p-4 cursor-pointer"
                                      onClick={() =>
                                        setExpandedProject(
                                          expandedProject === `${job.id}-${idx}`
                                            ? null
                                            : `${job.id}-${idx}`
                                        )
                                      }
                                    >
                                      <div className="flex items-center justify-between">
                                        <h5 className="font-semibold text-neon-blue">
                                          {project.name}
                                        </h5>
                                        <motion.div
                                          animate={{
                                            rotate:
                                              expandedProject ===
                                              `${job.id}-${idx}`
                                                ? 180
                                                : 0,
                                          }}
                                          transition={{ duration: 0.3 }}
                                        >
                                          {expandedProject ===
                                          `${job.id}-${idx}` ? (
                                            <ChevronUp size={16} />
                                          ) : (
                                            <ChevronDown size={16} />
                                          )}
                                        </motion.div>
                                      </div>

                                      <AnimatePresence>
                                        {expandedProject ===
                                          `${job.id}-${idx}` && (
                                          <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{
                                              opacity: 1,
                                              height: "auto",
                                            }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden mt-3"
                                          >
                                            <p className="text-text-secondary text-sm mb-3">
                                              {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                              {project.tech.map(
                                                (tech, techIdx) => (
                                                  <span
                                                    key={techIdx}
                                                    className="px-2 py-1 bg-neon-blue/10 text-neon-blue text-xs rounded-full border border-neon-blue/30"
                                                  >
                                                    {tech}
                                                  </span>
                                                )
                                              )}
                                            </div>
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
