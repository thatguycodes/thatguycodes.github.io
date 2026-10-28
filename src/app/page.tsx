'use client';

import { Hero } from '@/components/Hero';
import { Metrics } from '@/components/Metrics';
import { ArchitectureDomains } from '@/components/ArchitectureDomains';
import { ConsultingServices } from '@/components/ConsultingServices';
import { LeadershipPrinciples } from '@/components/LeadershipPrinciples';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <ArchitectureDomains />
      <ConsultingServices />
      <LeadershipPrinciples />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
