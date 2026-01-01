
import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';

const Blog: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <Container>
        <div className="max-w-2xl">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mono text-[10px] uppercase tracking-[0.3em] text-slate-400 block mb-4"
          >
            Journal
          </motion.span>
          <h1 className="text-5xl font-semibold tracking-tight text-slate-900 mb-10">Occasional <span className="text-slate-400">writings</span> on code and systems.</h1>
          
          <div className="space-y-16 mt-20">
             <div className="p-10 bg-slate-100 rounded-3xl border border-black/[0.03] text-center">
                <h2 className="text-xl font-bold text-slate-900 mb-2">Refining the narrative...</h2>
                <p className="text-slate-500">I'm currently curating my latest findings on microservice resilience and design patterns. Subscribe for updates.</p>
                <div className="mt-8">
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                  />
                </div>
             </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
