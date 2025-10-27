import React from 'react';
import { Mail, Instagram, Linkedin, Github } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section id="contact" className="relative bg-black py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Let’s Build Something Bright.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/70 md:text-lg">
          From brand visuals to full-scale software — we’re ready to make it shine.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="mailto:shubh@lawsetu.in?subject=Start Your Project — ORA Works"
            className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Start Your Project
          </a>
          <a href="#work" className="rounded-full border border-white/20 px-7 py-3 text-sm text-white/90 hover:border-white hover:bg-white/10">
            See our work
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-5 text-sm text-white/70">
          <a href="mailto:shubh@lawsetu.in" className="inline-flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4" /> shubh@lawsetu.in</a>
          <span className="text-white/30">•</span>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"><Instagram className="h-4 w-4" /> Instagram</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"><Github className="h-4 w-4" /> GitHub</a>
        </div>

        <div className="mt-10 text-xs text-white/50">Based in code and craft. Available worldwide.</div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-violet-500/10 to-transparent" />
    </section>
  );
};

export default ContactCTA;
