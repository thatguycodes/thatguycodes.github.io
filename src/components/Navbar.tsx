'use client';

import React, { useState } from 'react';
import { Button, buttonVariants } from '@thatguycodes/design-system/web';
import { personalInfo } from '@/data/portfolio';
import { Menu, X, Sun, Moon, Send } from 'lucide-react';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = () => {
    const nextState = !isLight;
    setIsLight(nextState);
    if (nextState) {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[var(--bg-canvas)]/85 border-b border-[var(--border-subtle)] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="group flex items-center space-x-2 font-mono font-bold text-lg tracking-tight text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
        >
          <span className="text-[var(--color-sahara-amber-bright)]">&gt;</span>
          <span>{personalInfo.handle}</span>
          <span className="inline-block w-2 h-4 bg-[var(--color-sahara-amber-bright)] animate-pulse"></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-[var(--text-secondary)]">
          <a href="#metrics" className="hover:text-[var(--color-sahara-amber-bright)] transition-colors">Metrics</a>
          <a href="#architectural-domains" className="hover:text-[var(--color-sahara-amber-bright)] transition-colors">Architecture</a>
          <a href="#consulting" className="hover:text-[var(--color-sahara-amber-bright)] transition-colors">Consulting</a>
          <a href="#case-studies" className="hover:text-[var(--color-sahara-amber-bright)] transition-colors">Case Studies</a>
          <a href="#experience" className="hover:text-[var(--color-sahara-amber-bright)] transition-colors">Experience</a>
          <a href="#contact-advisory" className="hover:text-[var(--color-sahara-amber-bright)] transition-colors">Contact</a>
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center space-x-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            {isLight ? <Moon className="w-4 h-4 text-amber-500" /> : <Sun className="w-4 h-4 text-amber-400" />}
          </Button>

          <a
            href="#consulting"
            className={buttonVariants({ variant: 'amber', size: 'sm', className: 'font-semibold shadow-sm flex items-center gap-1.5' })}
          >
            <Send className="w-3.5 h-3.5" />
            <span>Schedule Advisory</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-[var(--text-secondary)]"
          >
            {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 pt-3 pb-6 space-y-3">
          <a
            href="#metrics"
            onClick={() => setMobileOpen(false)}
            className="block text-[var(--text-primary)] hover:text-[var(--accent-primary)] font-medium py-1"
          >
            Metrics
          </a>
          <a
            href="#architectural-domains"
            onClick={() => setMobileOpen(false)}
            className="block text-[var(--text-primary)] hover:text-[var(--accent-primary)] font-medium py-1"
          >
            Architecture
          </a>
          <a
            href="#consulting"
            onClick={() => setMobileOpen(false)}
            className="block text-[var(--text-primary)] hover:text-[var(--accent-primary)] font-medium py-1"
          >
            Consulting
          </a>
          <a
            href="#case-studies"
            onClick={() => setMobileOpen(false)}
            className="block text-[var(--text-primary)] hover:text-[var(--accent-primary)] font-medium py-1"
          >
            Case Studies
          </a>
          <a
            href="#experience"
            onClick={() => setMobileOpen(false)}
            className="block text-[var(--text-primary)] hover:text-[var(--accent-primary)] font-medium py-1"
          >
            Experience
          </a>
          <a
            href="#contact-advisory"
            onClick={() => setMobileOpen(false)}
            className="block text-[var(--text-primary)] hover:text-[var(--accent-primary)] font-medium py-1"
          >
            Contact
          </a>
          <div className="pt-2">
            <a
              href="#consulting"
              onClick={() => setMobileOpen(false)}
              className={buttonVariants({ variant: 'amber', className: 'w-full text-center flex items-center justify-center gap-1.5' })}
            >
              Schedule Advisory
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
