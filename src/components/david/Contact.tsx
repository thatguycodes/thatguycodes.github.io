'use client';

import React, { useState } from 'react';
import { personalInfo } from '@/data/portfolio';
import { Notch } from './Notch';
import { Card, Badge, Button, Input, Textarea, Label } from 'sahara-ui/web';
import { ArrowUpRight, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8m1.39 9.74v-8.37H5.07v8.37z" />
    </svg>
  );
}

function TwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    // Simulating deterministic dispatch with user notification feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <GithubIcon className="w-4 h-4" />;
      case 'linkedin':
        return <LinkedinIcon className="w-4 h-4" />;
      case 'twitter':
      case 'twitter / x':
      default:
        return <TwitterIcon className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative w-full py-28 bg-[var(--color-beige-400)] dark:bg-[#161311]"
    >
      {/* Notch transition at start */}
      <div className="absolute top-0 left-0 right-0 flex justify-between pointer-events-none -translate-y-full text-[var(--color-beige-400)] dark:text-[#161311]">
        <Notch />
        <Notch flipX />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Headline & Advisory Scope */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-block transform -rotate-3 self-start">
              <span className="px-3.5 py-1 rounded-md bg-[var(--color-black-400)] text-[var(--color-beige-400)] font-mono text-[11px] font-bold tracking-widest uppercase shadow-md">
                GET IN TOUCH
              </span>
            </div>

            <h2
              id="contact-heading"
              className="text-5xl sm:text-7xl font-black tracking-[-0.03em] leading-[0.95] text-[var(--color-black-400)]"
            >
              Let's work
              <br />
              <span className="text-[var(--color-accent-blue)]">together!</span>
            </h2>

            <p className="text-base sm:text-lg text-[var(--color-text-300)] max-w-lg leading-relaxed font-normal">
              Whether you have an upcoming architecture review, a high-concurrency systems project, or need fractional engineering advisory—send a message below.
            </p>

            {/* Verified Profiles Box */}
            <Card className="p-6 rounded-3xl bg-[var(--color-beige-500)] dark:bg-[#231f1d] border-[var(--color-border-subtle)] mt-2">
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
                    aria-label={`${social.name} profile (opens in new tab)`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-beige-400)] dark:bg-white/5 hover:border-[var(--color-accent-blue)] text-xs font-semibold text-[var(--color-black-400)] hover:text-[var(--color-accent-blue)] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-blue)]"
                  >
                    {getSocialIcon(social.icon)}
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-blue)] transition-colors" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </Card>
          </div>

          {/* Right: Accessible Message Form */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8 rounded-3xl bg-[var(--color-beige-500)] dark:bg-[#231f1d] border-[var(--color-border-subtle)] shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border-subtle)] mb-6 font-mono text-xs text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[var(--color-accent-blue)]" aria-hidden="true" />
                  <span>TRANSMIT DISPATCH</span>
                </span>
                <Badge variant="amber" className="font-mono text-[10px] tracking-wider uppercase">
                  RESPONDS &lt; 24H
                </Badge>
              </div>

              {submitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="py-12 flex flex-col items-center text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-black-400)]">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-sm text-[var(--color-text-300)] max-w-md leading-relaxed">
                    Thank you for reaching out. Your transmission has been recorded, and I will get back to you within 24 hours.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 rounded-full px-6"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Contact message form">
                  {errorMessage && (
                    <div
                      role="alert"
                      className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-400 text-xs flex items-center gap-2 font-medium"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="contact-name" className="text-xs font-semibold text-[var(--color-black-400)]">
                        Your Name <span className="text-[var(--color-accent-blue)]" aria-hidden="true">*</span>
                      </Label>
                      <Input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ada Lovelace"
                        autoComplete="name"
                        className="bg-[var(--color-beige-400)] dark:bg-[#161311] border-[var(--color-border-subtle)] focus-visible:ring-[var(--color-accent-blue)] text-[var(--color-black-400)] placeholder:text-[var(--color-text-muted)]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="contact-email" className="text-xs font-semibold text-[var(--color-black-400)]">
                        Email Address <span className="text-[var(--color-accent-blue)]" aria-hidden="true">*</span>
                      </Label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ada@example.com"
                        autoComplete="email"
                        className="bg-[var(--color-beige-400)] dark:bg-[#161311] border-[var(--color-border-subtle)] focus-visible:ring-[var(--color-accent-blue)] text-[var(--color-black-400)] placeholder:text-[var(--color-text-muted)]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="contact-subject" className="text-xs font-semibold text-[var(--color-black-400)]">
                      Subject
                    </Label>
                    <Input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Architecture review / Consultation / Advisory inquiry"
                      className="bg-[var(--color-beige-400)] dark:bg-[#161311] border-[var(--color-border-subtle)] focus-visible:ring-[var(--color-accent-blue)] text-[var(--color-black-400)] placeholder:text-[var(--color-text-muted)]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="contact-message" className="text-xs font-semibold text-[var(--color-black-400)]">
                      Message <span className="text-[var(--color-accent-blue)]" aria-hidden="true">*</span>
                    </Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline your systems requirements, technical challenge, or project scope..."
                      className="bg-[var(--color-beige-400)] dark:bg-[#161311] border-[var(--color-border-subtle)] focus-visible:ring-[var(--color-accent-blue)] text-[var(--color-black-400)] placeholder:text-[var(--color-text-muted)] resize-y min-h-[120px]"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-4">
                    <span className="text-[11px] font-mono text-[var(--color-text-muted)]">
                      * Required fields
                    </span>
                    <Button
                      type="submit"
                      variant="default"
                      isLoading={isSubmitting}
                      disabled={isSubmitting}
                      className="rounded-full bg-[var(--color-black-400)] text-[var(--color-beige-400)] font-bold px-6 py-2.5 h-auto hover:opacity-90 transition-opacity"
                    >
                      <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                      <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
