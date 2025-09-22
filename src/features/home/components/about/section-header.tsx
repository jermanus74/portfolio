"use client";

import { motion } from "framer-motion";

export function SectionHeader({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
        {title}
      </h2>
      <div className="w-20 h-1 bg-accent mx-auto mb-8" />
    </motion.div>
  );
}
