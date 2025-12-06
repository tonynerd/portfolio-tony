import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Github, Instagram } from 'lucide-react';
import { socials } from '../../api/socials';

const Footer = () => {
  const IS_WORKANA_MODE = process.env.REACT_APP_WORKANA_MODE === 'true';
  const socialIcons = {
    whatsapp: <MessageCircle className="text-green-500 group-hover:scale-110 transition-transform" />,
    email: <Mail className="text-blue-500 group-hover:scale-110 transition-transform" />,
    github: <Github className="text-slate-400 group-hover:text-white group-hover:scale-110 transition-transform" />,
    instagram: <Instagram className="text-pink-500 group-hover:scale-110 transition-transform" />
  };

  return (
    <footer id="contact" className="py-20 border-t border-white/10 bg-[#020202]">
      <div className="container mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Tem um projeto complexo?</h2>
          <p className="text-slate-400 mb-10 text-lg">
            Vamos transformar suas ideias difíceis em código elegante e funcional.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
            {socials.map(social => {
              // Na versão Workana, oculta WhatsApp e Email
              if (IS_WORKANA_MODE && (social.name === 'whatsapp' || social.name === 'email')) {
                return null;
              }
              
              return (
                <a 
                  key={social.name}
                  href={social.url} 
                  className={`flex items-center justify-center gap-3 px-6 py-4 bg-white/5 hover:bg-${social.color}-600/20 border border-white/10 hover:border-${social.color}-500/50 rounded-xl text-white transition-all group`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socialIcons[social.name]}
                  {social.text}
                </a>
              );
            })}
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm">
            <p>© {new Date().getFullYear()} Tony Aguiar. Todos os direitos reservados.</p>
            <p className="flex items-center gap-1 mt-2 md:mt-0">
              Desenvolvido com <span className="text-blue-500 font-semibold">Ritalina</span> + Hiperfoco.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
