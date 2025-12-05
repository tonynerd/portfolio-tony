import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import TechStack from './components/sections/TechStack';
import Blog from './components/sections/Blog';

export default function Portfolio() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
