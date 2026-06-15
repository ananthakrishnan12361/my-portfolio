import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Expertise } from "@/components/expertise";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Certifications } from "@/components/certifications";
import { Education, Achievements } from "@/components/education";
import { Contact } from "@/components/contact";

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
