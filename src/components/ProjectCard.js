import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-500"
    >
      {/* Background Gradient Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      <div className="p-8 h-full flex flex-col relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className={`p-3 rounded-lg bg-white/5 border border-white/10 ${project.iconColor}`}>
            {project.icon}
          </div>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
            <ExternalLink size={20} />
          </a>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 mb-6 flex-grow leading-relaxed text-sm">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.stack.map((tech) => (
            <span key={tech} className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/5">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
