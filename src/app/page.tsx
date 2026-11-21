'use client';

import React from 'react';
import { Header } from '@/components/david/Header';
import { Hero } from '@/components/david/Hero';
import { About } from '@/components/david/About';
import { Projects } from '@/components/david/Projects';
import { Articles } from '@/components/david/Articles';
import { Contact } from '@/components/david/Contact';
import { Footer } from '@/components/david/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full">
        <Hero />
        <About />
        <Projects />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
