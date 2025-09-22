"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function BioCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <Card className="border-0 bg-card/50 backdrop-blur-sm">
        <CardContent className="p-8 space-y-4 text-lg leading-relaxed">
          <p className="text-pretty">
            I&apos;m a passionate fullstack developer with a love for creating
            digital experiences that not only look great but also solve
            real-world problems.
          </p>
          <p className="text-pretty">
            When I&apos;m not coding, you&apos;ll find me exploring new
            technologies, contributing to open-source projects, or sharing
            knowledge with the developer community.
          </p>
          <p className="text-pretty">
            Currently, I&apos;m focused on building scalable web applications
            using modern technologies like React, Next.js, and TypeScript, while
            ensuring accessibility and performance are never compromised.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
