import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://gokulnath.dev"),
  title:
    "Gokulnath R - Senior Full-Stack Software Engineer | React JS, Node JS Expert",
  description:
    "Senior Software Engineer with 6+ years of full-stack development expertise in React JS, Node JS, Next.js, and modern web technologies. Specializing in scalable web applications, UI/UX design, and full-stack solutions.",
  keywords: [
    "Senior Software Engineer",
    "Full-Stack Developer",
    "React JS Developer",
    "Node JS Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Application Developer",
    "UI/UX Developer",
    "Redux Developer",
    "PostgreSQL Developer",
    "Agile Development",
    "Software Development",
    "Web Development",
    "React Native",
    "Material UI",
    "Tailwind CSS",
    "TypeScript",
    "REST API Development",
    "Microservices",
    "Cloud Development",
    "DevOps",
    "Git",
    "CI/CD",
    "Responsive Web Design",
    "Progressive Web Apps",
    "Performance Optimization",
    "Code Review",
    "Technical Leadership",
    "Team Leadership",
    "Project Management",
    "Software Architecture",
    "Database Design",
    "API Integration",
    "Third-party APIs",
    "Authentication Systems",
    "State Management",
    "Component Libraries",
    "Testing",
    "Unit Testing",
    "Integration Testing",
    "E-commerce Development",
    "SaaS Development",
    "Enterprise Software",
    "Startup Development",
    "Freelance Developer",
    "Remote Developer",
    "Contract Developer",
  ].join(", "),
  authors: [{ name: "Gokulnath R" }],
  creator: "Gokulnath R",
  publisher: "Gokulnath R",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Gokulnath R - Senior Full-Stack Software Engineer",
    description:
      "Senior Software Engineer with 6+ years of full-stack development expertise in React JS, Node JS, Next.js, and modern web technologies.",
    url: "https://gokulnath.dev",
    siteName: "Gokulnath R Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gokulnath R - Senior Full-Stack Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gokulnath R - Senior Full-Stack Software Engineer",
    description:
      "Senior Software Engineer with 6+ years of full-stack development expertise in React JS, Node JS, Next.js, and modern web technologies.",
    images: ["/og-image.jpg"],
    creator: "@gokulnathr",
  },
  alternates: {
    canonical: "https://gokulnath.dev",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Technology",
  classification: "Software Development",
  other: {
    "theme-color": "#0a0a0a",
    "msapplication-TileColor": "#0a0a0a",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Gokulnath R Portfolio",
    "application-name": "Gokulnath R Portfolio",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Gokulnath R",
              jobTitle: "Senior Software Engineer",
              description:
                "Senior Software Engineer with 6+ years of full-stack development expertise in React JS, Node JS, Next.js, and modern web technologies.",
              url: "https://gokulnath.dev",
              image: "https://gokulnath.dev/profile-image.jpg",
              sameAs: [
                "https://linkedin.com/in/gokulnathr",
                "https://github.com/gokulnathr",
                "https://twitter.com/gokulnathr",
              ],
              knowsAbout: [
                "React JS",
                "Node JS",
                "Next.js",
                "JavaScript",
                "Full-Stack Development",
                "Web Development",
                "UI/UX Design",
                "Redux",
                "PostgreSQL",
                "Agile Development",
                "Software Architecture",
                "API Development",
                "Microservices",
                "Cloud Development",
                "DevOps",
                "Git",
                "CI/CD",
                "Responsive Web Design",
                "Progressive Web Apps",
                "Performance Optimization",
                "Code Review",
                "Technical Leadership",
                "Team Leadership",
                "Project Management",
                "Database Design",
                "API Integration",
                "Authentication Systems",
                "State Management",
                "Component Libraries",
                "Testing",
                "E-commerce Development",
                "SaaS Development",
                "Enterprise Software",
                "Startup Development",
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "Senior Software Engineer",
                description:
                  "Full-stack software engineer specializing in React JS, Node JS, and modern web technologies",
                occupationalCategory: "Software Development",
                skills: [
                  "React JS",
                  "Node JS",
                  "Next.js",
                  "JavaScript",
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
                  "Startup Development",
                ],
              },
              worksFor: {
                "@type": "Organization",
                name: "Freelance/Contract",
                description:
                  "Senior Software Engineer providing full-stack development services",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Computer Science Education",
                description:
                  "6+ years of professional experience in software development",
              },
            }),
          }}
        />

        {/* Structured Data for WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Gokulnath R Portfolio",
              description:
                "Senior Software Engineer portfolio showcasing full-stack development expertise in React JS, Node JS, Next.js, and modern web technologies.",
              url: "https://gokulnath.dev",
              author: {
                "@type": "Person",
                name: "Gokulnath R",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://gokulnath.dev/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Structured Data for CreativeWork */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              name: "Gokulnath R Portfolio",
              description:
                "Portfolio showcasing full-stack development projects and expertise in React JS, Node JS, Next.js, and modern web technologies.",
              author: {
                "@type": "Person",
                name: "Gokulnath R",
              },
              creator: {
                "@type": "Person",
                name: "Gokulnath R",
              },
              keywords: [
                "Senior Software Engineer",
                "Full-Stack Developer",
                "React JS Developer",
                "Node JS Developer",
                "Next.js Developer",
                "JavaScript Developer",
                "Web Development",
                "UI/UX Design",
                "Software Development",
                "Portfolio",
              ],
              genre: "Technology",
              inLanguage: "en-US",
              dateCreated: "2024",
              dateModified: new Date().toISOString(),
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
