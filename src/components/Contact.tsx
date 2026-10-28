'use client';

import React, { useState } from 'react';
import { Card, CardContent, Input, Textarea, Button, Badge, buttonVariants } from '@thatguycodes/design-system/web';
import { personalInfo } from '@/data/portfolio';
import { Mail, MapPin, Send, User, AtSign, Building2, Calendar, ShieldCheck } from 'lucide-react';

export function Contact() {
  const [engagement, setEngagement] = useState('resilience-audit');

  return (
    <section id="contact-advisory" className="py-20 border-t border-[var(--border-subtle)] bg-[var(--bg-elevated)]/30 blueprint-grid relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Consulting Value Proposition & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <Badge variant="amber" className="text-xs font-mono font-bold tracking-widest uppercase mb-2">
                07 // ADVISORY ENGAGEMENT
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mt-1 tracking-tight">
                Engage for High-Stakes Systems Audits & Leadership
              </h2>
            </div>

            <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
              Whether you are preparing for a 10x traffic event, untangling monolithic technical debt, or seeking to slash six figures in cloud egress bills—let us architect a deterministic roadmap.
            </p>

            <div className="space-y-4 pt-2">
              <Card className="bg-[var(--bg-surface)] border-[var(--border-subtle)]">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] text-[var(--color-sahara-amber-bright)]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] font-mono uppercase tracking-wider">
                      Advisory Desk
                    </p>
                    <a
                      href={`mailto:${personalInfo.email}?subject=Architectural%20Advisory%20Inquiry`}
                      className="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--color-sahara-amber-bright)] transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[var(--bg-surface)] border-[var(--border-subtle)]">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] text-[var(--color-sahara-terracotta)]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] font-mono uppercase tracking-wider">
                      Location & Timezone
                    </p>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">
                      {personalInfo.location} (UTC+2 / Global Remote)
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[var(--bg-surface)] border-[var(--border-subtle)]">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] text-amber-500">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] font-mono uppercase tracking-wider">
                      Confidentiality
                    </p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Mutual NDAs supported prior to codebase & cloud telemetry audits.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social channels */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-3 font-semibold font-mono">
                Verified Profiles
              </p>
              <div className="flex flex-wrap gap-2.5">
                {personalInfo.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({
                      variant: 'outline',
                      size: 'sm',
                      className: 'border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] hover:text-[var(--color-sahara-amber-bright)]',
                    })}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Consulting Intake Form using Sahara UI */}
          <div className="lg:col-span-7" id="consulting-inquiry">
            <Card className="bg-[var(--bg-surface)] border-[var(--border-subtle)] shadow-xl relative overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-[var(--color-sahara-amber-bright)] via-[var(--color-sahara-amber)] to-[var(--color-sahara-terracotta)]" />

              <CardContent className="p-6 sm:p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    Schedule Architectural Consultation
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">
                    Select your primary objective to receive a structured scope outline within 24 hours.
                  </p>
                </div>

                <form
                  action={`mailto:${personalInfo.email}`}
                  method="POST"
                  encType="text/plain"
                  className="space-y-5"
                >
                  {/* Engagement Type Selector */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-2.5">
                      Engagement Scope
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        { id: 'resilience-audit', label: 'Resilience Audit' },
                        { id: 'cloud-finops', label: 'FinOps Optimization' },
                        { id: 'fractional-architect', label: 'Fractional Advisory' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setEngagement(item.id)}
                          className={`px-3 py-2.5 rounded-lg border text-xs font-medium transition-all text-left ${
                            engagement === item.id
                              ? 'bg-[var(--color-sahara-amber)]/15 border-[var(--color-sahara-amber-bright)] text-[var(--text-primary)] font-semibold shadow-sm'
                              : 'bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--color-sahara-amber)]/40'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="engagement_type" value={engagement} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="e.g. Alex Morgan"
                        leftIcon={<User className="w-4 h-4 text-[var(--text-muted)]" />}
                        className="bg-[var(--bg-elevated)] border-[var(--border-subtle)]"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                        Work Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="alex@company.com"
                        leftIcon={<AtSign className="w-4 h-4 text-[var(--text-muted)]" />}
                        className="bg-[var(--bg-elevated)] border-[var(--border-subtle)]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                        Company / Organization
                      </label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Acme Technologies"
                        leftIcon={<Building2 className="w-4 h-4 text-[var(--text-muted)]" />}
                        className="bg-[var(--bg-elevated)] border-[var(--border-subtle)]"
                      />
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                        Desired Timeline / Start Date
                      </label>
                      <Input
                        id="timeline"
                        name="timeline"
                        placeholder="Immediate / Q3"
                        leftIcon={<Calendar className="w-4 h-4 text-[var(--text-muted)]" />}
                        className="bg-[var(--bg-elevated)] border-[var(--border-subtle)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                      Architecture Bottlenecks or Project Objectives
                    </label>
                    <Textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      required
                      placeholder="Briefly describe your current architecture (e.g., AWS/GCP, Kubernetes, microservices scale, database bottlenecks, or cost targets)..."
                      className="bg-[var(--bg-elevated)] border-[var(--border-subtle)]"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="amber"
                    size="lg"
                    glow={true}
                    className="w-full sm:w-auto font-semibold flex items-center justify-center gap-2 cursor-pointer text-amber-950"
                  >
                    <span>Request Architectural Advisory</span>
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
