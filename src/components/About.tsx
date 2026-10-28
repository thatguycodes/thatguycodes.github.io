'use client';

import React from 'react';
import { Card, CardContent, Badge } from '@thatguycodes/design-system/web';
import { personalInfo } from '@/data/portfolio';
import { GraduationCap, MapPin, Cloud, ShieldCheck } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 border-t border-[var(--border-subtle)] bg-[var(--bg-elevated)]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Biography & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <Badge variant="terracotta" className="text-xs font-semibold uppercase tracking-wider mb-2">
                About Me
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mt-1 tracking-tight">
                Bridging Software Development & Systems Architecture
              </h2>
            </div>

            <p className="text-[var(--text-secondary)] leading-relaxed text-base">
              I am a technology-agnostic software developer aspiring to be a Software Architect. With a strong foundation in Computer Science and hands-on experience spanning telecommunications backbones, nationwide network provisioning, microfinance SPA development, and containerized cloud services, I thrive on solving complex architectural challenges.
            </p>

            <p className="text-[var(--text-secondary)] leading-relaxed text-base">
              A firm believer in <strong className="text-[var(--text-primary)] font-semibold">Test-Driven Development (TDD)</strong> and collaboration through Git, I ensure automated and consistent pipelines to build, package, test, and deploy applications to production.
            </p>

            {/* Highlights Grid with Sahara UI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <Card className="bg-[var(--bg-surface)] border-[var(--border-subtle)] shadow-sm">
                <CardContent className="p-4">
                  <div className="text-[var(--color-sahara-amber-bright)] font-semibold text-sm mb-1 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>Education</span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)]">{personalInfo.education}</p>
                </CardContent>
              </Card>

              <Card className="bg-[var(--bg-surface)] border-[var(--border-subtle)] shadow-sm">
                <CardContent className="p-4">
                  <div className="text-[var(--color-sahara-amber-bright)] font-semibold text-sm mb-1 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Location</span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)]">{personalInfo.location}</p>
                </CardContent>
              </Card>

              <Card className="bg-[var(--bg-surface)] border-[var(--border-subtle)] shadow-sm">
                <CardContent className="p-4">
                  <div className="text-[var(--color-sahara-amber-bright)] font-semibold text-sm mb-1 flex items-center gap-2">
                    <Cloud className="w-4 h-4" />
                    <span>Cloud Focus</span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)]">AWS Infrastructure & Microservices</p>
                </CardContent>
              </Card>

              <Card className="bg-[var(--bg-surface)] border-[var(--border-subtle)] shadow-sm">
                <CardContent className="p-4">
                  <div className="text-[var(--color-sahara-amber-bright)] font-semibold text-sm mb-1 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Methodology</span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)]">Test-Driven Development & Automated CI/CD</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column: Sahara Nocturne Code Terminal */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[var(--color-sahara-basalt)] border border-[var(--border-base)] shadow-2xl overflow-hidden font-mono text-xs">
              {/* Terminal Titlebar */}
              <div className="bg-[var(--color-sahara-surface-lowest)] px-4 py-3 border-b border-[var(--border-subtle)] flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                </div>
                <span className="text-[var(--text-muted)] text-xs">theodore.engineer.ts</span>
              </div>

              {/* Code */}
              <div className="p-5 text-[var(--text-secondary)] space-y-2 overflow-x-auto">
                <div>
                  <span className="text-[var(--color-sahara-amber)]">interface</span> <span className="text-[var(--color-sahara-terracotta-bright)]">ArchitectProfile</span> &#123;
                </div>
                <div className="pl-4">
                  <span className="text-[var(--color-sahara-amber-bright)]">name</span>: <span className="text-[var(--color-telemetry-emerald)]">string</span>;
                </div>
                <div className="pl-4">
                  <span className="text-[var(--color-sahara-amber-bright)]">role</span>: <span className="text-[var(--color-telemetry-emerald)]">string</span>;
                </div>
                <div className="pl-4">
                  <span className="text-[var(--color-sahara-amber-bright)]">coreStrengths</span>: <span className="text-[var(--color-telemetry-emerald)]">string[]</span>;
                </div>
                <div className="pl-4">
                  <span className="text-[var(--color-sahara-amber-bright)]">standards</span>: <span className="text-[var(--color-telemetry-emerald)]">string[]</span>;
                </div>
                <div>&#125;</div>

                <div className="pt-2">
                  <span className="text-[var(--color-sahara-amber)]">export const</span> <span className="text-[var(--color-sahara-terracotta-bright)]">profile</span>: <span className="text-[var(--color-sahara-amber)]">ArchitectProfile</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-[var(--color-sahara-amber-bright)]">name</span>: <span className="text-[var(--color-telemetry-emerald)]">"{personalInfo.name}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[var(--color-sahara-amber-bright)]">role</span>: <span className="text-[var(--color-telemetry-emerald)]">"Software Engineer & Cloud Architect"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[var(--color-sahara-amber-bright)]">coreStrengths</span>: [
                </div>
                <div className="pl-8 text-[var(--color-telemetry-emerald)]">
                  "Microservices & Distributed Systems",<br />
                  "AWS & Scalable Infrastructure",<br />
                  "End-to-End Modern Web Apps"
                </div>
                <div className="pl-4">],</div>
                <div className="pl-4">
                  <span className="text-[var(--color-sahara-amber-bright)]">standards</span>: [
                </div>
                <div className="pl-8 text-[var(--color-telemetry-emerald)]">
                  "Test-Driven Development (TDD)",<br />
                  "Automated CI/CD Delivery",<br />
                  "Resilient Cloud Deployment"
                </div>
                <div className="pl-4">]</div>
                <div>&#125;;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
