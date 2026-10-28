'use client';

import React from 'react';
import { Card, CardContent, Badge } from '@thatguycodes/design-system/web';
import { Layers, ShieldCheck, HeartHandshake } from 'lucide-react';

export function LeadershipPrinciples() {
  const principles = [
    {
      number: '01',
      title: 'Code is a Liability; Architecture is Leverage',
      subtitle: 'Minimizing Surface Area',
      description:
        'Every line of code added to production incurs recurring maintenance taxes, security vulnerabilities, and deployment drag. World-class architecture solves problems by establishing clear fault isolation boundaries and deleting unnecessary abstractions.',
      icon: <Layers className="w-5 h-5 text-[var(--color-sahara-amber-bright)]" />,
    },
    {
      number: '02',
      title: 'Boring Technology for Core Paths, Innovation at the Edge',
      subtitle: 'Pragmatic Engineering Economics',
      description:
        'Run your mission-critical financial states and persistence layers on proven, unexciting workhorses (PostgreSQL, Kafka, Linux). Reserve architectural novelty for areas that create real 10x competitive product differentiation.',
      icon: <ShieldCheck className="w-5 h-5 text-[var(--color-sahara-terracotta)]" />,
    },
    {
      number: '03',
      title: 'High Psychological Safety, Uncompromising Craft',
      subtitle: 'Culture Governs Systems',
      description:
        'Conways Law dictates that systems mirror communication structures. High-performing engineering teams require blame-free retrospectives, explicit RFC decision records, and relentless technical rigor without fear of experimentation.',
      icon: <HeartHandshake className="w-5 h-5 text-amber-500" />,
    },
  ];

  return (
    <section className="w-full py-20 bg-[var(--bg-canvas)] border-b border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <Badge variant="terracotta" className="text-xs font-mono font-bold tracking-widest uppercase mb-2">
              04 // OPERATIONAL PHILOSOPHY
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Leadership Principles Formed in Production
            </h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] max-w-md">
            The guiding engineering tenets applied across hundreds of production deployments and technical advisory engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p) => (
            <Card
              key={p.number}
              className="bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--color-sahara-amber)]/40 transition-all p-6 sm:p-8 flex flex-col justify-between"
            >
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-[var(--color-sahara-amber-bright)]">
                    PRINCIPLE // {p.number}
                  </span>
                  <div className="p-2 rounded-lg bg-[var(--bg-elevated)]">
                    {p.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                  {p.title}
                </h3>
                <span className="text-xs font-mono text-[var(--color-sahara-terracotta)] font-semibold block mb-4">
                  {p.subtitle}
                </span>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {p.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
