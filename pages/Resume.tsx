
import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, MapPin, Globe, Linkedin, Mail } from 'lucide-react';
import Container from '../components/Container';

const Resume: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Resume Header 简历头部 */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mono text-[10px] uppercase tracking-[0.3em] text-blue-600 font-bold block mb-4"
              >
                Curriculum Vitae
              </motion.span>
              <h1 className="text-6xl font-semibold tracking-tight text-slate-900 mb-4">Qiyue Chen</h1>
              <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm">
                <span className="flex items-center"><MapPin size={14} className="mr-1.5" /> Silicon Valley, CA</span>
                <span className="flex items-center"><Mail size={14} className="mr-1.5" /> hello@qiyue.com</span>
                <span className="flex items-center"><Globe size={14} className="mr-1.5" /> qiyue.com</span>
              </div>
            </div>
            <a 
              href="/resume/Qiyue-Chen-CV.pdf" 
              className="flex items-center px-6 py-3 bg-slate-900 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-all hover:scale-105"
            >
              <FileDown size={16} className="mr-2" /> Download PDF
            </a>
          </div>

          {/* Resume Content 简历正文 */}
          <div className="space-y-24">
            <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <h2 className="mono text-[10px] uppercase tracking-[0.2em] text-slate-400">About</h2>
              </div>
              <div className="md:col-span-3 text-xl text-slate-700 leading-relaxed italic">
                A hybrid of engineering and design. Over 8 years of experience building scalable systems for enterprises and intuitive interfaces for humans.
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <h2 className="mono text-[10px] uppercase tracking-[0.2em] text-slate-400">Experience</h2>
              </div>
              <div className="md:col-span-3 space-y-12">
                {[
                  {
                    role: 'Senior Software Architect',
                    company: 'TechFlow Systems',
                    period: '2021 — PRESENT',
                    description: 'Directing the architecture of cloud-native payment platforms. Leading cross-functional teams to deliver 99.99% available microservices.'
                  },
                  {
                    role: 'Lead Frontend Engineer',
                    company: 'DesignMind AI',
                    period: '2018 — 2021',
                    description: 'Pioneered the integration of generative AI within professional creative suites. Built a high-performance design system adopted by 200+ developers.'
                  }
                ].map((exp, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-baseline mb-3">
                      <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                      <span className="mono text-[10px] text-slate-400">{exp.period}</span>
                    </div>
                    <p className="text-blue-600 font-bold mb-4 uppercase tracking-widest text-[10px]">{exp.company}</p>
                    <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <h2 className="mono text-[10px] uppercase tracking-[0.2em] text-slate-400">Expertise</h2>
              </div>
              <div className="md:col-span-3 grid grid-cols-2 gap-10">
                <div>
                  <h3 className="font-bold text-slate-900 mb-4">Engineering</h3>
                  <ul className="text-slate-500 text-sm space-y-2">
                    <li>Cloud Infrastructure (AWS/GCP)</li>
                    <li>Distributed System Design</li>
                    <li>Performance Optimization</li>
                    <li>API Design (REST/gRPC)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-4">Development</h3>
                  <ul className="text-slate-500 text-sm space-y-2">
                    <li>React / Next.js / TS</li>
                    <li>Node.js / Go / Rust</li>
                    <li>PostgreSQL / Redis / Kafka</li>
                    <li>Framer Motion / WebGL</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Resume;
