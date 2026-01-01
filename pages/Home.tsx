
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { getFeaturedProjects } from '../lib/projects';
import SectionHeader from '../components/SectionHeader';

const Home: React.FC = () => {
  const featured = getFeaturedProjects();

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section 首页主视觉 */}
      <section className="max-w-[1200px] mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mono text-[10px] uppercase tracking-[0.3em] text-blue-600 font-bold mb-4 block">
            Senior Full-Stack Engineer
          </span>
          <h1 className="text-5xl md:text-8xl font-semibold tracking-tight leading-[0.95] text-slate-900 mb-8">
            Building digital <br />
            <span className="text-slate-400">experiences</span> with <br />
            technical <span className="italic">finesse.</span>
          </h1>
          <div className="max-w-xl">
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10">
              Qiyue Chen is an engineer specializing in high-concurrency systems and editorial frontend design. Currently architecting resilient web ecosystems.
            </p>
            <div className="flex items-center space-x-8">
              <Link 
                to="/projects" 
                className="group flex items-center text-sm uppercase tracking-widest font-bold text-slate-900"
              >
                Explore Work 
                <span className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
              <div className="h-[1px] w-12 bg-slate-200"></div>
              <a href="mailto:hello@qiyue.com" className="text-sm text-slate-400 hover:text-blue-600 transition-colors">
                Available for freelance
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects 精选项目 */}
      <section className="max-w-[1200px] mx-auto px-6 mb-32">
        <SectionHeader 
          eyebrow="Portfolio" 
          title="Selected Projects" 
          description="A curated selection of work focusing on system architecture and interactive design."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {featured.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group"
            >
              <Link to={`/projects/${project.slug}`} className="block">
                <div className="aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden mb-6 relative border border-black/[0.03]">
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors z-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <span className="px-6 py-2 bg-white rounded-full text-xs font-bold uppercase tracking-widest text-slate-900 shadow-xl scale-90 group-hover:scale-100 transition-transform">
                      View Case Study
                    </span>
                  </div>
                  {/* Placeholder for project image */}
                  <div className="w-full h-full flex items-center justify-center text-slate-300 font-bold text-4xl select-none italic">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{project.title}</h3>
                    <div className="flex space-x-2">
                      {project.categoryTags.map(tag => (
                        <span key={tag} className="mono text-[10px] text-slate-400 uppercase tracking-wider">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <span className="mono text-[10px] text-slate-300">0{idx + 1}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section 关于部分 */}
      <section className="border-t border-black/[0.05] pt-32 pb-32">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-1">
            <span className="mono text-[10px] uppercase tracking-[0.2em] text-slate-400 block mb-3">Capabilities</span>
            <ul className="space-y-2 text-slate-900 font-medium">
              <li>Full-Stack Engineering</li>
              <li>Distributed Systems</li>
              <li>Cloud Architecture (AWS)</li>
              <li>UI/UX Design Systems</li>
              <li>AI/LLM Integration</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-semibold text-slate-900 mb-8 leading-snug">
              I collaborate with forward-thinking teams to build products that are as performant as they are beautiful. My process is rooted in logic, driven by curiosity.
            </h2>
            <Link to="/resume" className="text-sm font-bold border-b-2 border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
              Read my full story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
