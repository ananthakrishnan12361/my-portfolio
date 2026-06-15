"use client";

import { motion } from "framer-motion";
import { SectionHeading, FadeIn } from "@/components/section-heading";
import {
  Cloud,
  Database,
  Layers,
  Monitor,
  Server,
  Sparkles,
} from "lucide-react";

const expertiseAreas = [
  {
    icon: Monitor,
    title: "Frontend Engineering",
    description:
      "React, Next.js, Angular ecosystems with responsive, accessible UI design",
    tech: ["React", "Next.js", "TypeScript", "Redux"],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description:
      "Scalable server architectures with NestJS, Express, GraphQL, and REST",
    tech: ["Node.js", "NestJS", "GraphQL", "Microservices"],
  },
  {
    icon: Database,
    title: "Data Layer",
    description:
      "SQL and NoSQL database design, optimization, and data modeling",
    tech: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "AWS services, containerization, and CI/CD pipeline implementation",
    tech: ["AWS", "Docker", "CI/CD", "Linux"],
  },
  {
    icon: Layers,
    title: "Web3 & Blockchain",
    description:
      "Smart contract integration and decentralized application development",
    tech: ["Ethereum", "Web3.js", "Smart Contracts"],
  },
  {
    icon: Sparkles,
    title: "AI & Emerging Tech",
    description:
      "AI-assisted development, AR/VR communication, and real-time systems",
    tech: ["WebRTC", "Twilio", "AR/VR", "AI Tools"],
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="section-padding bg-secondary/20">
      <div className="container-max">
        <SectionHeading
          title="Technical Expertise"
          subtitle="Comprehensive full-stack capabilities across modern technology stacks"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {expertiseAreas.map((area, i) => (
            <FadeIn key={area.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                className="group glass rounded-2xl p-6 h-full transition-shadow hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-transform group-hover:scale-110">
                  <area.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{area.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {area.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
