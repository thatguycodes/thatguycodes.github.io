'use client';

import React from 'react';
import { consultingPackages } from '@/data/portfolio';
import { Card, CardContent, Badge, buttonVariants } from '@thatguycodes/design-system/web';
import { Check, ArrowRight, ShieldCheck, TrendingDown, Briefcase } from 'lucide-react';

export function ConsultingServices() {
  const getPackageIcon = (id: string) => {
    switch (id) {
      case 'resilience-audit':
        return <ShieldCheck className="w-5 h-5 text-[var(--color-sahara-amber-bright)]" />;
      case 'cloud-finops':
        return <TrendingDown className="w-5 h-5 text-[var(--color-sahara-terracotta)]" />;
      case 'fractional-architect':
      default:
        return <Briefcase className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="consulting" className="w-full py-20 bg-[var(--bg-elevated)]/30 border-y border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="amber" className="text-xs font-mono font-bold tracking-widest uppercase mb-2">
            03 // CONSULTING & ADVISORY ENGAGEMENTS
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mt-1 tracking-tight">
            High-Impact Technical Advisory for Growing Engineering Teams
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-3">
            Outcome-focused consulting packages designed to eliminate architecture bottlenecks, reduce cloud expenditure, and scale engineering organizations safely.
          </p>
        </div>

        {/* 3-Column Service Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {consultingPackages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`bg-[var(--bg-surface)] flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? 'border-2 border-[var(--color-sahara-amber)] shadow-xl lg:-translate-y-2'
                  : 'border border-[var(--border-subtle)] hover:border-[var(--color-sahara-amber)]/50 shadow-md'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[var(--color-sahara-amber)] to-[var(--color-sahara-terracotta)] text-amber-950 text-[10px] font-mono font-extrabold uppercase px-3 py-1 rounded-full shadow-sm tracking-wide">
                    MOST REQUESTED SPRINT
                  </span>
                </div>
              )}

              <CardContent className="p-6 sm:p-8 flex flex-col justify-between h-full">
                <div>
                  {/* Badge & Duration */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono font-bold text-[var(--color-sahara-amber-bright)] uppercase tracking-wider">
                      {pkg.badge}
                    </span>
                    <div className="p-2 rounded-lg bg-[var(--bg-elevated)]">
                      {getPackageIcon(pkg.id)}
                    </div>
                  </div>

                  {/* Title & Duration */}
                  <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-[var(--color-sahara-terracotta)] font-mono font-semibold mb-4">
                    Duration: {pkg.duration}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Ideal For */}
                  <div className="bg-[var(--bg-canvas)] border border-[var(--border-subtle)] rounded-lg p-3.5 mb-6">
                    <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block mb-1">
                      Ideal For
                    </span>
                    <p className="text-xs font-medium text-[var(--text-primary)]">
                      {pkg.idealFor}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider font-semibold block">
                      Core Deliverables:
                    </span>
                    {pkg.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                        <Check className="w-4 h-4 text-[var(--color-sahara-amber-bright)] shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <a
                    href="#contact-advisory"
                    className={buttonVariants({
                      variant: pkg.popular ? 'amber' : 'outline',
                      size: 'default',
                      className: `w-full flex items-center justify-center gap-2 font-semibold shadow-sm ${
                        pkg.popular
                          ? 'text-amber-950'
                          : 'border-[var(--border-base)] text-[var(--text-primary)] hover:border-[var(--color-sahara-amber)] hover:bg-[var(--bg-elevated)]'
                      }`,
                    })}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
