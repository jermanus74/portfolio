"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Repository } from "../types";
import { ProjectsError } from "../components/projects/project-error";
import { ProjectsGrid } from "../components/projects/project-grid";
import { ProjectsHeader } from "../components/projects/project-header";
import { ProjectsSearch } from "../components/projects/project-search";
import { ProjectsSkeletons } from "../components/projects/project-skeleton";

export function ProjectsSection() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<Repository[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/jermanus74/repos?sort=updated&per_page=50"
        );
        if (!response.ok) throw new Error("Failed to fetch repositories");

        const data = await response.json();
        const filteredData = data
          .filter((repo: Repository) => !repo.fork && repo.description)
          .sort((a: Repository, b: Repository) =>
            b.stargazers_count !== a.stargazers_count
              ? b.stargazers_count - a.stargazers_count
              : new Date(b.updated_at).getTime() -
                new Date(a.updated_at).getTime()
          )
          .slice(0, 12);

        setRepositories(filteredData);
        setFilteredRepos(filteredData);
      } catch (err) {
        setError(
          typeof err === "object" && err !== null && "message" in err
            ? String((err as { message?: string }).message)
            : "Failed to load projects. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  useEffect(() => {
    const filtered = repositories.filter(
      (repo) =>
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo.topics.some((topic) =>
          topic.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    setFilteredRepos(filtered);
  }, [searchTerm, repositories]);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <ProjectsHeader />

        <ProjectsSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {loading && <ProjectsSkeletons />}
        {error && <ProjectsError error={error} />}

        {!loading && !error && <ProjectsGrid repositories={filteredRepos} />}

        {!loading && !error && repositories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" size="lg">
              <a
                href="https://github.com/jermanus74"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
