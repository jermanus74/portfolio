"use client";

import { motion } from "framer-motion";

export function ResponseTimeNote() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-accent/5 rounded-lg p-6 border border-accent/20"
    >
      <h4 className="font-semibold mb-2">Quick Response</h4>
      <p className="text-sm text-muted-foreground">
        I typically respond to messages within 24 hours. For urgent inquiries,
        feel free to reach out via phone or LinkedIn.
      </p>
    </motion.div>
  );
}
