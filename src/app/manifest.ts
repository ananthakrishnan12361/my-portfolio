import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Anantha Krishnan S — Portfolio",
    short_name: "AK Portfolio",
    description:
      "Senior Software Engineer portfolio — Full Stack, MERN, Cloud, AI, Web3.",
    start_url: "/",
    display: "standalone",
    background_color: "#030303",
    theme_color: "#030303",
    lang: "en",
  };
}
