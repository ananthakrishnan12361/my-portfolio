import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ClientEnhancements } from "@/components/client-enhancements";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://ananthakrishnan12361.github.io/my-portfolio";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#030303" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anantha Krishnan S | Senior Software Engineer",
    template: "%s | Anantha Krishnan S",
  },
  description:
    "Senior Software Engineer | Full Stack Developer | MERN Stack Developer | AI Enthusiast. Building scalable enterprise applications, healthcare platforms, AI-powered solutions, Web3 products, and AR/VR communication systems.",
  keywords: [
    "React Developer",
    "MERN Stack Developer",
    "NestJS Developer",
    "Full Stack Engineer",
    "Senior Software Engineer",
    "Anantha Krishnan S",
    "Next.js Developer",
    "TypeScript Developer",
  ],
  authors: [{ name: "Anantha Krishnan S", url: siteUrl }],
  creator: "Anantha Krishnan S",
  publisher: "Anantha Krishnan S",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Anantha Krishnan S | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in Full Stack Development, MERN, Cloud, AI, Web3, and AR/VR technologies.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Anantha Krishnan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anantha Krishnan S | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in Full Stack Development, MERN, Cloud, AI, Web3, and AR/VR technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  category: "technology",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anantha Krishnan S",
  url: siteUrl,
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
    "Google Cloud",
    "Web3",
    "AR/VR",
    "Microservices",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Amrita Vishwa Vidyapeetham",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Anantha Krishnan Portfolio",
  url: siteUrl,
  description:
    "Portfolio of Anantha Krishnan S — Senior Software Engineer and Full Stack Developer.",
  author: { "@type": "Person", name: "Anantha Krishnan S" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased`}>
        <a
          href="#main-content"
          className="absolute -left-[9999px] top-4 z-[100] rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:left-4 focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, websiteSchema]),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClientEnhancements />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
