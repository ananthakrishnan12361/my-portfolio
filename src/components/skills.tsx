"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories, type SkillLevel } from "@/data/portfolio";
import { SectionHeading, FadeIn } from "@/components/section-heading";
import { SkillIcon } from "@/components/skill-icon";
import { cn } from "@/lib/utils";

const levelColors: Record<SkillLevel, string> = {
  Expert: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  Advanced: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
  Intermediate: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  Familiar: "bg-zinc-500/15 text-zinc-600 dark:text-zinc-400",
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies I work with daily, backed by real project experience"
        />

        <FadeIn>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {skillCategories.map((cat, i) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(i)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all",
                  activeCategory === i
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "glass text-muted-foreground hover:text-foreground"
                )}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </FadeIn>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-4"
          >
            {skillCategories[activeCategory].skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group glass rounded-2xl p-4 flex flex-col items-center text-center gap-3 cursor-default"
              >
                <div className="transition-transform group-hover:scale-110">
                  <SkillIcon slug={skill.slug} name={skill.name} size={32} />
                </div>
                <div>
                  <p className="text-sm font-medium leading-tight">{skill.name}</p>
                  {skill.years && (
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {skill.years}
                    </p>
                  )}
                </div>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                    levelColors[skill.level]
                  )}
                >
                  {skill.level}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
