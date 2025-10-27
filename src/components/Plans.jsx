import React from 'react';
import { Check, Rocket, Star, Briefcase } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    icon: Rocket,
    summary: 'For early teams who want momentum without the noise.',
    features: [
      'Brand essentials and visual language',
      'Landing page or marketing site',
      'Foundational analytics + performance',
      'Lightweight design system tokens'
    ]
  },
  {
    name: 'Growth',
    icon: Star,
    summary: 'For funded teams scaling product and brand in parallel.',
    features: [
      'Product design sprints',
      'Design system + component library',
      'Full-stack app or marketing site',
      'Automatic CI/CD and observability'
    ]
  },
  {
    name: 'Enterprise',
    icon: Briefcase,
    summary: 'For organizations requiring depth, scale, and rigor.',
    features: [
      'Multi-platform product suite',
      'Governed design systems',
      'Performance and accessibility audits',
      'Security, compliance, and SSO'
    ]
  }
];

export default function Plans() {
  return (
    <section id="plans" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40">Plans</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Engagement models</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/60">
            Transparent scope. Clear deliverables. No surprises. Tell us your goals— we’ll shape the right path.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map(({ name, icon: Icon, summary, features }) => (
            <div key={name} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.07]">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-white/10 p-2 text-white/80">
                  <Icon size={18} />
                </div>
                <h3 className="text-lg font-medium">{name}</h3>
              </div>
              <p className="mb-6 text-sm text-white/60">{summary}</p>
              <ul className="mb-6 space-y-2">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                    <Check size={16} className="mt-0.5 text-white/60" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:hello@oraworks.studio?subject=ORA%20Works%20—%20{${name}}%20plan"
                className="inline-flex items-center justify-center rounded-md bg-white text-black px-4 py-2 text-sm font-medium transition hover:bg-white/90"
              >
                Request a quote
              </a>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-white/40">
          We don’t list prices publicly. Every engagement is tailored to scope and outcomes.
        </p>
      </div>
    </section>
  );
}
