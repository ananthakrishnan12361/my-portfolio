"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education, achievements } from "@/data/portfolio";
import { SectionHeading, FadeIn } from "@/components/section-heading";
import { Trophy } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-max">
        <SectionHeading
          title="Education"
          subtitle="Academic foundation in computer science and applications"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 max-w-5xl mx-auto">
          {education.map((edu, i) => (
            <FadeIn key={edu.degree} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 sm:p-6 h-full text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="font-semibold">{edu.degree}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {edu.institution}
                </p>
                {edu.score && (
                  <p className="mt-3 text-sm font-medium text-primary">
                    {edu.score}
                  </p>
                )}
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-secondary/20">
      <div className="container-max">
        <SectionHeading
          title="Achievements"
          subtitle="Milestones and accomplishments throughout my career"
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 sm:gap-4 max-w-5xl mx-auto">
          {achievements.map((item, i) => (
            <FadeIn key={item} delay={i * 0.05}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass rounded-xl p-4 flex flex-col items-center gap-2 text-center h-full"
              >
                <Trophy className="h-5 w-5 text-amber-500" />
                <p className="text-xs sm:text-sm font-medium leading-snug">
                  {item}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
