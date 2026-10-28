'use client';

import React from 'react';
import { telemetryMetrics } from '@/data/portfolio';
import { Card, CardContent, Badge } from '@thatguycodes/design-system/web';
import { Globe, Zap, Coins, Users } from 'lucide-react';

export function Metrics() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-[var(--color-sahara-amber-bright)]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[var(--color-sahara-terracotta)]" />;
      case 'PiggyBank':
        return <Coins className="w-5 h-5 text-amber-500" />;
      case 'Users':
      default:
        return <Users className="w-5 h-5 text-[var(--color-sahara-amber)]" />;
    }
  };

  return (
    <section id="metrics" className="w-full bg-[var(--bg-elevated)]/40 py-20 border-b border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <Badge variant="amber" className="text-xs font-mono font-bold tracking-widest uppercase mb-2">
              01 // SYSTEM SCALE AUDIT
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Quantified Production Impact & Velocity
            </h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] max-w-md">
            Measurable, non-hypothetical telemetry tested across 14+ years of systems architecture and technical leadership in high-concurrency environments.
          </p>
        </div>

        {/* 4-Column Bento Card Metric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {telemetryMetrics.map((metric) => (
            <Card
              key={metric.id}
              className="bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--color-sahara-amber)]/50 transition-all shadow-sm hover:shadow-md relative overflow-hidden flex flex-col justify-between group"
            >
              {/* Subtle top-right accent corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--color-sahara-amber)]/5 rounded-bl-full pointer-events-none group-hover:bg-[var(--color-sahara-amber)]/10 transition-colors" />

              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[var(--color-sahara-amber-bright)] font-bold">
                      {metric.label}
                    </span>
                    {getIcon(metric.iconName)}
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-[var(--text-primary)] tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-base font-semibold text-[var(--color-sahara-terracotta)] mt-1.5">
                    {metric.title}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border-subtle)]">
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
