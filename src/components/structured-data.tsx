export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://jermanus-portfolio.vercel.app/#person",
        name: "Jermanus",
        jobTitle: "Fullstack Developer",
        description:
          "Passionate fullstack developer crafting modern web experiences with cutting-edge technologies.",
        url: "https://jermanus-portfolio.vercel.app/",
        image: "https://github.com/jermanus74.png",
        sameAs: [
          "https://github.com/jermanus74",
          "https://linkedin.com/in/jermanus",
          "https://twitter.com/jermanus"
        ],
        knowsAbout: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "Node.js",
          "Web Development",
          "Full Stack Development",
          "UI/UX Design"
        ],
        email: "simbasjowzey@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Remote",
          addressCountry: "Worldwide"
        },
        worksFor: {
          "@type": "Organization",
          name: "FUTURE-TECH"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://jermanus-portfolio.vercel.app/#website",
        url: "https://jermanus-portfolio.vercel.app/",
        name: "Jermanus Portfolio",
        description:
          "Portfolio of Jermanus, a passionate fullstack developer crafting modern web experiences.",
        publisher: {
          "@id": "https://jermanus-portfolio.vercel.app/#person"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://jermanus-portfolio.vercel.app/#webpage",
        url: "https://jermanus-portfolio.vercel.app/",
        name: "Jermanus - Fullstack Developer",
        description:
          "Portfolio of Jermanus, a passionate fullstack developer crafting modern web experiences.",
        isPartOf: {
          "@id": "https://jermanus-portfolio.vercel.app/#website"
        },
        about: {
          "@id": "https://jermanus-portfolio.vercel.app/#person"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}