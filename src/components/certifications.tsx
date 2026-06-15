"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certificationProviders, type CertificationProvider } from "@/data/portfolio";
import { SectionHeading, FadeIn } from "@/components/section-heading";
import { ProviderIcon } from "@/components/skill-icon";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

export function Certifications() {
  const [selected, setSelected] = useState<CertificationProvider | null>(null);

  return (
    <section id="certifications" className="section-padding bg-secondary/20">
      <div className="container-max">
        <SectionHeading
          title="Certifications"
          subtitle="Industry-recognized credentials from leading technology providers"
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 sm:gap-6">
          {certificationProviders.map((provider, i) => (
            <FadeIn key={provider.id} delay={i * 0.05}>
              <motion.button
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelected(provider)}
                className="glass w-full rounded-2xl p-5 sm:p-6 flex flex-col items-center gap-4 text-center transition-shadow hover:shadow-lg hover:shadow-primary/5"
              >
                <ProviderIcon
                  slug={provider.slug}
                  name={provider.name}
                  color={provider.color}
                  size={40}
                />
                <div>
                  <p className="font-semibold text-sm sm:text-base">
                    {provider.name}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {provider.certifications.length} certification
                    {provider.certifications.length > 1 ? "s" : ""}
                  </p>
                </div>
              </motion.button>
            </FadeIn>
          ))}
        </div>

        <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
          <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-md">
            {selected && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-4">
                    <ProviderIcon
                      slug={selected.slug}
                      name={selected.name}
                      color={selected.color}
                      size={48}
                    />
                    <DialogTitle className="text-xl">
                      {selected.name}
                    </DialogTitle>
                  </div>
                </DialogHeader>

                <div className="space-y-4 mt-4">
                  {selected.certifications.map((cert) => (
                    <div
                      key={cert.name}
                      className="glass rounded-xl p-4 flex gap-3"
                    >
                      <Award className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm leading-snug">
                          {cert.name}
                        </p>
                        {cert.issueDate && (
                          <p className="mt-1 text-xs text-muted-foreground">
                            Issued: {cert.issueDate}
                          </p>
                        )}
                        {cert.credentialId && (
                          <Badge variant="outline" className="mt-2">
                            ID: {cert.credentialId}
                          </Badge>
                        )}
                        {cert.verifyUrl && (
                          <a
                            href={cert.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex items-center gap-1 text-xs text-primary hover:underline"
                          >
                            Verify <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
