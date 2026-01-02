
import React from 'react';
import { notFound } from 'next/navigation';
import Container from '@/components/Container';
import Reveal from '@/components/Reveal';
import Tag from '@/components/Tag';
import DemoFrame from '@/components/DemoFrame';
import { getProjectBySlug, projects } from '@/lib/projects';
import { Github, ExternalLink, ArrowLeft, Cpu, Layout, Workflow, Code, Target } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-40 pb-20">
      <Container>
        {/* Navigation Back */}
        <Link href="/projects" className="group inline-flex items-center text-[10px] uppercase tracking-widest font-bold text-slate-400 hover:text-accent transition-colors mb-12">
          <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Works
        </Link>

        {/* Header Section 详情页头部 */}
        <Reveal>
          <div className="max-w-5xl mb-24">
            <div className="flex flex-wrap gap-2 mb-8">
              {project.categoryTags.map(tag => <Tag key={tag} label={tag} />)}
            </div>
            <h1 className="text-5xl md:text-8xl font-semibold tracking-tighter leading-[0.9] text-foreground mb-10">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-3xl">
              {project.shortDescription}
            </p>
          </div>
        </Reveal>

        {/* Info Grid 基础信息网格 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-12 border-t border-b border-border mb-32">
          <div>
            <span className="font-mono text-[9px] text-slate-300 uppercase tracking-widest block mb-3">Timeline</span>
            <span className="text-sm font-bold">2023 - 2024</span>
          </div>
          <div>
            <span className="font-mono text-[9px] text-slate-300 uppercase tracking-widest block mb-3">Role</span>
            <span className="text-sm font-bold">Lead Engineer</span>
          </div>
          <div>
            <span className="font-mono text-[9px] text-slate-300 uppercase tracking-widest block mb-3">Stack</span>
            <span className="text-sm font-bold">{project.techStack.slice(0, 3).join(', ')}</span>
          </div>
          <div className="flex gap-4">
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" className="p-3 bg-foreground text-background rounded-full hover:bg-accent transition-all hover:scale-110 active:scale-90">
                <Github size={18} />
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" className="p-3 bg-accent text-white rounded-full hover:bg-foreground transition-all hover:scale-110 active:scale-90">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Case Study Sections 案例研究主体 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 space-y-32">
            
            {/* Context & Flow 背景与流程 */}
            <section>
              <h2 className="text-xs uppercase tracking-[0.3em] text-slate-400 font-bold mb-10 flex items-center">
                <Layout size={14} className="mr-3" /> Context & Strategy
              </h2>
              <div className="space-y-8">
                <p className="text-xl text-slate-700 leading-relaxed italic border-l-4 border-accent pl-8">
                  {project.longDescription}
                </p>
                {project.context && (
                  <div className="bg-slate-50 p-10 rounded-3xl hairline">
                    <h3 className="font-bold mb-4">Project Goal</h3>
                    <p className="text-slate-600 leading-relaxed">{project.context}</p>
                  </div>
                )}
                {project.userFlow && (
                  <div className="mt-10">
                    <h3 className="text-sm uppercase tracking-widest font-bold mb-4">User Flow</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{project.userFlow}</p>
                  </div>
                )}
              </div>
            </section>

            {/* Engineering Highlights 工程亮点 */}
            <section>
              <h2 className="text-xs uppercase tracking-[0.3em] text-slate-400 font-bold mb-10 flex items-center">
                <Code size={14} className="mr-3" /> Engineering Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.highlights.map((h, i) => (
                  <div key={i} className="p-8 bg-white hairline rounded-2xl shadow-sm border-l-4 border-accent">
                    <span className="font-mono text-[9px] text-slate-300 block mb-3">FEATURED INNOVATION 0{i+1}</span>
                    <p className="text-sm font-medium leading-relaxed">{h}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Architecture / LLM Architecture 架构设计 */}
            {(project.systemDesign || project.llmWorkflow) && (
              <section className="bg-foreground text-background p-12 md:p-20 rounded-[40px] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] pointer-events-none"></div>
                <h2 className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-12 flex items-center">
                  <Cpu size={14} className="mr-3" /> Technical Architecture
                </h2>
                
                <div className="space-y-16 relative z-10">
                  {project.systemDesign && (
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 text-white">
                        <Workflow size={18} />
                        <h3 className="text-lg font-bold">Core Infrastructure</h3>
                      </div>
                      <p className="text-slate-400 text-base leading-relaxed italic">
                        "{project.systemDesign}"
                      </p>
                    </div>
                  )}
                  {project.llmWorkflow && (
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 text-white">
                        <Target size={18} />
                        <h3 className="text-lg font-bold">LLM Pipeline Design</h3>
                      </div>
                      <p className="text-slate-400 text-base leading-relaxed italic">
                        "{project.llmWorkflow}"
                      </p>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Live Demo 实时演示 */}
            <section>
              <h2 className="text-xs uppercase tracking-[0.3em] text-slate-400 font-bold mb-10">Live Environment</h2>
              <DemoFrame url={project.demoUrl} title={project.title} />
            </section>

          </div>

          {/* Sidebar 侧边栏 */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="sticky top-32">
              <div className="p-8 bg-white hairline rounded-3xl shadow-sm mb-8">
                <h3 className="font-mono text-[9px] text-slate-300 uppercase tracking-widest block mb-6">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(t => (
                    <span key={t} className="px-3 py-1.5 bg-slate-50 border border-border rounded-lg text-xs font-bold text-slate-600">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {project.results && (
                <div className="p-8 bg-accent rounded-3xl shadow-xl shadow-accent/10 text-white">
                  <h3 className="font-mono text-[9px] text-white/50 uppercase tracking-widest block mb-6">Outcome</h3>
                  <p className="text-xl font-semibold leading-snug italic">
                    {project.results}
                  </p>
                </div>
              )}
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
