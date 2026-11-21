'use client';

import React, { useState, useEffect } from 'react';
import { personalInfo } from '@/data/portfolio';
import { Button, buttonVariants } from 'sahara-ui/web';
import { ArrowUpRight, Sun, Moon, Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check initial system or stored theme
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = storedTheme === 'dark' || (!storedTheme && prefersDark);

    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.documentElement.setAttribute('data-theme', 'dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.documentElement.setAttribute('data-theme', 'light');
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
      document.documentElement.classList.remove('light');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--color-beige-400)]/85 dark:bg-[#161311]/85 backdrop-blur-md border-b border-[var(--color-border-subtle)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#"
          aria-label={`${personalInfo.shortName} home`}
          className="group flex items-center gap-2.5 font-bold tracking-tight text-[var(--color-black-400)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-blue)] rounded-lg"
        >
          {/* Geometric wireframe logo */}
          <div className="w-8 h-8 rounded-lg bg-[var(--color-black-400)] flex items-center justify-center text-[var(--color-beige-400)] transition-transform duration-300 group-hover:rotate-12 shadow-sm">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              aria-hidden="true"
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
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8 text-sm font-semibold text-[var(--color-text-300)]">
          <a
            href="#about"
            className="hover:text-[var(--color-black-400)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-blue)] rounded-sm"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-[var(--color-black-400)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-blue)] rounded-sm"
          >
            Projects
          </a>
          <a
            href="#articles"
            className="hover:text-[var(--color-black-400)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-blue)] rounded-sm"
          >
            Articles
          </a>
          <a
            href="#contact"
            className="hover:text-[var(--color-black-400)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-blue)] rounded-sm"
          >
            Contact
          </a>
        </nav>

        {/* Right Actions: Theme Toggle & Get in touch */}
        <div className="hidden sm:flex items-center gap-3">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className="w-10 h-10 rounded-full border border-[var(--color-border-subtle)] text-[var(--color-black-400)] hover:bg-[var(--color-beige-500)] dark:hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-blue)]"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" aria-hidden="true" /> : <Moon className="w-4 h-4 text-stone-700" aria-hidden="true" />}
          </Button>

          <a
            href="#contact"
            className={buttonVariants({
              variant: 'default',
              className: 'rounded-full bg-[var(--color-black-400)] text-[var(--color-beige-400)] text-xs sm:text-sm font-bold tracking-tight hover:opacity-90 shadow-sm inline-flex items-center gap-1.5 px-4 py-2 h-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-blue)]',
            })}
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className="w-9 h-9 rounded-full border border-[var(--color-border-subtle)] text-[var(--color-black-400)]"
          >
            {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" /> : <Moon className="w-3.5 h-3.5" aria-hidden="true" />}
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="w-9 h-9 rounded-full border border-[var(--color-border-subtle)] text-[var(--color-black-400)]"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" aria-hidden="true" /> : <Menu className="w-4 h-4" aria-hidden="true" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="sm:hidden border-b border-[var(--color-border-subtle)] bg-[var(--color-beige-400)] dark:bg-[#161311] px-4 pt-3 pb-6 flex flex-col gap-4 font-semibold text-sm"
        >
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 text-[var(--color-text-300)] hover:text-[var(--color-black-400)]"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 text-[var(--color-text-300)] hover:text-[var(--color-black-400)]"
          >
            Projects
          </a>
          <a
            href="#articles"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 text-[var(--color-text-300)] hover:text-[var(--color-black-400)]"
          >
            Articles
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 text-[var(--color-text-300)] hover:text-[var(--color-black-400)]"
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className={buttonVariants({
              variant: 'default',
              className: 'w-full mt-2 rounded-full bg-[var(--color-black-400)] text-[var(--color-beige-400)] inline-flex items-center justify-center gap-1.5',
            })}
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1" aria-hidden="true" />
          </a>
        </nav>
      )}
    </header>
  );
}
