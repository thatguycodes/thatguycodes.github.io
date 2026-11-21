'use client';

import React from 'react';
import { projectPlaceholders } from '@/data/portfolio';
import { Notch } from './Notch';
import { Card, Badge, Button } from 'sahara-ui/web';
import { ArrowUpRight, Code2 } from 'lucide-react';

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative w-full py-28 bg-[var(--color-beige-400)] dark:bg-[#161311]"
    >
      {/* Notch transition at start of projects section */}
      <div className="absolute top-0 left-0 right-0 flex justify-between pointer-events-none -translate-y-full text-[var(--color-beige-400)] dark:text-[#161311]">
        <Notch />
        <Notch flipX />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Block with rotated banner */}
        <div className="relative mb-20">
          <div className="relative inline-block">
            {/* Tilted Sticker Banner: "SELECTED" */}
            <div className="absolute -top-6 -left-3 sm:-left-6 transform rotate-[-5deg] z-10">
              <span className="px-3.5 py-1 rounded-md bg-[var(--color-black-400)] text-[var(--color-beige-400)] font-mono text-[11px] font-bold tracking-widest uppercase shadow-md">
                SELECTED
              </span>
            </div>

            <h2
              id="projects-heading"
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-[-0.02em] text-[var(--color-black-400)] pt-3"
            >
              Projects
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[var(--color-text-300)] mt-4 max-w-xl font-medium">
            Architectural case studies, distributed engines, and interactive web prototypes.
            <span className="font-mono text-xs text-[var(--color-accent-blue)] ml-2">
              [ PLACEHOLDER SHOWCASE ]
            </span>
          </p>
        </div>

        {/* 2-Column Grid of Preview Cards using Design System Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projectPlaceholders.map((project, idx) => (
            <Card
              key={project.slug}
              className="group relative rounded-3xl bg-[var(--color-beige-500)] dark:bg-[#231f1d] border-[var(--color-border-subtle)] p-4 sm:p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Card Top: 16/9 Thumbnail Area */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[var(--color-black-400)] border border-[var(--color-border-subtle)]/80 flex items-center justify-center">
                {/* Background Gradient & Technical Mesh */}
                <div
                  className="absolute inset-0 opacity-25 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${project.accentColor} 0%, transparent 70%)`,
                  }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-david-grid opacity-30 pointer-events-none" aria-hidden="true" />

                {/* Center Stylized Graphic / Wireframe Icon */}
                <div className="relative z-10 flex flex-col items-center gap-2 text-center p-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: project.accentColor }}
                  >
                    <Code2 className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-[10px] tracking-wider uppercase text-white/70 font-semibold mt-1">
                    {project.category}
                  </span>
                </div>

                {/* Top-Right Notch & Action Button */}
                <div className="absolute top-0 right-0 z-20 flex items-start">
                  <Notch flipX className="text-[var(--color-beige-500)] dark:text-[#231f1d]" />
                  <div className="bg-[var(--color-beige-500)] dark:bg-[#231f1d] p-2 rounded-bl-2xl">
                    <Button
                      variant="default"
                      size="icon"
                      aria-label={`View case study: ${project.title}`}
                      className="w-10 h-10 rounded-full bg-[var(--color-black-400)] text-[var(--color-beige-400)] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 group-hover:bg-[var(--color-accent-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-blue)]"
                    >
                      <ArrowUpRight className="w-4 h-4 text-white" aria-hidden="true" />
                    </Button>
                  </div>
                </div>

                {/* Top-Left Category Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <Badge
                    variant="outline"
                    className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md font-mono text-[10px] text-white/90 font-semibold border-white/10"
                  >
                    0{idx + 1} // CASE STUDY
                  </Badge>
                </div>
              </div>

              {/* Card Bottom: Content & Tags */}
              <div className="pt-5 px-1 pb-1">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--color-black-400)] group-hover:text-[var(--color-accent-blue)] transition-colors">
                    {project.title}
                  </h3>
                  <Badge variant="zinc" className="font-mono text-[10px] uppercase shrink-0">
                    Placeholder
                  </Badge>
                </div>

                <p className="text-xs sm:text-sm text-[var(--color-text-300)] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tag Chips using Design System Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--color-border-subtle)]">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="px-2.5 py-0.5 rounded-md bg-[var(--color-beige-400)] dark:bg-white/5 font-mono text-[11px] text-[var(--color-text-300)] font-medium border-[var(--color-border-subtle)]"
                    >
                      {tag}
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
