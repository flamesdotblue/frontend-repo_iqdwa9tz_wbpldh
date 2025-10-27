import React from 'react';

const projects = [
  {
    name: 'Signal Studio',
    tag: 'Product Design + Web App',
    blurb: 'Real-time insights with a calm, cinematic UI.',
  },
  {
    name: 'Orbit Films',
    tag: 'Identity + Motion',
    blurb: 'A bold identity with editorial rhythm and depth.',
  },
  {
    name: 'Nova Commerce',
    tag: 'Full-Stack + Automation',
    blurb: 'Headless storefront with performance at its core.',
  },
];

const Work = () => {
  return (
    <section id="work" className="relative bg-black py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">Selected Work</h2>
          <p className="text-sm text-white/60">A glimpse into recent builds.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.name} className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 transition hover:from-white/[0.1]">
              <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-violet-500/20 via-fuchsia-400/10 to-sky-400/10" />
              <div className="mt-4">
                <div className="text-sm uppercase tracking-widest text-white/50">{p.tag}</div>
                <h3 className="mt-2 text-lg font-medium tracking-tight">{p.name}</h3>
                <p className="mt-1 text-sm text-white/70">{p.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
