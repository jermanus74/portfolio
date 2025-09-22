"use client";

import { motion } from "framer-motion";

export function ExperienceHighlights() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="mt-8 space-y-4"
    >
      <h4 className="text-xl font-semibold">What I Bring</h4>
      <ul className="space-y-3 text-muted-foreground">
        {[
          "Full-stack development with modern JavaScript frameworks",
          "Responsive design and mobile-first development approach",
          "Performance optimization and accessibility best practices",
          "API design and database architecture",
          "DevOps practices and cloud deployment strategies",
        ].map((item, i) => (
          <li key={i} className="flex items-start">
            <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
