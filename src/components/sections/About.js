import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Smartphone, Terminal, Layers } from 'lucide-react';

const About = () => (
  <section id="about" className="py-24 bg-gradient-to-b from-[#050505] to-[#080808] border-y border-white/5">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">O Código é minha Terapia.</h2>
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              Não sou apenas um desenvolvedor, sou um <span className="text-white">solucionador de problemas</span>. 
              Enquanto muitos fogem da complexidade, eu a persigo.
            </p>
            <p>
              Meu diferencial é o uso estratégico do <strong className="text-purple-400">Hiperfoco</strong>. 
              Essa característica me permite mergulhar profundamente em lógicas difíceis e emergir com 
              soluções elegantes em tempo recorde.
            </p>
            <p className="border-l-4 border-blue-500 pl-4 italic text-slate-500">
              "Valor monetário é secundário; o desafio é o combustível."
            </p>
          </div>
        </motion.div>

        {/* Visual Stats */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { icon: <Zap size={28} />, label: "Hiperfoco", sub: "Deep Work", color: "text-yellow-400" },
            { icon: <Smartphone size={28} />, label: "Mobile First", sub: "Responsivo", color: "text-blue-400" },
            { icon: <Terminal size={28} />, label: "Backend", sub: "Node & TS", color: "text-green-400" },
            { icon: <Layers size={28} />, label: "Frontend", sub: "React & UI", color: "text-purple-400" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm">
              <div className={`${stat.color} mb-4`}>{stat.icon}</div>
              <h4 className="text-xl font-bold text-white">{stat.label}</h4>
              <p className="text-sm text-slate-500">{stat.sub}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  </section>
);

export default About;
