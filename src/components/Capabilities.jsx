import React from 'react';

const items = [
  {
    title: 'Strategy',
    desc: 'Positioning, narrative, and brand systems built for scale.',
    points: ['Brand positioning', 'Content strategy', 'Go-to-market']
  },
  {
    title: 'Design',
    desc: 'Elegant identities and interfaces that feel inevitable.',
    points: ['Identity & art direction', 'Product & web design', 'Motion & editing']
  },
  {
    title: 'Engineering',
    desc: 'Reliable software, from prototypes to full-stack platforms.',
    points: ['Web apps & APIs', 'Automation & integrations', 'Performance & analytics']
  }
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="relative bg-black py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">Capabilities</h2>
          <p className="text-sm text-white/60">Clarity, precision, and measurable impact.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/[0.08]">
              <div className="mb-4 text-sm uppercase tracking-widest text-violet-300/90">{it.title}</div>
              <p className="mb-4 text-white/80">{it.desc}</p>
              <ul className="space-y-2 text-sm text-white/60">
                {it.points.map(p => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
