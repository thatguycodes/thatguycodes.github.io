'use client';

import React from 'react';
import Image from 'next/image';
import { Badge, buttonVariants } from '@thatguycodes/design-system/web';
import { personalInfo } from '@/data/portfolio';
import {
  ArrowDownRight,
  Calendar,
  ShieldCheck,
  Users,
  Activity,
  Layers,
} from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden blueprint-grid border-b border-[var(--border-subtle)] pt-12 pb-20 lg:pt-16 lg:pb-24">
      {/* Ambient Desert Glow Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[var(--color-sahara-amber)]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-sahara-terracotta)]/15 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Executive Mission & Levers (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* Live Telemetry Status Pill */}
            <div className="inline-flex items-center gap-2.5 bg-[var(--bg-elevated)]/90 border border-[var(--border-subtle)] backdrop-blur-md px-3.5 py-1.5 rounded-full w-fit shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-sahara-amber-bright)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-sahara-amber-bright)]" />
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] font-semibold">
                PRINCIPAL SYSTEMS ARCHITECT • TECHNICAL ADVISORY
              </span>
              <span className="h-3 w-px bg-[var(--border-subtle)]" />
              <span className="font-mono text-xs text-[var(--color-sahara-amber-bright)] font-semibold hidden sm:inline">
                Advisory Slots Open
              </span>
            </div>

            {/* Hero Headline */}
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.1]">
                Architecting{' '}
                <span className="italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-sahara-amber-bright)] via-[var(--color-sahara-amber)] to-[var(--color-sahara-terracotta)]">
                  Resilient
                </span>{' '}
                Distributed Systems.
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-[var(--color-sahara-terracotta)] tracking-tight">
                Scaling High-Throughput Engineering Orgs from Seed to Tier-1 Scale.
              </p>
            </div>

            {/* Sub-lede description */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl font-normal">
              Unifying low-latency event topologies, deterministic consensus, and human-centric engineering culture. Advising engineering leaders and scaling technical organizations with uncompromising 99.999% availability targets.
            </p>

            {/* System Dimension Indicators */}
            <div className="grid grid-cols-3 gap-4 py-2 border-y border-[var(--border-subtle)]/70 max-w-xl">
              <div className="flex flex-col border-l-2 border-[var(--color-sahara-amber)] pl-3">
                <span className="font-mono text-[10px] sm:text-xs text-[var(--text-muted)] uppercase tracking-wider">
                  Top-Tier Scale
                </span>
                <span className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                  450k TPS
                </span>
                <span className="text-xs text-[var(--text-secondary)]">
                  p99 &lt; 11ms global
                </span>
              </div>

              <div className="flex flex-col border-l-2 border-[var(--color-sahara-terracotta)] pl-3">
                <span className="font-mono text-[10px] sm:text-xs text-[var(--text-muted)] uppercase tracking-wider">
                  Org Growth
                </span>
                <span className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                  140+ Eng
                </span>
                <span className="text-xs text-[var(--text-secondary)]">
                  Staff+ Ladders & DORA
                </span>
              </div>

              <div className="flex flex-col border-l-2 border-amber-600 pl-3">
                <span className="font-mono text-[10px] sm:text-xs text-[var(--text-muted)] uppercase tracking-wider">
                  Cloud FinOps
                </span>
                <span className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                  $14.2M
                </span>
                <span className="text-xs text-[var(--text-secondary)]">
                  Net Egress Salvaged
                </span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#consulting"
                className={buttonVariants({
                  variant: 'amber',
                  size: 'lg',
                  className: 'font-semibold shadow-md flex items-center gap-2 group',
                })}
              >
                <Calendar className="w-4 h-4 text-amber-950" />
                <span>Schedule Architectural Advisory</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <a
                href="#architectural-domains"
                className={buttonVariants({
                  variant: 'outline',
                  size: 'lg',
                  className: 'border-[var(--border-base)] text-[var(--text-primary)] hover:border-[var(--color-sahara-amber)] hover:bg-[var(--bg-elevated)] flex items-center gap-2',
                })}
              >
                <Layers className="w-4 h-4 text-[var(--color-sahara-amber-bright)]" />
                <span>Explore Technical Domains</span>
              </a>
            </div>

            {/* Technical Node Microbar */}
            <div className="flex items-center gap-2 text-[var(--text-muted)] text-[11px] font-mono pt-1">
              <Activity className="w-3.5 h-3.5 text-[var(--color-sahara-amber-bright)]" />
              <span>SYSTEM_NODE: active-active // RAFT-12 // K8S // eBPF // ZERO-TRUST</span>
            </div>
          </div>

          {/* Right Column: Blueprint Portrait Showcase (5 Cols) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Outer Architectural Blueprint Container */}
            <div className="relative w-full max-w-[440px] aspect-[4/5] bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl p-3 shadow-xl">
              {/* Technical Grid Header Line */}
              <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-[var(--border-subtle)] text-[10px] font-mono text-[var(--text-secondary)]">
                <span>SPEC // ARCH-PORTRAIT-v4.1</span>
                <span className="flex items-center gap-1 text-[var(--color-sahara-amber-bright)] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-sahara-amber-bright)] animate-pulse" />
                  CALIBRATED
                </span>
                <span>GRID: -33.9249° S</span>
              </div>

              {/* Image Canvas with Technical Draft Overlay */}
              <div className="relative w-full h-[calc(100%-30px)] rounded-xl overflow-hidden mt-2 bg-[var(--bg-surface)]">
                <Image
                  src="/images/architect-blueprint.png"
                  alt="Principal Systems Architect & Technical Director Portrait in Blueprint Drafting Geometry"
                  fill
                  className="object-cover object-top filter contrast-[1.05]"
                  priority
                />

                {/* Radar Crosshair Graphic */}
                <div className="absolute top-4 right-4 w-14 h-14 pointer-events-none opacity-50">
                  <div className="w-full h-full border border-dashed border-[var(--color-sahara-amber-bright)] rounded-full animate-radar flex items-center justify-center">
                    <div className="w-2 h-2 bg-[var(--color-sahara-amber-bright)] rounded-full" />
                  </div>
                </div>

                {/* Top Left Coordinates Marker */}
                <div className="absolute top-3 left-3 bg-[var(--bg-canvas)]/90 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono text-[var(--text-primary)] border border-[var(--border-subtle)]">
                  LATENCY // &lt;4ms EDGE
                </div>

                {/* Floating Telemetry Chip 1 (Top Left Drift) */}
                <div className="absolute top-16 -left-1 bg-[var(--bg-surface)]/95 backdrop-blur-md border border-[var(--border-subtle)] px-3 py-2 rounded-lg shadow-lg animate-float-1 hidden sm:flex items-center gap-2">
                  <div className="p-1 rounded bg-[var(--color-sahara-amber)]/20 text-[var(--color-sahara-amber-bright)]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                      Resiliency Target
                    </div>
                    <div className="text-xs font-bold text-[var(--text-primary)]">
                      99.999% Fault SLA
                    </div>
                  </div>
                </div>

                {/* Floating Telemetry Chip 2 (Bottom Right Drift) */}
                <div className="absolute bottom-14 -right-1 bg-[var(--bg-surface)]/95 backdrop-blur-md border border-[var(--border-subtle)] px-3 py-2 rounded-lg shadow-lg animate-float-2 hidden sm:flex items-center gap-2">
                  <div className="p-1 rounded bg-[var(--color-sahara-terracotta)]/20 text-[var(--color-sahara-terracotta)]">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                      Scale Directed
                    </div>
                    <div className="text-xs font-bold text-[var(--text-primary)]">
                      140+ Eng Across 4 Hubs
                    </div>
                  </div>
                </div>

                {/* Bottom Blueprint Spec Label */}
                <div className="absolute bottom-2 left-2 right-2 bg-[var(--bg-canvas)]/90 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center justify-between text-[10px] font-mono text-[var(--text-primary)] border border-[var(--border-subtle)]">
                  <span className="flex items-center gap-1.5">
                    <span className="text-[var(--color-sahara-amber-bright)]">◈</span>
                    <span>SYSTEM_TOPOLOGY: ACTIVE-ACTIVE MESH</span>
                  </span>
                  <span className="text-[var(--color-sahara-amber-bright)] font-bold">
                    VERIFIED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
