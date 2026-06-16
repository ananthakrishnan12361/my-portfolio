import dynamic from "next/dynamic";

import { Hero } from "@/components/hero";

const SectionFallback = () => (
  <div className="section-padding" aria-hidden="true">
    <div className="container-max h-48 animate-pulse rounded-2xl bg-secondary/40" />
  </div>
);

const About = dynamic(
  () => import("@/components/about").then((m) => m.About),
  { loading: SectionFallback }
);
const Expertise = dynamic(
  () => import("@/components/expertise").then((m) => m.Expertise),
  { loading: SectionFallback }
);
const Skills = dynamic(
  () => import("@/components/skills").then((m) => m.Skills),
  { loading: SectionFallback }
);
const Experience = dynamic(
  () => import("@/components/experience").then((m) => m.Experience),
  { loading: SectionFallback }
);
const Projects = dynamic(
  () => import("@/components/projects").then((m) => m.Projects),
  { loading: SectionFallback }
);
const Certifications = dynamic(
  () => import("@/components/certifications").then((m) => m.Certifications),
  { loading: SectionFallback }
);
const Education = dynamic(
  () => import("@/components/education").then((m) => m.Education),
  { loading: SectionFallback }
);
const Achievements = dynamic(
  () => import("@/components/education").then((m) => m.Achievements),
  { loading: SectionFallback }
);
const Contact = dynamic(
  () => import("@/components/contact").then((m) => m.Contact),
  { loading: SectionFallback }
);

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Achievements />
      <Contact />
    </>
  );
}
