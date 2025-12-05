import React from 'react';
import { ArrowRight, Code2 } from 'lucide-react';

const Blog = () => (
  <section id="blog" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-blue-600/5 pointer-events-none" />
    <div className="container mx-auto px-6">
      <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px]" />
        
        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <span className="text-blue-500 font-mono text-sm mb-4 block">ARTIGO EM DESTAQUE</span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              A Engenharia do Invisível
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Por que sistemas verdadeiramente robustos devem ser imperceptíveis para o usuário final? 
              Uma análise sobre a importância de esconder a complexidade do back-end atrás de uma 
              interface intuitiva e "conservadora".
            </p>
            <button onClick={() => alert('Artigo em breve!')} className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-400 transition-colors bg-transparent border-none cursor-pointer">
              Ler Artigo Completo <ArrowRight size={18} />
            </button>
          </div>
          
          <div className="w-full md:w-1/3 aspect-square bg-gradient-to-tr from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center border border-white/10">
            <Code2 size={64} className="text-slate-700" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Blog;
