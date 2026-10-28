'use client';

import React, { useState } from 'react';
import { architecturalDomains } from '@/data/portfolio';
import { Badge } from '@thatguycodes/design-system/web';
import {
  Server,
  UsersRound,
  PiggyBank,
  Cpu,
  CheckCircle2,
  Zap,
} from 'lucide-react';

export function ArchitectureDomains() {
  const [activeTab, setActiveTab] = useState(0);
  const currentDomain = architecturalDomains[activeTab];

  const getDomainIcon = (id: number) => {
    switch (id) {
      case 0:
        return <Server className="w-4 h-4" />;
      case 1:
        return <UsersRound className="w-4 h-4" />;
      case 2:
        return <PiggyBank className="w-4 h-4" />;
      case 3:
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  return (
    <section id="architectural-domains" className="w-full py-20 bg-[var(--bg-canvas)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <Badge variant="terracotta" className="text-xs font-mono font-bold tracking-widest uppercase w-fit">
            02 // SPECIALIZED ARCHITECTURAL COMPETENCIES
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Systems Engineering & Technical Direction Domains
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl">
            Deep structural execution across the foundational stack. Select a domain below to inspect core topologies, architectural tradeoffs, and strategic playbooks.
          </p>
        </div>

        {/* Interactive Switcher Shell */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Tab Controls (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {architecturalDomains.map((domain) => {
              const isActive = activeTab === domain.id;
              return (
                <button
                  key={domain.id}
                  type="button"
                  onClick={() => setActiveTab(domain.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all flex items-start gap-3.5 border ${
                    isActive
                      ? 'bg-[var(--bg-elevated)] border-[var(--color-sahara-amber)] shadow-md'
                      : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--color-sahara-amber)]/40 hover:bg-[var(--bg-elevated)]/50'
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg mt-0.5 transition-colors ${
                      isActive
                        ? 'bg-[var(--color-sahara-amber)] text-amber-950 font-bold'
                        : 'bg-[var(--bg-canvas)] text-[var(--text-secondary)]'
                    }`}
                  >
                    {getDomainIcon(domain.id)}
                  </div>
                  <div>
                    <div
                      className={`font-mono text-[10px] tracking-wider uppercase font-bold ${
                        isActive
                          ? 'text-[var(--color-sahara-amber-bright)]'
                          : 'text-[var(--text-muted)]'
                      }`}
                    >
                      {domain.badge}
                    </div>
                    <div className="text-base font-semibold text-[var(--text-primary)]">
                      {domain.shortTitle}
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] line-clamp-1 mt-0.5">
                      {domain.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Dynamic Detail Canvas (8 Cols) */}
          <div className="lg:col-span-8 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
            {/* Header Telemetry Pill */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--border-subtle)]">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-1 rounded bg-[var(--color-sahara-amber)]/20 text-[var(--color-sahara-amber-bright)] text-xs font-mono font-bold">
                  DOMAIN // {currentDomain.shortTitle.toUpperCase()}
                </span>
                <span className="text-xs font-mono text-[var(--text-secondary)]">
                  {currentDomain.targetSla}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--color-sahara-terracotta)] font-semibold">
                <Zap className="w-3.5 h-3.5" />
                <span>{currentDomain.consensus}</span>
              </div>
            </div>

            {/* Title & Description */}
            <div className="mt-6 mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                {currentDomain.title}
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mt-3">
                {currentDomain.description}
              </p>
            </div>

            {/* Interactive Topology Spec Terminal Box */}
            <div className="bg-[var(--bg-canvas)] border border-[var(--border-subtle)] rounded-xl p-4 sm:p-5 font-mono text-xs text-[var(--text-secondary)] mb-6">
              <div className="text-[var(--text-primary)] font-bold mb-3 flex items-center justify-between">
                <span>&gt; ARCHITECTURE_TOPOLOGY_SPEC:</span>
                <span className="text-[var(--color-sahara-amber-bright)] text-[11px]">
                  ACTIVE // VERIFIED
                </span>
              </div>
              <div className="space-y-2 text-[12px]">
                {currentDomain.topology.map((t, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 border-b border-[var(--border-subtle)]/60 last:border-0 gap-1"
                  >
                    <span className="text-[var(--color-sahara-amber-bright)] font-semibold">
                      {t.label}
                    </span>
                    <span className="text-[var(--text-primary)] text-right sm:text-left">
                      {t.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables & Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {currentDomain.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-sahara-amber-bright)] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-[var(--text-primary)]">
                      {item.title}
                    </div>
                    <div className="text-xs text-[var(--text-secondary)] mt-0.5">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
