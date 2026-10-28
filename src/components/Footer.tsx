'use client';

import React from 'react';
import { personalInfo } from '@/data/portfolio';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-canvas)] py-12 text-[var(--text-muted)] text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-2 font-mono">
          <span className="text-[var(--color-sahara-amber-bright)] font-bold">&gt;</span>
          <span className="text-[var(--text-primary)] font-semibold">{personalInfo.handle}</span>
          <span>&bull;</span>
          <span>{personalInfo.shortName}</span>
        </div>

        <div className="flex items-center space-x-6 text-[var(--text-secondary)]">
          <a href="#about" className="hover:text-[var(--color-sahara-amber-bright)] transition-colors">About</a>
          <a href="#skills" className="hover:text-[var(--color-sahara-amber-bright)] transition-colors">Skills</a>
          <a href="#experience" className="hover:text-[var(--color-sahara-amber-bright)] transition-colors">Experience</a>
          <a href="#projects" className="hover:text-[var(--color-sahara-amber-bright)] transition-colors">Projects</a>
          <a href="#contact" className="hover:text-[var(--color-sahara-amber-bright)] transition-colors">Contact</a>
        </div>

        <div className="text-center md:text-right">
          <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="text-[var(--text-muted)] text-xs mt-1">
            Built with Next.js &amp; <span className="text-[var(--color-sahara-amber-bright)] font-medium">Sahara UI</span> &bull; Hosted on GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  );
}
