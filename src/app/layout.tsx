import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MouseGlow } from "@/components/mouse-glow";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anantha Krishnan S | Senior Software Engineer",
  description:
    "Senior Software Engineer | Full Stack Developer | MERN Stack Developer | AI Enthusiast. Building scalable enterprise applications, healthcare platforms, AI-powered solutions, Web3 products, and AR/VR communication systems.",
  keywords: [
    "React Developer",
    "MERN Stack Developer",
    "NestJS Developer",
    "Full Stack Engineer",
    "Senior Software Engineer",
    "Anantha Krishnan S",
  ],
  authors: [{ name: "Anantha Krishnan S" }],
  openGraph: {
    title: "Anantha Krishnan S | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in Full Stack Development, MERN, Cloud, AI, Web3, and AR/VR technologies.",
    type: "website",
    locale: "en_US",
    siteName: "Anantha Krishnan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anantha Krishnan S | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in Full Stack Development, MERN, Cloud, AI, Web3, and AR/VR technologies.",
  },
  robots: { index: true, follow: true },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anantha Krishnan S",
  jobTitle: "Senior Software Engineer",
  description:
    "Full Stack Developer | MERN Stack Developer | AI Enthusiast",
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "MongoDB",
    "AWS",
    "Web3",
    "AR/VR",
    "Microservices",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Amrita Vishwa Vidyapeetham",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MouseGlow />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
