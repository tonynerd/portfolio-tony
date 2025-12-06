import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import TechStack from './components/sections/TechStack';
import Blog from './components/sections/Blog';
import SafeModeConfig from './config/SafeModeConfig';

export default function Portfolio() {
  // Safe Mode - Controla o modo de visualização baseado em variável de ambiente
  const currentMode = SafeModeConfig.getCurrentMode();

  // Log de debug em desenvolvimento
  if (process.env.NODE_ENV === 'development') {
    console.log('🔧 Safe Mode Debug Info:', SafeModeConfig.getDebugInfo());
  }

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
      
      {/* Indicador visual do modo em desenvolvimento */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 right-4 z-50 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-mono">
          {currentMode.name}
        </div>
      )}
    </div>
  );
}
