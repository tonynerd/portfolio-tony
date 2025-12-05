import React, { useState } from 'react';
import { ArrowRight, Code2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Blog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
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
                <p className="text-slate-500 text-sm mb-2 italic">
                  A complexidade é problema meu. A simplicidade é direito do usuário.
                </p>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  Por que sistemas verdadeiramente robustos devem ser imperceptíveis para o usuário final? 
                  Uma análise sobre a importância de esconder a complexidade do back-end atrás de uma 
                  interface intuitiva e "conservadora".
                </p>
                <button onClick={openModal} className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-400 transition-colors bg-transparent border-none cursor-pointer">
                  Ler Artigo Completo <ArrowRight size={18} />
                </button>
              </div>
              
              <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden border border-white/10">
                <img 
                  src="/blog-image.jpeg" 
                  alt="A Engenharia do Invisível"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-tr from-slate-900 to-slate-800 flex items-center justify-center" style={{display: 'none'}}>
                  <Code2 size={64} className="text-slate-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal do Artigo */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 max-w-4xl max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-2"
              >
                <X size={24} />
              </button>

              <article className="prose prose-invert max-w-none">
                <header className="mb-8">
                  <h1 className="text-4xl font-bold text-white mb-4">A Engenharia do Invisível</h1>
                  <p className="text-xl text-slate-300 italic mb-6">A complexidade é problema meu. A simplicidade é direito do usuário.</p>
                </header>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Introdução</h2>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Um bom sistema é como eletricidade: você só nota que ela existe quando falta. Na nossa indústria, 
                    tendemos a glorificar a complexidade. Arquiteturas de microsserviços, clusters de Kubernetes, 
                    algoritmos de grafos... tudo isso é fascinante para nós, engenheiros. Mas para o usuário final — 
                    seja um médico usando o e-SUS ou um cliente assistindo à OneTv+ — a única coisa que importa é o clique.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">O Paradoxo do Iceberg</h2>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Meus projetos seguem a regra do iceberg. 90% do trabalho é invisível: é a latência reduzida no servidor, 
                    a tratativa de erros no Firebase, a segurança dos dados. Os 10% visíveis devem ser "conservadores". 
                    Não invento moda na usabilidade. Botão tem cara de botão, link tem cara de link.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">O Custo Cognitivo (e o Hiperfoco)</h2>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Como alguém que convive com o TDA, sei o quanto a atenção é um recurso valioso e escasso. 
                    Meu hiperfoco é uma ferramenta que uso para garantir que o seu usuário não precise gastar 
                    a atenção dele tentando entender como o sistema funciona. Eu mergulho na complexidade para 
                    que o usuário possa navegar na simplicidade.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Conclusão</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Ser um desenvolvedor "Full Stack" não é apenas saber fazer o front e o back. É saber construir 
                    um back-end tão robusto que permita ao front-end ser incrivelmente simples. O sistema perfeito 
                    não é aquele que tem mais funcionalidades; é aquele que se torna invisível, permitindo que o 
                    usuário cumpra seu objetivo sem barreiras.
                  </p>
                </section>
              </article>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Blog;
