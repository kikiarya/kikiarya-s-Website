
import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  HashRouter as Router, 
  Routes, 
  Route, 
  useLocation, 
  useParams as useReactRouterParams 
} from 'react-router-dom';

// Import our Next.js App Router components
import RootLayout from './app/layout';
import Home from './app/page';
import ProjectsPage from './app/projects/page';
import ProjectDetailPage from './app/projects/[slug]/page';
import ResumePage from './app/resume/page';
import BlogPage from './app/blog/page';
import NotFound from './app/not-found';

// We need to provide a way for components using Next.js hooks to work in the preview
// This is a simple shim for the Next.js navigation hooks
const NavigationShim = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const App = () => {
  return (
    <Router>
      <RootLayout>
        <Suspense fallback={<div className="p-20 text-center font-mono text-xs uppercase tracking-widest text-slate-400">Loading Architecture...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </RootLayout>
    </Router>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
