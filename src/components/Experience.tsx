'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Badge } from '@thatguycodes/design-system/web';
import { experienceData } from '@/data/portfolio';
import { CheckCircle2, Building, Calendar } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-[var(--border-subtle)] bg-[var(--bg-elevated)]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="terracotta" className="text-xs font-mono font-bold tracking-widest uppercase mb-2">
            06 // TRACK RECORD & LEADERSHIP
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mt-1 tracking-tight">
            Engineering & Systems Track Record
          </h2>
          <p className="text-[var(--text-secondary)] mt-3 text-sm sm:text-base">
            Hands-on systems architecture, telecom backbone engineering, nationwide infrastructure provisioning, and frontend microservices.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-[var(--border-base)] ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
          {experienceData.map((exp, idx) => (
            <div key={`${exp.company}-${idx}`} className="relative group">
              {/* Timeline Indicator Pin */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-4 w-4 h-4 rounded-full bg-[var(--bg-canvas)] border-2 border-[var(--color-sahara-amber-bright)] group-hover:bg-[var(--color-sahara-amber-bright)] transition-colors" />

              {/* Sahara UI Card */}
              <Card className="bg-[var(--bg-surface)] border-[var(--border-subtle)] group-hover:border-[var(--color-sahara-amber)]/40 transition-all shadow-sm">
                <CardHeader className="p-6 pb-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-xl font-bold text-[var(--text-primary)]">
                      {exp.role}
                    </CardTitle>

                    <Badge variant="amber" className="text-xs font-mono w-fit">
                      <Calendar className="w-3 h-3 mr-1" />
                      {exp.period}
                    </Badge>
                  </div>

                  <CardDescription className="flex items-center gap-2 text-sm text-[var(--text-secondary)] pt-1">
                    <Building className="w-4 h-4 text-[var(--color-sahara-amber)]" />
                    <span className="font-medium text-[var(--text-primary)]">{exp.company}</span>
                    <span>&bull;</span>
                    <span>{exp.location}</span>
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 pt-3">
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start text-xs sm:text-sm text-[var(--text-secondary)]">
                        <CheckCircle2 className="w-4 h-4 text-[var(--color-sahara-amber-bright)] mr-2 mt-0.5 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-3 border-t border-[var(--border-subtle)]">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="sandstone"
                        className="text-xs font-mono"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
