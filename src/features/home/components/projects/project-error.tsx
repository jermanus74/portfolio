"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Props {
  error: string;
}

export function ProjectsError({ error }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-12"
    >
      <p className="text-muted-foreground mb-4">{error}</p>
      <Button onClick={() => window.location.reload()} variant="outline">
        Try Again
      </Button>
    </motion.div>
  );
}
