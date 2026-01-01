import React from 'react';
import Container from './Container';

// Footer information 页脚信息 - Editorial Style
const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-black/[0.05] py-20">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
            <h3 className="text-sm font-bold tracking-tighter text-slate-900 mb-4">
              QY.CH <span className="text-blue-600 font-black">.</span>
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed uppercase tracking-widest mono">
              Engineering systems with <br /> deliberate design.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h4 className="mono text-[10px] uppercase tracking-[0.2em] text-slate-300 mb-6">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:hello@qiyue.com" className="text-xs font-bold text-slate-900 hover:text-blue-600 transition-colors">Email</a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-900 hover:text-blue-600 transition-colors">LinkedIn</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mono text-[10px] uppercase tracking-[0.2em] text-slate-300 mb-6">Social</h4>
              <ul className="space-y-3">
                <li>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-900 hover:text-blue-600 transition-colors">GitHub</a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-900 hover:text-blue-600 transition-colors">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-black/[0.03] flex justify-between items-center text-slate-300">
          <span className="mono text-[10px] uppercase tracking-[0.1em]">© {new Date().getFullYear()} Qiyue Chen</span>
          <span className="mono text-[10px] uppercase tracking-[0.1em]">Built in SF</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;