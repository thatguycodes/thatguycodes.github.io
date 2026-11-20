'use client';

import React from 'react';
import { personalInfo } from '@/data/portfolio';
import { ThreeScene } from './ThreeScene';
import { ArrowDown, MapPin, Radio } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden">
      {/* Background subtle technical grid */}
      <div className="absolute inset-0 bg-david-grid pointer-events-none opacity-40 dark:opacity-20" />

      {/* Hero Central Canvas / 3D Element Backdrop */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] lg:w-[620px] lg:h-[620px] opacity-85 dark:opacity-95 transition-opacity">
          <ThreeScene />
        </div>
      </div>

      {/* Top Telemetry / Status Pill */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[var(--color-text-300)]">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-beige-500)]/70 dark:bg-white/5 backdrop-blur-sm">
            <Radio className="w-3.5 h-3.5 text-[var(--color-accent-blue)] animate-pulse" />
            <span className="font-semibold text-[var(--color-black-400)]">
              AVAILABLE FOR ROLES &amp; ADVISORY
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[var(--color-accent-blue)]" />
            <span>{personalInfo.location}</span>
            <span className="text-[var(--color-text-muted)] font-mono">[{personalInfo.coordinates}]</span>
          </div>
        </div>
      </div>

      {/* Main Massive Title Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12 relative z-10 flex flex-col items-center text-center">
        <div className="relative inline-block">
          {/* Giant Hero Title (David Heckhoff signature typography) */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] font-black tracking-[-0.03em] leading-[0.92] text-[var(--color-black-400)] select-none">
            {personalInfo.firstName}
            <br />
            {personalInfo.lastName}
          </h1>

          {/* Tilted Sticker Banner (David Heckhoff signature rotated sticker) */}
          <div className="absolute -bottom-4 -right-2 sm:-right-8 lg:-right-12 z-20 transform rotate-[-4deg] sm:rotate-[-6deg] transition-transform hover:rotate-0 duration-200">
            <div className="px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-xl bg-[var(--color-black-400)] text-[var(--color-beige-400)] shadow-2xl border-2 border-[var(--color-beige-400)] dark:border-[#151619] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent-blue)] animate-ping" />
              <span className="font-mono text-xs sm:text-sm font-bold tracking-wider uppercase whitespace-nowrap">
                {personalInfo.jobTitle}
              </span>
            </div>
          </div>
        </div>

        {/* Short Subtitle / Identity Pill */}
        <p className="mt-10 sm:mt-12 text-base sm:text-lg text-[var(--color-text-300)] max-w-xl font-medium leading-relaxed">
          Building resilient distributed systems, scalable cloud topologies, and interactive web experiences.
        </p>
      </div>

      {/* Bottom Row / Scroll prompt */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex items-center justify-between text-xs font-mono text-[var(--color-text-300)]">
        <div className="flex items-center gap-6">
          <a
            href="#projects"
            className="hover:text-[var(--color-black-400)] font-semibold transition-colors flex items-center gap-1.5"
          >
            <span>SELECTED WORK</span>
            <span className="text-[var(--color-accent-blue)]">↓</span>
          </a>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline">TEST-DRIVEN ARCHITECTURE</span>
        </div>

        <a
          href="#about"
          aria-label="Scroll down"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-border-subtle)] hover:bg-[var(--color-beige-500)] dark:hover:bg-white/5 transition-colors group"
        >
          <span>EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}
