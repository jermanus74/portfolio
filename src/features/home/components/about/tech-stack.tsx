"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Prisma", category: "ORM" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Vercel", category: "Deployment" },
  { name: "Git", category: "Version Control" },
  { name: "Figma", category: "Design" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function TechStack() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-semibold mb-6">Technologies I Work With</h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap gap-3"
      >
        {techStack.map((tech) => (
          <motion.div key={tech.name} variants={itemVariants}>
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium bg-secondary/80 hover:bg-secondary transition-colors cursor-default"
            >
              {tech.name}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
