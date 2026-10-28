'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, Badge, buttonVariants } from '@thatguycodes/design-system/web';
import { projectsData } from '@/data/portfolio';
import { ExternalLink, Layers, Terminal, ArrowUpRight } from 'lucide-react';

export function Projects() {
  const caseStudies = [
    {
      title: "eThebe Microfinance Platform & Distributed Ledger",
      role: "Lead Client & API Architect",
      impact: "Zero-downtime offline loan origination with automated GitLab CI/CD",
      description: "Architected single-page client architecture with resilient Service Worker caching and decoupled microfinance REST endpoints. Supported thousands of concurrent microloan originations across intermittent connectivity environments.",
      tags: ["React", "Service Workers", "REST APIs", "FinTech", "GitLab CI"],
      rfc: "RFC-084",
      githubUrl: "https://github.com/MrObonye",
      liveUrl: undefined,
    },
    {
      title: "Nationwide High-Capacity WAN/LAN Infrastructure Gateway",
      role: "Infrastructure & Systems Administrator",
      impact: "Delivered high-availability connectivity across remote community hubs",
      description: "Engineered wide area network gateways, bandwidth accounting algorithms, QoS prioritization matrices, and failover routing policies for remote community operational centers.",
      tags: ["Systems Architecture", "IP Routing", "BGP/OSPF", "Firewall Rules", "Linux"],
      rfc: "RFC-112",
      githubUrl: undefined,
      liveUrl: undefined,
    },
    {
      title: "Microservices Service Orchestrator & Distributed Cache",
      role: "Systems Architect",
      impact: "Sub-5ms response times under distributed concurrency testing",
      description: "Decoupled Spring Boot and Node.js microservices architecture featuring distributed Redis caching, JWT stateless authentication, and PostgreSQL connection pooling with automated container deployment.",
      tags: ["Java", "Spring Boot", "Node.js", "Redis", "PostgreSQL", "Docker"],
      rfc: "RFC-145",
      githubUrl: "https://github.com/MrObonye",
      liveUrl: undefined,
    },
    {
      title: "Cloud-Native Developer Portfolio & Design System (Sahara UI)",
      role: "Core Author & Maintainer",
      impact: "100/100 Lighthouse performance score with zero-cost GitHub Pages static delivery",
      description: "Custom desert modernism UI component library published as @thatguycodes/design-system with automated GitHub Actions CI/CD workflows, TypeScript verification, and Tailwind CSS styling.",
      tags: ["Next.js 15", "Sahara UI", "Tailwind CSS", "TypeScript", "GitHub Actions"],
      rfc: "RFC-019",
      githubUrl: "https://github.com/thatguycodes/thatguycodes.github.io",
      liveUrl: "https://thatguycodes.github.io",
    },
  ];

  return (
    <section id="case-studies" className="py-20 bg-[var(--bg-canvas)] border-b border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <Badge variant="amber" className="text-xs font-mono font-bold tracking-widest uppercase mb-2">
              05 // PROVEN CASE STUDIES & ARCHITECTURE
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Architectural Transformations & Systems Case Studies
            </h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] max-w-md">
            Production case studies demonstrating fault-tolerant system design, infrastructure engineering, and delivery automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <Card
              key={study.title}
              className="bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--color-sahara-amber)]/50 transition-all flex flex-col justify-between shadow-sm hover:shadow-md group"
            >
              <div>
                <CardHeader className="p-6 sm:p-8 pb-3">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--color-sahara-amber-bright)]">
                        <Terminal className="w-4 h-4" />
                      </div>
                      <span className="px-2 py-0.5 rounded bg-[var(--bg-elevated)] font-mono text-[10px] text-[var(--color-sahara-amber-bright)] border border-[var(--border-subtle)]">
                        {study.rfc}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      {study.githubUrl && (
                        <a
                          href={study.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View Repository"
                          className={buttonVariants({
                            variant: 'ghost',
                            size: 'icon',
                            className: 'text-[var(--text-muted)] hover:text-[var(--color-sahara-amber-bright)]',
                          })}
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                        </a>
                      )}

                      {study.liveUrl && (
                        <a
                          href={study.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Live Demo"
                          className={buttonVariants({
                            variant: 'ghost',
                            size: 'icon',
                            className: 'text-[var(--text-muted)] hover:text-[var(--color-sahara-amber-bright)]',
                          })}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <CardTitle className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--color-sahara-amber-bright)] transition-colors">
                    {study.title}
                  </CardTitle>

                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs font-mono font-medium text-[var(--color-sahara-terracotta)]">
                      {study.role}
                    </span>
                    <span className="text-[var(--text-muted)]">•</span>
                    <span className="text-xs text-[var(--text-secondary)] font-medium">
                      {study.impact}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="p-6 sm:p-8 pt-2">
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {study.description}
                  </p>
                </CardContent>
              </div>

              <CardFooter className="p-6 sm:p-8 pt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="sandstone"
                    className="text-xs font-mono"
                  >
                    #{tag}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
