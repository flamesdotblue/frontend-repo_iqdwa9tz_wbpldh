import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between px-6 pt-6 md:px-10">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-violet-400" />
            <span className="font-semibold tracking-wide">ORA Works</span>
          </div>
          <div className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#capabilities" className="hover:text-white">Capabilities</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>

        <div className="mx-auto flex max-w-6xl grow flex-col items-center justify-center px-6 text-center md:px-10">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/60">Where bright ideas come to life</p>
          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.02em] md:text-6xl">
            Clarity. Precision. Results.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base text-white/70 md:text-lg">
            We craft cinematic stories and scalable software. Built to make brands stand out and scale.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a href="#contact" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90">Start a project</a>
            <a href="#work" className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:border-white hover:bg-white/10">See our work</a>
          </div>
        </div>

        <div className="relative z-10 px-6 pb-6 text-xs text-white/60 md:px-10">
          Founded by Shubh Jain • Creative + Software
        </div>
      </div>
    </section>
  );
};

export default Hero;
