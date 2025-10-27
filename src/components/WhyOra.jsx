import React from 'react';
import { Zap, Palette, TrendingUp } from 'lucide-react';

const points = [
  {
    icon: Zap,
    title: '100% satisfaction',
    desc: 'We deliver design and tech solutions with 100% client satisfaction.'
  },
  {
    icon: Palette,
    title: 'Creativity × precision',
    desc: 'We mix creativity with precision — design meets performance.'
  },
  {
    icon: TrendingUp,
    title: 'Premium and scalable',
    desc: 'We help you look premium and scale fast.'
  }
];

const WhyOra = () => {
  return (
    <section id="why" className="relative bg-black py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Why ORA Works</h2>
          <p className="mt-3 text-white/70">Short. Emotional. Built to differentiate.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {points.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.04]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOra;
