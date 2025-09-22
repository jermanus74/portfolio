"use client";

import { BioCard } from "../components/about/bio-card";
import { ExperienceHighlights } from "../components/about/experience-highlight";
import { SectionHeader } from "../components/about/section-header";
import { TechStack } from "../components/about/tech-stack";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader title="About Me" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <BioCard />
          <div className="space-y-6">
            <TechStack />
            <ExperienceHighlights />
          </div>
        </div>
      </div>
    </section>
  );
}
