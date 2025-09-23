export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jermanus",
    jobTitle: "Fullstack Developer",
    description: "Passionate fullstack developer crafting modern web experiences with cutting-edge technologies.",
    url: "https://jermanus-portfolio.vercel.app/",
    sameAs: ["https://github.com/jermanus74", "https://linkedin.com/in/jermanus"],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Web Development",
      "Full Stack Development",
      "UI/UX Design",
    ],
    email: "simbasjowzey@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Remote",
      addressCountry: "Worldwide",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
