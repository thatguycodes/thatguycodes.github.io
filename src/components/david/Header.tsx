'use client';

import React, { useState, useEffect } from 'react';
import { personalInfo } from '@/data/portfolio';
import { ArrowUpRight, Sun, Moon, Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check initial system or stored theme
    const isDarkStored = localStorage.getItem('theme') === 'dark';
    if (isDarkStored) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--color-beige-400)]/85 dark:bg-[#151619]/85 backdrop-blur-md border-b border-[var(--color-border-subtle)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#"
          className="group flex items-center gap-2.5 font-bold tracking-tight text-[var(--color-black-400)]"
        >
          {/* David Heckhoff-style geometric wireframe logo */}
          <div className="w-8 h-8 rounded-lg bg-[var(--color-black-400)] flex items-center justify-center text-[var(--color-beige-400)] transition-transform duration-300 group-hover:rotate-12">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm sm:text-base leading-none tracking-tight">
              {personalInfo.shortName}
            </span>
            <span className="font-mono text-[10px] text-[var(--color-text-300)] uppercase tracking-wider">
              {personalInfo.handle}
            </span>
          </div>
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[var(--color-text-300)]">
          <a
            href="#about"
            className="hover:text-[var(--color-black-400)] transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-[var(--color-black-400)] transition-colors"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="hover:text-[var(--color-black-400)] transition-colors"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="hover:text-[var(--color-black-400)] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right Actions: Theme Toggle & Get in touch */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-black-400)] hover:bg-[var(--color-beige-500)] dark:hover:bg-white/10 transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-700" />}
          </button>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--color-black-400)] text-[var(--color-beige-400)] text-xs sm:text-sm font-bold tracking-tight hover:opacity-90 transition-all shadow-sm group"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-black-400)]"
          >
            {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            className="w-9 h-9 rounded-full border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-black-400)]"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-6 pt-4 pb-6 bg-[var(--color-beige-400)] dark:bg-[#18191d] border-b border-[var(--color-border-subtle)] shadow-xl flex flex-col gap-4">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-[var(--color-black-400)]"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-[var(--color-black-400)]"
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-[var(--color-black-400)]"
          >
            Experience
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-[var(--color-black-400)]"
          >
            Contact
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-2.5 rounded-full bg-[var(--color-black-400)] text-[var(--color-beige-400)] text-sm font-bold mt-2"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
