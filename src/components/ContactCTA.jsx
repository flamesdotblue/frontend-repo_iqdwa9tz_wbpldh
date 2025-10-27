import React from 'react';

const ContactCTA = () => {
  return (
    <section id="contact" className="relative bg-black py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Let’s build what’s next.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/70 md:text-lg">
          Tell us your goal. We’ll design the path — and ship with precision.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="mailto:hello@oraworks.studio?subject=Project Inquiry — ORA Works"
            className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            hello@oraworks.studio
          </a>
          <a href="#capabilities" className="rounded-full border border-white/20 px-7 py-3 text-sm text-white/90 hover:border-white hover:bg-white/10">
            Our capabilities
          </a>
        </div>
        <div className="mt-10 text-xs text-white/50">Based in code and craft. Available worldwide.</div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-violet-500/10 to-transparent" />
    </section>
  );
};

export default ContactCTA;
