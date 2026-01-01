
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import Container from '../components/Container';
import { projects } from '../lib/projects';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const categories = ['All', ...Array.from(new Set(projects.flatMap(p => p.categoryTags)))];

  const filtered = projects.filter(p => {
    const matchesFilter = filter === 'All' || p.categoryTags.includes(filter);
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                          p.shortDescription.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-32 pb-20">
      <Container>
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mono text-[10px] uppercase tracking-[0.3em] text-slate-400 block mb-4"
          >
            Archive
          </motion.span>
          <h1 className="text-5xl font-semibold tracking-tight text-slate-900 mb-10">Selected Works</h1>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-black/[0.05]">
            {/* Filters 过滤器 */}
            <div className="flex flex-wrap gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold rounded-full transition-all border ${
                    filter === cat ? 'bg-slate-900 border-slate-900 text-white' : 'bg-transparent border-slate-200 text-slate-500 hover:border-slate-900 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search 搜索 */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search projects..." 
                className="pl-12 pr-6 py-3 bg-slate-50 border border-slate-200 rounded-full text-xs focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all w-full md:w-64"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <Link to={`/projects/${project.slug}`} className="block">
                  <div className="aspect-[16/10] bg-slate-100 rounded-xl overflow-hidden mb-5 border border-black/[0.02]">
                    <div className="w-full h-full flex items-center justify-center text-slate-200 text-6xl font-black italic select-none">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map(tech => (
                      <span key={tech} className="mono text-[9px] uppercase tracking-tighter text-slate-400 border border-slate-200 px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
