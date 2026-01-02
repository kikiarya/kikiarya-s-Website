
import React from 'react';
import Container from '@/components/Container';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';

export default function BlogPage() {
  return (
    <div className="pt-40 pb-20">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <SectionHeader 
              eyebrow="Journal" 
              title="System Observations" 
              description="A space for documented learnings in distributed computing, LLM patterns, and interaction design."
            />
          </Reveal>

          <div className="mt-32 space-y-16">
            <div className="p-16 bg-slate-100 rounded-[40px] hairline text-center">
              <h2 className="text-2xl font-semibold tracking-tight mb-4 text-foreground">Drafting the first entry...</h2>
              <p className="text-slate-500 mb-10 max-w-sm mx-auto">I'm currently formalizing my notes on SAGA patterns in microservice architectures.</p>
              <div className="flex justify-center items-center space-x-2">
                <input 
                  type="email" 
                  placeholder="Enter email for updates" 
                  className="px-6 py-3 bg-white border border-border rounded-full text-xs w-64 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                />
                <button className="px-6 py-3 bg-foreground text-background rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-accent transition-colors">Notify Me</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
