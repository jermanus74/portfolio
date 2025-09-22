"use client";

import { motion } from "framer-motion";
import { Repository } from "../../types";
import { ProjectCard } from "./project-card";


interface Props {
  repositories: Repository[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export function ProjectsGrid({ repositories }: Props) {
  if (repositories.length === 0) {
    return (
      <div className="col-span-full text-center py-12 text-muted-foreground">
        No projects found matching your search.
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {repositories.map((repo) => (
        <ProjectCard key={repo.id} repo={repo} />
      ))}
    </motion.div>
  );
}
