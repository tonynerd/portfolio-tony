import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ children, subtitle }) => (
  <div className="mb-12 md:mb-20">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
    >
      {children}
    </motion.h2>
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="h-1 w-20 bg-blue-600 rounded-full mb-4"
    />
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-slate-400 max-w-xl"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default SectionHeading;
