"use client"; // ✅ This makes the component a Client Component

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../theme-toggle";

export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40"
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Button
              variant="ghost"
              onClick={() => scrollToSection("hero")}
              className="text-lg font-bold hero-gradient p-0 h-auto hover:bg-transparent"
            >
              Jermanus
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center space-x-1"
          >
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="hover:text-primary transition-colors"
            >
              About
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("projects")}
              className="hover:text-primary transition-colors"
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="hover:text-primary transition-colors"
            >
              Contact
            </Button>
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </motion.div>

          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
