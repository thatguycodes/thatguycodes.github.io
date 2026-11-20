'use client';

import React from 'react';
import { personalInfo } from '@/data/portfolio';
import { Notch } from './Notch';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full pt-16 pb-12 bg-[var(--color-beige-500)]/70 dark:bg-[#0e0f11] border-t border-[var(--color-border-subtle)] text-[var(--color-text-300)]">
      {/* Top Notch Transition */}
      <div className="absolute top-0 left-0 right-0 flex justify-between pointer-events-none -translate-y-full text-[var(--color-beige-500)]/70 dark:text-[#0e0f11]">
        <Notch />
        <Notch flipX />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8">
        {/* Back To Top Circular Button (David Heckhoff signature) */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="w-12 h-12 rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-beige-400)] dark:bg-[#1a1b20] flex items-center justify-center text-[var(--color-black-400)] hover:bg-[var(--color-accent-blue)] hover:text-white hover:border-[var(--color-accent-blue)] transition-all shadow-sm group"
        >
          <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
        </button>

        {/* Footer Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-[var(--color-text-300)]">
          <a href="#about" className="hover:text-[var(--color-black-400)] transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-[var(--color-black-400)] transition-colors">
            Projects
          </a>
          <a href="#experience" className="hover:text-[var(--color-black-400)] transition-colors">
            Experience
          </a>
          <a href="#contact" className="hover:text-[var(--color-black-400)] transition-colors">
            Contact
          </a>
          <a
            href="https://github.com/thatguycodes/thatguycodes.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-black-400)] transition-colors"
          >
            Source Code
          </a>
        </div>

        {/* Copyright & Meta */}
        <div className="text-center text-xs font-mono text-[var(--color-text-muted)] space-y-1">
          <p>
            &copy; {currentYear} {personalInfo.name} &bull; {personalInfo.handle}
          </p>
          <p className="text-[11px]">
            Inspired by{' '}
            <a
              href="https://david-hckh.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent-blue)] hover:underline font-semibold"
            >
              david-hckh.com
            </a>{' '}
            &bull; Built with Next.js 15, Three.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
