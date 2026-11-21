'use client';

import React from 'react';
import { articlePlaceholders } from '@/data/portfolio';
import { Notch } from './Notch';
import { Card, Badge } from 'sahara-ui/web';
import { BookOpen, Clock, Calendar, ArrowUpRight, Sparkles } from 'lucide-react';

export function Articles() {
  return (
    <section
      id="articles"
      aria-labelledby="articles-heading"
      className="relative w-full py-28 bg-[var(--color-beige-500)]/40 dark:bg-[#1f1b19] border-t border-[var(--color-border-subtle)]"
    >
      {/* Notch transition at start */}
      <div className="absolute top-0 left-0 right-0 flex justify-between pointer-events-none -translate-y-full text-[var(--color-beige-500)]/40 dark:text-[#1f1b19]">
        <Notch />
        <Notch flipX />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="relative mb-16 sm:mb-20">
          <div className="relative inline-block">
            <div className="absolute -top-6 -left-3 sm:-left-6 transform rotate-[-4deg] z-10">
              <span className="px-3.5 py-1 rounded-md bg-[var(--color-black-400)] text-[var(--color-beige-400)] font-mono text-[11px] font-bold tracking-widest uppercase shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[var(--color-accent-amber,#ffba56)]" aria-hidden="true" />
                ARTICLES
              </span>
            </div>

            <h2
              id="articles-heading"
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-[-0.02em] text-[var(--color-black-400)] pt-3"
            >
              Writing &amp; Notes
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[var(--color-text-300)] mt-4 max-w-xl font-medium">
            Architectural teardowns, distributed systems patterns, and creative engineering notes.
            <span className="font-mono text-xs text-[var(--color-accent-blue)] ml-2">
              [ 03 // TECHNICAL INSIGHTS ]
            </span>
          </p>
        </div>

        {/* Horizontal Featured Feed */}
        <div className="space-y-6 max-w-5xl">
          {articlePlaceholders.map((article, idx) => (
            <Card
              key={article.slug || idx}
              className="group relative overflow-hidden rounded-3xl bg-[var(--color-beige-400)] dark:bg-[#231f1d] border-[var(--color-border-subtle)] hover:border-[var(--color-black-400)] dark:hover:border-white/20 transition-all duration-300 shadow-sm hover:shadow-lg p-6 sm:p-8"
            >
              {/* Left Accent Color Indicator */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 group-hover:w-2"
                style={{ backgroundColor: article.accentColor }}
                aria-hidden="true"
              />

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pl-2">
                {/* Main Content Column */}
                <div className="flex-1 space-y-3">
                  {/* Category, Date & Read Time */}
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <Badge
                      variant="outline"
                      className="px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider border-[var(--color-border-subtle)] bg-[var(--color-beige-500)]/60 dark:bg-white/5 text-[var(--color-black-400)]"
                    >
                      {article.category}
                    </Badge>

                    <div className="flex items-center gap-1.5 text-[var(--color-text-300)] font-mono text-[11px]">
                      <Calendar className="w-3 h-3 opacity-70" aria-hidden="true" />
                      <span>{article.publishedAt}</span>
                    </div>

                    <span className="text-[var(--color-border-subtle)]">&bull;</span>

                    <div className="flex items-center gap-1.5 text-[var(--color-text-300)] font-mono text-[11px]">
                      <Clock className="w-3 h-3 opacity-70" aria-hidden="true" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Article Title */}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--color-black-400)] group-hover:text-[var(--color-accent-blue)] dark:group-hover:text-[var(--color-accent-amber,#ffba56)] transition-colors duration-200">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-[var(--color-text-300)] leading-relaxed max-w-3xl font-medium">
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {article.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2 py-0.5 rounded-md font-mono text-[10px] bg-[var(--color-beige-500)]/40 dark:bg-white/5 text-[var(--color-text-300)] border border-[var(--color-border-subtle)]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Action Button / Indicator */}
                <div className="flex lg:flex-col items-center lg:items-end justify-between pt-4 lg:pt-0 border-t lg:border-t-0 border-[var(--color-border-subtle)] shrink-0">
                  <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[var(--color-black-400)] group-hover:text-[var(--color-accent-blue)] dark:group-hover:text-[var(--color-accent-amber,#ffba56)] transition-colors">
                    <span className="underline-offset-4 group-hover:underline">Read article</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
