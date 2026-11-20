'use client';

import React, { useState } from 'react';
import { personalInfo } from '@/data/portfolio';
import { Notch } from './Notch';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8m1.39 9.74v-8.37H5.07v8.37z" />
    </svg>
  );
}

function TwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <GithubIcon className="w-4 h-4" />;
      case 'linkedin':
        return <LinkedinIcon className="w-4 h-4" />;
      case 'twitter':
      case 'twitter / x':
        return <TwitterIcon className="w-4 h-4" />;
      case 'mail':
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <section id="contact" className="relative w-full py-28 bg-[var(--color-beige-400)] dark:bg-[#121316]">
      {/* Notch transition at start */}
      <div className="absolute top-0 left-0 right-0 flex justify-between pointer-events-none -translate-y-full text-[var(--color-beige-400)] dark:text-[#121316]">
        <Notch />
        <Notch flipX />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Giant "Let's work together!" Headline */}
          <div className="lg:col-span-7">
            <div className="inline-block transform -rotate-3 mb-4">
              <span className="px-3.5 py-1 rounded-md bg-[var(--color-black-400)] text-[var(--color-beige-400)] font-mono text-[11px] font-bold tracking-widest uppercase shadow-md">
                GET IN TOUCH
              </span>
            </div>

            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-[-0.03em] leading-[0.95] text-[var(--color-black-400)]">
              Let's work
              <br />
              <span className="text-[var(--color-accent-blue)]">together!</span>
            </h2>

            <p className="text-base sm:text-lg text-[var(--color-text-300)] mt-6 max-w-lg leading-relaxed font-normal">
              Whether you have an upcoming architecture review, a high-concurrency systems project, or need fractional engineering advisory—I'd love to connect.
            </p>
          </div>

          {/* Right: Interactive Contact Cards & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Direct Email Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[var(--color-beige-500)] dark:bg-[#1a1b20] border border-[var(--color-border-subtle)] shadow-sm">
              <div className="flex items-center justify-between pb-3 font-mono text-xs text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">
                <span>DIRECT DESK</span>
                <span className="text-[var(--color-accent-blue)]">RESPONDS &lt; 24H</span>
              </div>

              <div className="mt-2">
                <a
                  href={`mailto:${personalInfo.email}?subject=Collaboration%20Inquiry`}
                  className="text-lg sm:text-xl font-bold text-[var(--color-black-400)] hover:text-[var(--color-accent-blue)] transition-colors break-all flex items-center gap-2 group"
                >
                  <span>{personalInfo.email}</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[var(--color-accent-blue)]" />
                </a>
              </div>

              <div className="mt-5 pt-4 border-t border-[var(--color-border-subtle)] flex items-center gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex-1 py-2.5 px-4 rounded-full bg-[var(--color-black-400)] text-[var(--color-beige-400)] text-xs sm:text-sm font-bold tracking-tight text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="py-2.5 px-4 rounded-full border border-[var(--color-border-subtle)] hover:bg-[var(--color-beige-400)] dark:hover:bg-white/5 text-xs sm:text-sm font-semibold text-[var(--color-black-400)] transition-colors flex items-center gap-1.5 shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Channels (David Heckhoff Round Buttons Style) */}
            <div className="p-6 rounded-3xl bg-[var(--color-beige-500)] dark:bg-[#1a1b20] border border-[var(--color-border-subtle)]">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-muted)] font-bold block mb-4">
                VERIFIED PROFILES
              </span>

              <div className="flex flex-wrap gap-3">
                {personalInfo.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-beige-400)] dark:bg-white/5 hover:border-[var(--color-accent-blue)] text-xs font-semibold text-[var(--color-black-400)] hover:text-[var(--color-accent-blue)] transition-colors group"
                  >
                    {getSocialIcon(social.icon)}
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-blue)] transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
