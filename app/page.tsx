
import React from 'react';
import Container from '@/components/Container';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import Tag from '@/components/Tag';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { getFeaturedProjects } from '@/lib/projects';

export default function Home() {
  const featured = getFeaturedProjects();
  const topSkills = ['TypeScript', 'Next.js', 'Go', 'Python', 'AWS', 'Kubernetes', 'OpenAI', 'Kafka'];

  return (
    <div className="pt-40 pb-20">
      {/* Hero Section 首页主视觉 */}
      <section className="mb-40">
        <Container>
          <Reveal>
            <div className="max-w-4xl">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-6 block">
                Senior Full-Stack Engineer / Architect
              </span>
              <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.9] text-foreground mb-10">
                Crafting systems <br />
                <span className="text-slate-400">with purpose</span> <br />
                and <span className="italic">precision.</span>
              </h1>
              
              <div className="flex flex-col md:flex-row md:items-center gap-10 mt-12">
                <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl">
                  Qiyue Chen is a systems engineer dedicated to building high-performance, resilient web products. Combining deep backend logic with editorial-grade frontend aesthetics.
                  <br />
                  <span className="text-sm mt-4 block text-slate-400">专注于高并发分布式系统与精致前端体验。</span>
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link href="/projects" className="px-8 py-3.5 bg-foreground text-background rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all hover:scale-105 active:scale-95 flex items-center group">
                    View Work <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/resume" className="px-8 py-3.5 hairline rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:shadow-xl transition-all flex items-center">
                    Resume <Download size={14} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Featured Projects 精选项目 */}
      <section className="mb-40">
        <Container>
          <Reveal>
            <div className="flex justify-between items-end mb-16">
              <SectionHeader 
                eyebrow="Portfolio" 
                title="Featured Work" 
                className="mb-0"
              />
              <Link href="/projects" className="hidden md:block text-[10px] font-bold uppercase tracking-widest border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-all">
                Browse Archive
              </Link>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            {featured.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Skills Snippet 技能概览 */}
      <section className="py-32 border-t border-border bg-slate-100/30">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <h2 className="text-4xl font-semibold tracking-tighter leading-tight">
                Technical Mastery <br />
                <span className="text-slate-400 italic">across the full stack.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-3">
                {topSkills.map(skill => (
                  <div key={skill} className="px-6 py-3 bg-white hairline rounded-xl font-mono text-xs font-bold uppercase tracking-widest text-slate-500 shadow-sm hover:shadow-md transition-shadow">
                    {skill}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Contact Snippet 联系片段 */}
      <section className="py-40">
        <Container>
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-slate-300 block mb-8">Get In Touch</span>
              <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-12">
                Have an idea? <br />
                <a href="mailto:hello@qiyue.com" className="text-accent underline underline-offset-[12px] decoration-1 hover:decoration-4 transition-all italic">Let's build it.</a>
              </h2>
              <div className="flex justify-center space-x-12 mt-16 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400">
                <a href="#" className="hover:text-accent">LinkedIn</a>
                <a href="#" className="hover:text-accent">GitHub</a>
                <a href="#" className="hover:text-accent">Dribbble</a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
