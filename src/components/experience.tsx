"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Briefcase } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { SectionHeading, FadeIn } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function Experience() {
  const [expanded, setExpanded] = useState<number>(0);

  return (
    <section id="experience" className="section-padding bg-secondary/20">
      <div className="container-max">
        <SectionHeading
          title="Experience"
          subtitle="Career progression across enterprise, healthcare, and emerging tech"
        />

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-6">
            {experiences.map((exp, i) => {
              const isOpen = expanded === i;
              return (
                <FadeIn key={`${exp.company}-${exp.title}`} delay={i * 0.1}>
                  <div className="relative pl-12 sm:pl-16">
                    <div className="absolute left-2 sm:left-4 top-6 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-background">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>

                    <motion.article
                      layout
                      className={cn(
                        "glass rounded-2xl overflow-hidden transition-shadow",
                        isOpen && "shadow-lg shadow-primary/5"
                      )}
                    >
                      <button
                        className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4"
                        onClick={() => setExpanded(isOpen ? -1 : i)}
                        aria-expanded={isOpen}
                      >
                        <div className="flex gap-4">
                          <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <Briefcase className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">{exp.title}</h3>
                            <p className="text-primary font-medium">{exp.company}</p>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {exp.duration}
                            </p>
                          </div>
                        </div>
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 shrink-0 text-muted-foreground transition-transform mt-1",
                            isOpen && "rotate-180"
                          )}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-border pt-4">
                              <ul className="space-y-2">
                                {exp.description.map((item) => (
                                  <li
                                    key={item}
                                    className="flex gap-2 text-sm text-muted-foreground"
                                  >
                                    <span className="text-primary mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                              <div className="mt-4 flex flex-wrap gap-2">
                                {exp.technologies.map((tech) => (
                                  <Badge key={tech} variant="outline">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.article>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
