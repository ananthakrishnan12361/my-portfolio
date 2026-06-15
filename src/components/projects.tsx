"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading, FadeIn } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = projects[activeIndex];

  const next = () => setActiveIndex((i) => (i + 1) % projects.length);
  const prev = () =>
    setActiveIndex((i) => (i - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <SectionHeading
          title="Featured Projects"
          subtitle="Enterprise solutions across healthcare, Web3, collaboration, and AR/VR"
        />

        <FadeIn>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all",
                  activeIndex === i
                    ? "bg-primary text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                )}
              >
                {p.name}
              </button>
            ))}
          </div>
        </FadeIn>

        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-3xl overflow-hidden"
          >
            <div
              className={cn(
                "h-32 sm:h-48 bg-gradient-to-r relative",
                project.gradient
              )}
            >
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl sm:text-4xl font-bold text-white drop-shadow-lg px-4 text-center">
                  {project.name}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary">{project.role}</p>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-6">
                    <h4 className="font-semibold mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Highlights</h4>
                    <ul className="space-y-1.5">
                      {project.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary">✦</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.contributions && (
                    <div>
                      <h4 className="font-semibold mb-2">Contributions</h4>
                      <ul className="space-y-1.5">
                        {project.contributions.map((c) => (
                          <li
                            key={c}
                            className="flex gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-accent">→</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.challenges && (
                    <div>
                      <h4 className="font-semibold mb-2">Challenges</h4>
                      <ul className="space-y-1.5">
                        {project.challenges.map((c) => (
                          <li
                            key={c}
                            className="flex gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-amber-500">⚡</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="glass rounded-xl p-4 border-dashed">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                      Architecture
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {["Client", "API Gateway", "Services", "Database"].map(
                        (layer, i) => (
                          <div key={layer} className="flex items-center gap-2">
                            <span className="rounded-md bg-secondary px-2 py-1 font-mono">
                              {layer}
                            </span>
                            {i < 3 && (
                              <span className="text-muted-foreground">→</span>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={prev} aria-label="Previous project">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={next} aria-label="Next project">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <span className="text-sm text-muted-foreground">
                  {activeIndex + 1} / {projects.length}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
