"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { stats, contactInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

const HeroScene = dynamic(
  () => import("@/components/hero-scene").then((m) => m.HeroScene),
  { ssr: false }
);

const socialLinks = [
  { href: contactInfo.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: contactInfo.github, label: "GitHub", icon: Github },
  { href: `mailto:${contactInfo.email}`, label: "Email", icon: Mail },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <HeroScene />

      <div className="absolute inset-0 animated-gradient opacity-[0.03] dark:opacity-[0.06] pointer-events-none" />

      <div className="container-max section-padding relative z-10 w-full">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Anantha Krishnan{" "}
            <span className="gradient-text">S</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base font-medium text-primary sm:text-lg md:text-xl"
          >
            Senior Software Engineer | Full Stack Developer | MERN Stack Developer
            | AI Enthusiast
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base text-muted-foreground sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Building scalable enterprise applications, healthcare platforms,
            AI-powered solutions, Web3 products, and AR/VR communication systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" asChild>
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/Anantha_Krishnan_S_CV.html`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-xl glass transition-all hover:scale-110 hover:bg-primary/10 hover:text-primary"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-4 sm:p-6 transition-transform hover:scale-105"
              >
                <p className="text-2xl font-bold gradient-text sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <Link
            href="#about"
            aria-label="Scroll to about section"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
