import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';

const Hero = () => {
  const IS_WORKANA_MODE = process.env.REACT_APP_WORKANA_MODE === 'true';

  return (
  <section className="relative min-h-screen flex items-center pt-16">
    {/* Abstract Background Elements */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
    
    <div className="container mx-auto px-6 z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs text-blue-400 mb-8 font-mono tracking-wide">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          DISPONÍVEL PARA PROJETOS COMPLEXOS
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
          Soluções Audaciosas. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600">
            Usabilidade Conservadora.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed border-l-2 border-blue-500/30 pl-6">
          Engenharia robusta para problemas reais. Transformo complexidade técnica e 
          <span className="text-white font-semibold"> hiperfoco</span> em sistemas de alta performance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          {IS_WORKANA_MODE ? (
            // Versão Workana - Apenas botão Workana
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.workana.com/freelancer/2ce486df83a8d15d5096210f0a150e0a"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(37,99,235,0.2)]"
            >
              Contratar via Workana <ArrowRight size={20} />
            </motion.a>
          ) : (
            // Versão Completa - Botões originais
            <>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/5577981327367"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(37,99,235,0.2)]"
              >
                Iniciar Projeto <ArrowRight size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/tonynerd"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/10 hover:border-white/30 text-white rounded-lg font-semibold transition-all bg-white/5 backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <Github size={20} /> GitHub
              </motion.a>
            </>
          )}
        </div>
      </motion.div>
    </div>

    {/* Scroll Indicator */}
    <motion.div 
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600"
    >
      <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">
        <div className="w-1 h-1 bg-slate-600 rounded-full" />
      </div>
    </motion.div>
  </section>
  );
};

export default Hero;
