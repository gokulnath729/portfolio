"use client";

import Head from 'next/head';

const SEO = ({ 
  title = "Gokulnath R - Senior Full-Stack Software Engineer | React JS, Node JS Expert",
  description = "Senior Software Engineer with 6+ years of full-stack development expertise in React JS, Node JS, Next.js, and modern web technologies. Specializing in scalable web applications, UI/UX design, and full-stack solutions.",
  keywords = "Senior Software Engineer, Full-Stack Developer, React JS Developer, Node JS Developer, Next.js Developer, JavaScript Developer, Web Development, UI/UX Design, API Development, Database Design, Performance Optimization, Agile Development, Technical Leadership, Team Management, E-commerce Development, SaaS Development, Enterprise Software, Startup Development",
  image = "https://gokulnath.dev/og-image.jpg",
  url = "https://gokulnath.dev",
  type = "website",
  author = "Gokulnath R",
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  const siteName = "Gokulnath R Portfolio";
  const twitterHandle = "@gokulnathr";
  
  // Enhanced keywords for better SEO
  const enhancedKeywords = [
    ...keywords.split(', '),
    "React JS development services",
    "Node JS backend development",
    "Full-stack web development",
    "Custom web application development",
    "E-commerce development services",
    "SaaS application development",
    "Enterprise software development",
    "Startup development services",
    "UI/UX design services",
    "API development services",
    "Database design services",
    "Performance optimization services",
    "Technical consulting services",
    "Code review services",
    "Team leadership services",
    "Project management services",
    "Agile development services",
    "DevOps services",
    "Cloud deployment services",
    "Security audit services",
    "Testing services",
    "Maintenance services",
    "Support services"
  ].join(', ');

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={enhancedKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Gokulnath R - Senior Full-Stack Software Engineer" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Gokulnath R - Senior Full-Stack Software Engineer" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0a0a0a" />
      <meta name="msapplication-TileColor" content="#0a0a0a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      <meta name="application-name" content={siteName} />
      
      {/* Article Meta Tags (if applicable) */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Structured Data - Person */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Gokulnath R",
            "jobTitle": "Senior Full-Stack Software Engineer",
            "description": description,
            "url": url,
            "image": image,
            "sameAs": [
              "https://linkedin.com/in/gokulnathr",
              "https://github.com/gokulnathr",
              "https://twitter.com/gokulnathr"
            ],
            "knowsAbout": [
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
            ],
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Senior Full-Stack Software Engineer",
              "description": "Full-stack software engineer specializing in React JS, Node JS, and modern web technologies",
              "occupationalCategory": "Software Development",
              "skills": [
                "React JS",
                "Node JS",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Redux",
                "PostgreSQL",
                "Material UI",
                "Tailwind CSS",
                "Agile/Scrum",
                "Full-Stack Development",
                "UI/UX Design",
                "API Development",
                "Microservices",
                "Cloud Development",
                "DevOps",
                "Git",
                "CI/CD",
                "Responsive Web Design",
                "Performance Optimization",
                "Code Review",
                "Technical Leadership",
                "Team Leadership",
                "Project Management",
                "Software Architecture",
                "Database Design",
                "API Integration",
                "Authentication Systems",
                "State Management",
                "Component Libraries",
                "Testing",
                "E-commerce Development",
                "SaaS Development",
                "Enterprise Software",
                "Startup Development"
              ]
            },
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance/Contract",
              "description": "Senior Software Engineer providing full-stack development services"
            },
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "Computer Science Education",
              "description": "6+ years of professional experience in software development"
            }
          })
        }}
      />
      
      {/* Structured Data - WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": siteName,
            "description": "Senior Software Engineer portfolio showcasing full-stack development expertise in React JS, Node JS, Next.js, and modern web technologies.",
            "url": url,
            "author": {
              "@type": "Person",
              "name": "Gokulnath R"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": `${url}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      
      {/* Structured Data - CreativeWork */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": siteName,
            "description": "Portfolio showcasing full-stack development projects and expertise in React JS, Node JS, Next.js, and modern web technologies.",
            "author": {
              "@type": "Person",
              "name": "Gokulnath R"
            },
            "creator": {
              "@type": "Person",
              "name": "Gokulnath R"
            },
            "keywords": [
              "Senior Software Engineer",
              "Full-Stack Developer",
              "React JS Developer",
              "Node JS Developer",
              "Next.js Developer",
              "JavaScript Developer",
              "Web Development",
              "UI/UX Design",
              "Software Development",
              "Portfolio"
            ],
            "genre": "Technology",
            "inLanguage": "en-US",
            "dateCreated": "2024",
            "dateModified": new Date().toISOString()
          })
        }}
      />
      
      {/* Structured Data - Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Full-Stack Software Development Services",
            "description": "Professional full-stack software development services including React JS, Node JS, Next.js development, API development, database design, and technical consulting.",
            "provider": {
              "@type": "Person",
              "name": "Gokulnath R"
            },
            "serviceType": [
              "Web Development",
              "API Development",
              "Database Design",
              "UI/UX Design",
              "Technical Consulting",
              "Performance Optimization",
              "Code Review",
              "Team Leadership"
            ],
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Software Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "React JS Development",
                    "description": "Custom React JS applications with modern best practices"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Node JS Backend Development",
                    "description": "Scalable backend APIs and server-side applications"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Full-Stack Development",
                    "description": "Complete web applications from frontend to backend"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Technical Consulting",
                    "description": "Architecture review, performance optimization, and technical guidance"
                  }
                }
              ]
            }
          })
        }}
      />
    </Head>
  );
};

export default SEO; 