'use client';

import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent, Card, CardContent, Badge } from '@thatguycodes/design-system/web';
import { skillsData } from '@/data/portfolio';

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-[var(--bg-canvas)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="amber" className="text-xs font-semibold uppercase tracking-wider mb-2">
            Technical Stack
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mt-1 tracking-tight">
            Skills & Core Competencies
          </h2>
          <p className="text-[var(--text-secondary)] mt-3 text-sm sm:text-base">
            Proficiencies across backend microservices, modern reactive frontends, cloud engineering, and database management.
          </p>
        </div>

        {/* Sahara UI Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-[var(--bg-elevated)] border border-[var(--border-subtle)] p-1 rounded-xl">
              <TabsTrigger value="all" className="text-xs sm:text-sm">All Skills</TabsTrigger>
              <TabsTrigger value="backend" className="text-xs sm:text-sm">Backend</TabsTrigger>
              <TabsTrigger value="frontend" className="text-xs sm:text-sm">Frontend</TabsTrigger>
              <TabsTrigger value="cloud" className="text-xs sm:text-sm">Cloud & DevOps</TabsTrigger>
              <TabsTrigger value="databases" className="text-xs sm:text-sm">Databases</TabsTrigger>
            </TabsList>
          </div>

          {/* All Skills Tab */}
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillsData.map((category) => (
                <Card
                  key={category.title}
                  className="bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--color-sahara-amber)]/40 transition-all shadow-sm"
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-sahara-amber-bright)] shadow-sm shadow-amber-400/50" />
                      <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill.name}
                          variant="secondary"
                          className="px-3 py-1.5 text-xs sm:text-sm bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--color-sahara-amber-bright)] transition-colors"
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Backend Tab */}
          <TabsContent value="backend" className="mt-0">
            <Card className="bg-[var(--bg-surface)] border-[var(--border-subtle)] max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Backend & Distributed Systems</h3>
                <div className="flex flex-wrap gap-3">
                  {skillsData[0].skills.map((skill) => (
                    <Badge key={skill.name} variant="amber" className="text-sm px-3.5 py-1.5">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Frontend Tab */}
          <TabsContent value="frontend" className="mt-0">
            <Card className="bg-[var(--bg-surface)] border-[var(--border-subtle)] max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Frontend Engineering</h3>
                <div className="flex flex-wrap gap-3">
                  {skillsData[1].skills.map((skill) => (
                    <Badge key={skill.name} variant="terracotta" className="text-sm px-3.5 py-1.5">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Cloud Tab */}
          <TabsContent value="cloud" className="mt-0">
            <Card className="bg-[var(--bg-surface)] border-[var(--border-subtle)] max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Cloud Architecture & DevOps</h3>
                <div className="flex flex-wrap gap-3">
                  {skillsData[2].skills.map((skill) => (
                    <Badge key={skill.name} variant="emerald" className="text-sm px-3.5 py-1.5">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Databases Tab */}
          <TabsContent value="databases" className="mt-0">
            <Card className="bg-[var(--bg-surface)] border-[var(--border-subtle)] max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Databases & Persistence</h3>
                <div className="flex flex-wrap gap-3">
                  {skillsData[3].skills.map((skill) => (
                    <Badge key={skill.name} variant="sandstone" className="text-sm px-3.5 py-1.5">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
