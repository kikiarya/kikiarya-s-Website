
import React from 'react';
import Container from '@/components/Container';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import Tag from '@/components/Tag';
import { FileDown, MapPin, Mail, Globe, Linkedin, Github } from 'lucide-react';

export default function ResumePage() {
  return (
    <div className="pt-40 pb-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header 简历头部 */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-24">
            <Reveal>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent font-bold block mb-6">Curriculum Vitae</span>
                <h1 className="text-6xl font-semibold tracking-tighter text-foreground mb-6">Qiyue Chen</h1>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-500 text-xs font-medium uppercase tracking-widest">
                  <span className="flex items-center"><MapPin size={14} className="mr-2 text-accent" /> San Francisco, CA</span>
                  <span className="flex items-center"><Mail size={14} className="mr-2 text-accent" /> hello@qiyue.com</span>
                  <span className="flex items-center"><Globe size={14} className="mr-2 text-accent" /> qiyue.com</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <a 
                href="/resume/Qiyue-Chen-CV.pdf" 
                className="flex items-center px-8 py-3.5 bg-foreground text-background rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all hover:scale-105"
              >
                <FileDown size={16} className="mr-2" /> Download PDF
              </a>
            </Reveal>
          </div>

          {/* Body 简历主体 */}
          <div className="space-y-32">
            
            {/* Summary */}
            <section className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="md:col-span-1">
                <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-300">About</h2>
              </div>
              <div className="md:col-span-3">
                <p className="text-xl text-slate-700 leading-relaxed italic">
                  Systems-focused Full Stack Engineer with 8+ years of experience engineering high-concurrency microservices and editorial-grade frontend architectures. Passionate about LLM orchestration and cloud-native scalability.
                </p>
              </div>
            </section>

            {/* Experience */}
            <section className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="md:col-span-1">
                <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-300">Experience</h2>
              </div>
              <div className="md:col-span-3 space-y-16">
                {[
                  {
                    company: 'TechFlow Architecture',
                    role: 'Senior Software Architect',
                    period: '2021 — PRESENT',
                    bullets: [
                      'Architected global payment gateway handling $50M daily volume with 99.99% uptime.',
                      'Reduced AWS infrastructure costs by 32% via strategic Lambda and Fargate migration.',
                      'Led a team of 12 engineers in building a company-wide distributed design system.'
                    ]
                  },
                  {
                    company: 'Cognitive Lab AI',
                    role: 'Lead Product Engineer',
                    period: '2018 — 2021',
                    bullets: [
                      'Built the first enterprise RAG platform for legal document auditing.',
                      'Pioneered interactive AI-streaming interfaces used by 500k monthly users.',
                      'Optimized vector database queries reducing search latency from 2s to 150ms.'
                    ]
                  }
                ].map((job, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between items-baseline mb-4">
                      <h3 className="text-2xl font-semibold tracking-tight group-hover:text-accent transition-colors">{job.role}</h3>
                      <span className="font-mono text-[10px] text-slate-300">{job.period}</span>
                    </div>
                    <p className="text-accent font-bold uppercase tracking-widest text-[10px] mb-6">{job.company}</p>
                    <ul className="space-y-4">
                      {job.bullets.map((b, i) => (
                        <li key={i} className="text-slate-600 leading-relaxed text-sm flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-200 mt-1.5 mr-4 flex-shrink-0"></span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education & Skills */}
            <section className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-20">
              <div className="md:col-span-1">
                <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-300">Capabilities</h2>
              </div>
              <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <h3 className="font-bold mb-6">Engineering</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Go', 'Rust', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Kafka', 'Kubernetes', 'Terraform'].map(s => <Tag key={s} label={s} />)}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-6">AI & Data</h3>
                  <div className="flex flex-wrap gap-2">
                    {['PyTorch', 'LangChain', 'Pinecone', 'OpenAI', 'RAG Design', 'Data Visualization', 'Vector Search'].map(s => <Tag key={s} label={s} />)}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
