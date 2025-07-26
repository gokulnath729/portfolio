"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Database, Palette, Zap, Cpu, GitBranch } from "lucide-react";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    
    {
      name: "Frontend Frameworks & Libraries",
      icon: Zap,
      color: "neon-purple",
      skills: [
        "React JS",
        "Next.js",
        "Redux",
        "Context API",
        "React Hooks",
        "Material UI",
        "Tailwind CSS",
        "Ant Design",
        "React Bootstrap",
        "Yup Validation",
        "Formik Forms",
        "AG-Grid",
        "Yworks Library",
        "React Router",
        "React Query",
        "Framer Motion",
        "React Testing Library",
        "Jest Testing",
      ],
    },
    {
      name: "Backend & APIs",
      icon: Cpu,
      color: "neon-green",
      skills: [
        "Express.js",
        "REST APIs",
        "Fast API",
        "JWT Authentication",
        "OAuth 2.0",
        "API Integration",        
        "Microservices",
        "API Documentation",
      ],
    },
    {
      name: "Databases & Data",
      icon: Database,
      color: "neon-pink",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Database Design",
        "SQL Queries",
        "Data Modeling",
        "Database Optimization",
      ],
    },
    {
      name: "Development Tools & DevOps",
      icon: GitBranch,
      color: "neon-blue",
      skills: [
        "Git & GitHub",
        "CI/CD Pipelines",
        "Docker",
        "Vercel Deployment",
        "Netlify",
        "Webpack",
        "Babel",
        "ESLint",
        "Prettier",
        "Jest Testing",
        "Cypress Testing",
        "Performance Monitoring",
        "Error Tracking",
        "Logging",
      ],
    },
    {
      name: "Methodologies & Practices",
      icon: Palette,
      color: "neon-purple",
      skills: [
        "Agile/Scrum",
        "SDLC",
        "TDD (Test-Driven Development)",
        "Code Review",
        "Pair Programming",
        "Technical Leadership",
        "Team Leadership",
        "Project Management",
        "Software Architecture",
        "Design Patterns",
        "SOLID Principles",
        "Clean Code",
        "Performance Optimization",        
      ],
    },
    {
      name: "Specialized Skills",
      icon: Cpu,
      color: "neon-green",
      skills: [
        "Full-Stack Development",
        "UI/UX Design",
        "Responsive Design",
        "Cross-browser Compatibility",
        "Performance Optimization",
        "Analytics Integration",
        "E-commerce Development",
        "SaaS Development",
        "Enterprise Software",
        "Prompt Engineering",
        "AI Integration",
        "Chatbot Development",
        "Payment Gateway Integration",
      ],
    },
    {
      name: "Programming Languages",
      icon: Code,
      color: "neon-blue",
      skills: [
        "JavaScript",
        "Node JS",
        "Python",
        "SQL",

      ],
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 relative"
      role="region"
      aria-label="Technical Skills and Expertise"
    >
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
            <span className="text-text-primary">Technical</span>{" "}
            <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-12"
          ></motion.div>

          {/* AEO Content for Skills */}
          <motion.div
            variants={itemVariants}
            className="text-text-secondary mb-8 max-w-4xl mx-auto"
          >
            <p className="text-lg mb-4">
              <strong>Senior Software Engineer</strong> with
              expertise in modern web technologies, specializing in React JS,
              Node JS, and Next.js development. Experienced in building scalable
              web applications, APIs, and enterprise software solutions.
            </p>
            <p className="text-base">
              <strong>Core Competencies:</strong> Full-Stack Development, Web
              Application Development, UI/UX Design, API Development, Database
              Design, Performance Optimization, Agile Development, Technical
              Leadership, and Team Management.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="glass-card rounded-xl p-6"
              role="article"
              aria-label={`${category.name} skills`}
            >
              <div className="flex items-center mb-6">
                <div className={`text-${category.color} mr-3`}>
                  <category.icon size={32} />
                </div>
                <h3 className="text-xl font-futura font-bold text-text-primary">
                  {category.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    variants={skillVariants}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
                      borderColor: "#00d4ff",
                    }}
                    className="px-4 py-2 bg-dark-card border border-dark-border rounded-full text-sm font-medium text-text-secondary hover:text-neon-blue transition-all duration-300 cursor-pointer"
                    title={`${skill} - ${category.name}`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Level Indicators - Bento Grid */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 max-w-7xl mx-auto"
        >
          <h3 className="text-3xl font-futura font-bold text-center mb-12 text-text-primary">
            Expertise Levels
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { 
                skill: "React JS Development", 
                level: 95, 
                color: "neon-blue",
              
                description: "Advanced React patterns & hooks"
              },
              {
                skill: "Node JS Backend",
                level: 90,
                color: "neon-purple",
                
                description: "APIs"
              },
              { 
                skill: "JavaScript/ES6+", 
                level: 95, 
                color: "neon-green",
                
                description: "Modern JS"
              },
              { 
                skill: "Next.js Full-Stack", 
                level: 85, 
                color: "neon-green",
                
                description: "Full-stack React framework"
              },
              {
                skill: "Full-Stack Development",
                level: 90,
                color: "neon-blue",
                
                description: "End-to-end solutions"
              },
              { 
                skill: "UI/UX Design", 
                level: 85, 
                color: "neon-purple",
                
                description: "User-centered design"
              },
              { 
                skill: "API Development", 
                level: 90, 
                color: "neon-green",
                
                description: "RESTful APIs"
              },
              { 
                skill: "Database Design", 
                level: 85, 
                color: "neon-blue",
                
                description: "SQL databases"
              },
              {
                skill: "Performance Optimization",
                level: 80,
                color: "neon-blue",
                
                description: "Speed & efficiency focus"
              },
              {
                skill: "Technical Leadership",
                level: 85,
                color: "neon-purple",
                
                description: "Team guidance & mentorship"
              },
             
            ].map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0, 212, 255, 0.3)"
                }}
                className={`
                  relative overflow-hidden rounded-xl p-6 
                  bg-gradient-to-br from-dark-card to-dark-card/80 
                  border border-dark-border hover:border-${item.color}/50 
                  transition-all duration-300 cursor-pointer
                  ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}
                  ${index === 1 ? 'md:col-span-2 lg:col-span-1' : ''}
                  ${index === 4 ? 'md:col-span-2 lg:col-span-2' : ''}
                  ${index === 6 ? 'md:col-span-2 lg:col-span-1' : ''}
                `}
              >
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{item.icon}</span>
                      <h4 className="text-lg font-futura font-bold text-text-primary">
                        {item.skill}
                      </h4>
                    </div>
                    <span className={`text-2xl font-bold text-${item.color}`}>
                      {item.level}%
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-text-secondary mb-4">
                    {item.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="w-full bg-dark-border rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${item.level}%` } : { width: 0 }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                        className={`h-3 rounded-full bg-gradient-to-r from-${item.color} to-${item.color}/70 shadow-lg shadow-${item.color}/25`}
                        aria-label={`${item.skill} expertise level: ${item.level}%`}
                      />
                    </div>
                    
                    {/* Skill Level Indicator */}
                    <div className="flex justify-between text-xs text-text-secondary">
                      <span>Beginner</span>
                      <span>Intermediate</span>
                      <span>Advanced</span>
                      <span>Expert</span>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-${item.color}/20 to-transparent rounded-bl-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-32 h-32 border border-neon-blue/10 rounded-full"
        aria-hidden="true"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-24 h-24 border border-neon-purple/10 rounded-full"
        aria-hidden="true"
      />
    </section>
  );
};

export default Skills;
