import React from 'react';
import { User } from 'lucide-react';

const team = [
  {
    name: 'Shubh Jain',
    role: 'Founder, Creative & Engineering',
    initials: 'SJ',
    bio: 'Leads clarity-first strategy across brand, product, and systems.'
  },
  {
    name: 'Ava Rao',
    role: 'Design Lead',
    initials: 'AR',
    bio: 'Crafts precise interfaces and timeless visual language.'
  },
  {
    name: 'Noah Patel',
    role: 'Engineering Lead',
    initials: 'NP',
    bio: 'Builds resilient, performant platforms with modern stacks.'
  },
  {
    name: 'Maya Chen',
    role: 'Strategy & Ops',
    initials: 'MC',
    bio: 'Aligns business goals with outcomes. Zero compromise on quality.'
  }
];

export default function Team() {
  return (
    <section id="team" className="relative py-24 bg-black">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40">Team</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">People behind the work</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/60">
            We are a compact, senior team. Dedicated to clarity, precision, and 100% client satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.07]">
              <div className="mb-4 flex items-center gap-4">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-1 ring-white/20">
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-white/10 to-white/5 text-sm font-medium text-white/80">
                    {member.initials}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium">{member.name}</h3>
                  <p className="text-xs text-white/50">{member.role}</p>
                </div>
              </div>
              <p className="text-sm text-white/60">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
