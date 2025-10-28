import { Users, QrCode, LayoutDashboard, Lock, Trophy } from 'lucide-react';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Three dedicated dashboards',
    desc: 'Purpose-built spaces for Admins, Judges, and Team Leaders to keep workflows focused and fast.',
  },
  {
    icon: QrCode,
    title: 'QR-based team joining',
    desc: 'Onboard teams securely in seconds with scannable invites and automatic verification.',
  },
  {
    icon: Users,
    title: 'Multiple game categories',
    desc: 'Support for a mix of sports and events — customize rules, scoring, and scheduling.',
  },
  {
    icon: Trophy,
    title: 'Customizable brackets',
    desc: 'Knockouts, round-robin, and hybrid formats with auto-seeding and progression.',
  },
  {
    icon: Lock,
    title: 'Secure role-based login',
    desc: 'Access control across the platform ensures the right people see the right tools.',
  },
  {
    icon: Trophy,
    title: 'Real-time leaderboards',
    desc: 'Scores update instantly across dashboards and public displays.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Built for modern tournaments</h2>
          <p className="mt-3 text-slate-300">Everything you need to plan, run, and broadcast events with confidence.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-xl border border-white/10 bg-white/5 p-6 hover:border-emerald-400/40 transition-colors">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-emerald-400/20 to-blue-500/20 ring-1 ring-white/10">
                <Icon className="h-6 w-6 text-emerald-300" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
