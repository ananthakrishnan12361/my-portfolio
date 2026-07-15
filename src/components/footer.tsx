import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { contactInfo, navLinks } from "@/data/portfolio";

const socialLinks = [
  {
    href: contactInfo.linkedin,
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: contactInfo.github,
    label: "GitHub",
    icon: Github,
  },
  {
    href: `mailto:${contactInfo.email}`,
    label: "Email",
    icon: Mail,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container-max section-padding !py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-xl font-bold gradient-text">{contactInfo.name}</p>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs">
              Senior Software Engineer building enterprise applications, healthcare
              platforms, and emerging technology solutions.
            </p>
          </div>

          <div>
            <p className="font-semibold mb-4">Quick Links</p>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-4">Connect</p>
            <div className="flex gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl glass transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            © {year} {contactInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
