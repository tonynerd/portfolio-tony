import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => (
  <section id="stack" className="py-24 bg-[#080808]">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Arsenal Tecnológico</h2>
        <p className="text-slate-500">Ferramentas escolhidas para robustez e escalabilidade.</p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto"
      >
        {[
          "React", "Next.js", "TypeScript", "Node.js", "Firebase", 
          "Tailwind CSS", "PostgreSQL", "Git", "Framer Motion", "Vercel"
        ].map((tech, i) => (
          <div key={i} className="flex items-center justify-center gap-2 p-4 rounded-lg bg-[#050505] border border-white/5 hover:border-blue-500/30 transition-colors text-slate-400 hover:text-white group cursor-default">
            <div className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors" />
            <span className="font-mono text-sm">{tech}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TechStack;
