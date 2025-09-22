"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

// =================
// Subcomponents
// =================
function HeroGreeting() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-muted-foreground text-lg"
    >
      Hello, I&apos;m
    </motion.div>
  );
}

function HeroName() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-6xl md:text-8xl font-bold tracking-tight text-balance"
    >
      <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
        Jermanus
      </span>
    </motion.h1>
  );
}

function HeroSubtitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="text-2xl md:text-3xl text-muted-foreground font-light"
    >
      Fullstack Developer
    </motion.div>
  );
}

function HeroDescription() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty"
    >
      I craft modern, accessible web experiences that blend thoughtful design
      with robust engineering. Passionate about creating digital solutions that
      make a difference.
    </motion.p>
  );
}

function HeroActions({
  downloadCV,
  scrollToProjects,
}: {
  downloadCV: () => void;
  scrollToProjects: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
    >
      <Button
        onClick={downloadCV}
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
      >
        <Download className="mr-2 h-5 w-5" />
        Download CV
      </Button>

      <Button
        onClick={scrollToProjects}
        variant="outline"
        size="lg"
        className="px-8 py-3 text-lg bg-transparent"
      >
        View Projects
        <ArrowDown className="ml-2 h-5 w-5" />
      </Button>
    </motion.div>
  );
}

function HeroSocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.0 }}
      className="flex justify-center space-x-6 pt-8"
    >
      <a
        href="https://github.com/jermanus74"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <Github className="h-6 w-6" />
        <span className="sr-only">GitHub</span>
      </a>
      <a
        href="https://linkedin.com/in/jermanus"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <Linkedin className="h-6 w-6" />
        <span className="sr-only">LinkedIn</span>
      </a>
      <a
        href="mailto:hello@jermanus.dev"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <Mail className="h-6 w-6" />
        <span className="sr-only">Email</span>
      </a>
    </motion.div>
  );
}

function HeroScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="text-muted-foreground"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.div>
    </motion.div>
  );
}

// =================
// Main Hero Section
// =================
export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv-jermanus.pdf";
    link.download = "Jermanus-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center space-y-8">
          <HeroGreeting />
          <HeroName />
          <HeroSubtitle />
          <HeroDescription />
          <HeroActions
            downloadCV={downloadCV}
            scrollToProjects={scrollToProjects}
          />
          <HeroSocialLinks />
        </div>
      </div>

      <HeroScrollIndicator />
    </section>
  );
}
