import React from 'react';

const Founder = () => {
  return (
    <section id="founder" className="relative bg-black py-20 text-white md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-[1fr,2fr]">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-xl font-semibold">SJ</div>
            <div>
              <div className="text-sm uppercase tracking-widest text-white/60">Founder</div>
              <h3 className="text-xl font-medium">Shubh Jain</h3>
            </div>
          </div>

          <blockquote className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-white/90 shadow-sm">
            <p className="text-lg leading-relaxed md:text-xl">
              “I started ORA Works to bridge the gap between design and execution. My mission is simple — to build projects that look good, work perfectly, and make you proud to show them off.”
            </p>
          </blockquote>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -z-0 top-0 h-24 bg-gradient-to-b from-violet-500/10 to-transparent" />
    </section>
  );
};

export default Founder;
