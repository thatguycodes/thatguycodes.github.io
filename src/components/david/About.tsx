'use client';

import React from 'react';
import { personalInfo, servicesList } from '@/data/portfolio';
import { Notch } from './Notch';
import { Card, Badge } from 'sahara-ui/web';
import { GraduationCap, MapPin, CheckCircle2, ShieldCheck, Terminal } from 'lucide-react';

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative w-full py-24 bg-[var(--color-beige-500)]/60 dark:bg-[#1f1b19] border-y border-[var(--color-border-subtle)]"
    >
      {/* Top and Bottom Corner Notches */}
      <div className="absolute top-0 left-0 right-0 flex justify-between pointer-events-none -translate-y-full text-[var(--color-beige-500)]/60 dark:text-[#1f1b19]">
        <Notch />
        <Notch flipX />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Sticker & Title */}
        <div className="flex flex-col items-start gap-3 mb-16">
          <div className="inline-block transform -rotate-3 hover:rotate-0 transition-transform">
            <span className="px-3.5 py-1 rounded-lg bg-[var(--color-black-400)] text-[var(--color-beige-400)] font-mono text-xs font-bold tracking-wider uppercase shadow-md">
              01 // ABOUT
            </span>
          </div>

          <h2
            id="about-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--color-black-400)] leading-tight"
          >
            Engineering Systems with
            <br />
            <span className="text-[var(--color-accent-blue)]">Reliability &amp; Craft</span>.
          </h2>

          <div
            className="text-base sm:text-xl text-[var(--color-text-300)] max-w-3xl font-normal leading-relaxed mt-4"
            dangerouslySetInnerHTML={{ __html: personalInfo.intro }}
          />
        </div>

        {/* HUD Box Grid with Design System Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Details Box (5 Cols) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <Card className="p-6 sm:p-8 rounded-3xl bg-[var(--color-beige-400)] dark:bg-[#231f1d] border-[var(--color-border-subtle)] shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border-subtle)] font-mono text-xs text-[var(--color-text-300)] font-bold uppercase tracking-wider">
                <span>IDENTITY // DETAILS</span>
                <Badge variant="emerald" className="font-mono text-[10px] tracking-wider uppercase">
                  VERIFIED
                </Badge>
              </div>

              <div className="mt-6 space-y-5">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] block">
                    Full Name
                  </span>
                  <p className="text-base font-bold text-[var(--color-black-400)] mt-0.5">
                    {personalInfo.name}
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[var(--color-beige-500)] dark:bg-white/5 text-[var(--color-black-400)] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[var(--color-accent-blue)]" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] block">
                      Base Location
                    </span>
                    <p className="text-sm font-semibold text-[var(--color-black-400)]">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[var(--color-beige-500)] dark:bg-white/5 text-[var(--color-black-400)] shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4 text-[var(--color-accent-blue)]" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] block">
                      Education
                    </span>
                    <p className="text-sm font-semibold text-[var(--color-black-400)]">
                      {personalInfo.education}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[var(--color-beige-500)] dark:bg-white/5 text-[var(--color-black-400)] shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-[var(--color-accent-blue)]" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] block">
                      Core Discipline
                    </span>
                    <p className="text-sm font-semibold text-[var(--color-black-400)]">
                      Test-Driven Development (TDD) &amp; Automated CI/CD
                    </p>
                  </div>
                </div>
              </div>

              {/* Telemetry Progress Bar with Accessible ARIA */}
              <div className="mt-8 pt-6 border-t border-[var(--color-border-subtle)]">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-[var(--color-text-300)] uppercase font-semibold">Reliability Target</span>
                  <span className="font-bold text-[var(--color-black-400)]">99.99%</span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={99.99}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="System Reliability Target: 99.99%"
                  className="w-full h-2 rounded-full bg-[var(--color-beige-500)] dark:bg-white/10 overflow-hidden"
                >
                  <div className="h-full bg-[var(--color-accent-blue)] rounded-full w-[99.9%]" />
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Services & Competencies Box (7 Cols) */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <Card className="p-6 sm:p-8 rounded-3xl bg-[var(--color-beige-400)] dark:bg-[#231f1d] border-[var(--color-border-subtle)] shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border-subtle)] font-mono text-xs text-[var(--color-text-300)] font-bold uppercase tracking-wider">
                <span>CORE COMPETENCIES // SERVICES</span>
                <Badge variant="amber" className="font-mono text-[10px] tracking-wider uppercase">
                  05 DOMAINS
                </Badge>
              </div>

              <div className="mt-6 space-y-4">
                {servicesList.map((service, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-2xl bg-[var(--color-beige-500)]/50 dark:bg-white/5 border border-[var(--color-border-subtle)] hover:border-[var(--color-accent-blue)]/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="font-mono text-xs font-bold text-[var(--color-accent-blue)]">
                        0{idx + 1}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-[var(--color-black-400)] group-hover:text-[var(--color-accent-blue)] transition-colors">
                        {service.name}
                      </span>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-blue)] shrink-0" aria-hidden="true" />
                  </div>
                ))}
              </div>

              {/* Bottom Quote / Philosophy sticker */}
              <div className="mt-6 p-4 rounded-2xl bg-[var(--color-black-400)] text-[var(--color-beige-400)] flex items-start gap-3">
                <Terminal className="w-4 h-4 text-[var(--color-accent-blue)] shrink-0 mt-0.5" aria-hidden="true" />
                <p className="font-mono text-xs leading-relaxed text-[var(--color-beige-400)]">
                  &gt; "Code is a liability; clear architectural boundaries and deterministic testing are true leverage."
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
