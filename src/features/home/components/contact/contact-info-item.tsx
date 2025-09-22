"use client";

import { motion } from "framer-motion";
import React from "react";

interface ContactInfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

export function ContactInfoItem({
  icon,
  label,
  value,
  href,
}: ContactInfoItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex items-center space-x-4"
    >
      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="font-medium">{label}</p>
        {href ? (
          <a
            href={href}
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-muted-foreground">{value}</p>
        )}
      </div>
    </motion.div>
  );
}
