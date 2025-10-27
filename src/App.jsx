import React from 'react';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Work from './components/Work';
import ContactCTA from './components/ContactCTA';
import Team from './components/Team';
import Plans from './components/Plans';
import WhyOra from './components/WhyOra';
import Founder from './components/Founder';

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Hero />
      <WhyOra />
      <Capabilities />
      <Work />
      <Team />
      <Plans />
      <Founder />
      <ContactCTA />

      <footer className="border-t border-white/10 bg-black/80 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center gap-2 md:justify-start">
                <div className="h-3 w-3 rounded-full bg-violet-400" />
                <span className="text-sm font-semibold tracking-wide">ORA Works</span>
              </div>
              <p className="mt-2 text-xs text-white/50">Where bright ideas come to life.</p>
            </div>

            <nav className="flex items-center gap-5 text-sm text-white/70">
              <a href="#work" className="hover:text-white">Work</a>
              <a href="#capabilities" className="hover:text-white">Capabilities</a>
              <a href="#team" className="hover:text-white">Team</a>
              <a href="#plans" className="hover:text-white">Plans</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
            <p>© {new Date().getFullYear()} ORA Works. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="mailto:shubh@lawsetu.in" className="hover:text-white">shubh@lawsetu.in</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
