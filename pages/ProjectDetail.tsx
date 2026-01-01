
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Cpu, Layout, Code } from 'lucide-react';
import Container from '../components/Container';
import EngineeringHighlights from '../components/EngineeringHighlights';
import { getProjectBySlug } from '../lib/projects';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <div className="pt-32 pb-20">
      <Container>
        {/* Header Section 详情页头部 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/projects" className="group inline-flex items-center text-xs uppercase tracking-widest font-bold text-slate-400 hover:text-blue-600 transition-colors mb-12">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            All Works
          </Link>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-8">{project.title}</h1>
          <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-4xl mb-16">
            {project.shortDescription}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-12 border-t border-b border-black/[0.05] mb-20">
            <div>
              <span className="mono text-[10px] text-slate-400 uppercase tracking-widest block mb-2">Category</span>
              <span className="text-sm font-bold text-slate-900">{project.categoryTags.join(' / ')}</span>
            </div>
            <div>
              <span className="mono text-[10px] text-slate-400 uppercase tracking-widest block mb-2">Role</span>
              <span className="text-sm font-bold text-slate-900">{project.role || 'Senior Engineer'}</span>
            </div>
            <div>
              <span className="mono text-[10px] text-slate-400 uppercase tracking-widest block mb-2">Timeline</span>
              <span className="text-sm font-bold text-slate-900">2023 - 2024</span>
            </div>
            <div className="flex space-x-4">
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" className="p-3 bg-slate-900 text-white rounded-full hover:bg-blue-600 transition-colors">
                  <Github size={18} />
                </a>
              )}
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" className="p-3 bg-blue-600 text-white rounded-full hover:bg-slate-900 transition-colors">
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Case Study Content 案例研究正文 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2 space-y-24">
            <section>
              <h2 className="text-xs uppercase tracking-[0.3em] text-slate-400 font-bold mb-8 flex items-center">
                <Layout size={14} className="mr-2" /> Context
              </h2>
              <div className="text-lg text-slate-700 leading-relaxed">
                {project.longDescription}
                {project.context && <p className="mt-6 font-medium text-slate-900">{project.context}</p>}
              </div>
            </section>

            {project.architecture && (
              <section className="bg-slate-900 text-white p-10 rounded-3xl">
                <h2 className="text-[10px] uppercase tracking-[0.3em] text-blue-400 font-bold mb-8 flex items-center">
                  <Cpu size={14} className="mr-2" /> Architecture Focus
                </h2>
                <p className="text-xl leading-relaxed text-slate-300 italic">
                  "{project.architecture}"
                </p>
                {project.decisions && (
                  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.decisions.map((d, i) => (
                      <div key={i} className="p-4 border border-white/10 rounded-xl text-sm text-slate-400">
                        <span className="text-white font-bold block mb-1">Decision 0{i+1}</span>
                        {d}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            )}

            <section>
              <h2 className="text-xs uppercase tracking-[0.3em] text-slate-400 font-bold mb-8 flex items-center">
                <Code size={14} className="mr-2" /> Engineering Highlights
              </h2>
              <EngineeringHighlights highlights={project.highlights} />
            </section>

            {project.demoUrl && (
              <section>
                <h2 className="text-xs uppercase tracking-[0.3em] text-slate-400 font-bold mb-8">Live Preview</h2>
                <div className="aspect-video bg-white border border-black/[0.05] rounded-3xl overflow-hidden shadow-2xl">
                   <iframe src={project.demoUrl} className="w-full h-full" title="Demo" />
                </div>
              </section>
            )}
          </div>

          {/* Sidebar 侧边栏 */}
          <aside className="space-y-12">
            <div>
              <h3 className="mono text-[10px] text-slate-400 uppercase tracking-widest block mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(t => (
                  <span key={t} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded text-xs font-semibold text-slate-600">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {project.results && (
              <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
                <h3 className="mono text-[10px] text-blue-600 uppercase tracking-widest block mb-4">Key Result</h3>
                <p className="text-lg font-bold text-slate-900 italic">
                  {project.results}
                </p>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </div>
  );
};

export default ProjectDetail;
