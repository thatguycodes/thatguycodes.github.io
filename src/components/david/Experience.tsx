'use client';

import React from 'react';
import { experiencePlaceholders } from '@/data/portfolio';
import { Notch } from './Notch';
import { Card, Badge } from 'sahara-ui/web';
import { Calendar, CheckCircle2, MapPin } from 'lucide-react';

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative w-full py-28 bg-[var(--color-beige-500)]/40 dark:bg-[#1f1b19] border-t border-[var(--color-border-subtle)]"
    >
      {/* Notch transition at start */}
      <div className="absolute top-0 left-0 right-0 flex justify-between pointer-events-none -translate-y-full text-[var(--color-beige-500)]/40 dark:text-[#1f1b19]">
        <Notch />
        <Notch flipX />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="relative mb-20">
          <div className="relative inline-block">
            <div className="absolute -top-6 -left-3 sm:-left-6 transform rotate-[-4deg] z-10">
              <span className="px-3.5 py-1 rounded-md bg-[var(--color-black-400)] text-[var(--color-beige-400)] font-mono text-[11px] font-bold tracking-widest uppercase shadow-md">
                MILESTONES
              </span>
            </div>

            <h2
              id="experience-heading"
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-[-0.02em] text-[var(--color-black-400)] pt-3"
            >
              Experience
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[var(--color-text-300)] mt-4 max-w-xl font-medium">
            Career history, engineering leadership, and high-concurrency systems design.
            <span className="font-mono text-xs text-[var(--color-accent-blue)] ml-2">
              [ PLACEHOLDER ROLES ]
            </span>
          </p>
        </div>

        {/* Timeline List using Design System Card */}
        <div className="space-y-8 max-w-5xl">
          {experiencePlaceholders.map((item, idx) => (
            <Card
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-[var(--color-beige-400)] dark:bg-[#231f1d] border-[var(--color-border-subtle)] hover:border-[var(--color-accent-blue)]/50 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[var(--color-border-subtle)]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-bold text-[var(--color-accent-blue)]">
                      0{idx + 1} // CAREER
                    </span>
                    <span className="text-[var(--color-text-muted)] font-mono text-xs" aria-hidden="true">•</span>
                    <Badge variant="zinc" className="font-mono text-[10px] uppercase">
                      Placeholder
                    </Badge>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-black-400)] group-hover:text-[var(--color-accent-blue)] transition-colors">
                    {item.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[var(--color-text-300)] mt-1 font-medium">
                    <span className="text-[var(--color-black-400)] font-bold">{item.company}</span>
                    <span aria-hidden="true">&bull;</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                <div className="shrink-0">
                  <Badge
                    variant="outline"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-beige-500)] dark:bg-white/5 border-[var(--color-border-subtle)] font-mono text-xs font-semibold text-[var(--color-black-400)]"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[var(--color-accent-blue)]" aria-hidden="true" />
                    <span>{item.period}</span>
                  </Badge>
                </div>
              </div>

              {/* Description & Key Highlights */}
              <div className="pt-5">
                <p className="text-sm text-[var(--color-text-300)] leading-relaxed mb-4">
                  {item.description}
                </p>

                <ul className="space-y-2 mb-6" aria-label={`Key milestones at ${item.company}`}>
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-text-300)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-blue)] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-[var(--color-border-subtle)]">
                  {item.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="px-2.5 py-0.5 rounded-md bg-[var(--color-beige-500)]/60 dark:bg-white/5 font-mono text-[11px] text-[var(--color-text-300)] font-medium border-[var(--color-border-subtle)]"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
