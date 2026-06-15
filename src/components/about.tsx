"use client";

import { motion } from "framer-motion";
import { specializations } from "@/data/portfolio";
import { SectionHeading, FadeIn } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Code2, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Expertise",
    description: "End-to-end development from UI to database architecture",
  },
  {
    icon: Rocket,
    title: "Emerging Technologies",
    description: "AI, Web3, Cloud, and AR/VR integration experience",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Mentoring developers and driving architecture decisions",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <SectionHeading
          title="About Me"
          subtitle="Passionate engineer crafting innovative digital experiences"
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <FadeIn>
            <div className="glass rounded-3xl p-6 sm:p-8 md:p-10">
              <h3 className="text-xl font-semibold mb-4 sm:text-2xl">
                Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Seeking challenging opportunities to build innovative products
                while continuously expanding expertise in Full Stack Development,
                AI, Cloud Computing, Web3, and AR/VR technologies.
              </p>

              <h4 className="mt-8 mb-4 font-semibold">Specializations</h4>
              <div className="flex flex-wrap gap-2">
                {specializations.map((spec) => (
                  <Badge key={spec} variant="default">
                    {spec}
                  </Badge>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="grid gap-4 sm:gap-6">
            {highlights.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 8 }}
                  className="glass rounded-2xl p-5 sm:p-6 flex gap-4 items-start"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
