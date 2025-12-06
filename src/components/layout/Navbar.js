import React, { useState, useEffect } from 'react';
import { Github, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const IS_WORKANA_MODE = process.env.REACT_APP_WORKANA_MODE === 'true';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projetos', href: '#projects' },
    { name: 'Sobre', href: '#about' },
    { name: 'Skills', href: '#stack' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xl font-bold text-white tracking-tighter flex items-center gap-2 bg-transparent border-none cursor-pointer">
          <span className="text-blue-500">&lt;</span>
          TonyAguiar
          <span className="text-blue-500">/&gt;</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              {link.name}
            </a>
          ))}
          {!IS_WORKANA_MODE && (
            // GitHub só aparece na versão completa
            <a 
              href="https://github.com/tonynerd"
              target="_blank"
              rel="noreferrer" 
              className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/5"
            >
              <Github size={20} className="text-white" />
            </a>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-white/10"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-300 hover:text-blue-400 py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
