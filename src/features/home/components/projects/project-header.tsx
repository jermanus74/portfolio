"use client";

import { motion } from "framer-motion";

export function ProjectsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
        Featured Projects
      </h2>
      <div className="w-20 h-1 bg-accent mx-auto mb-8" />
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
        A collection of projects I&apos;ve worked on, showcasing my skills in
        full-stack development, UI/UX design, and problem-solving.
      </p>
    </motion.div>
  );
}
