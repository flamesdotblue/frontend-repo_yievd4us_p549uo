import { ArrowRight, QrCode } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[36rem] w-[36rem] rounded-full bg-gradient-to-b from-emerald-400/30 to-blue-500/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-300 px-3 py-1 text-xs font-medium ring-1 ring-emerald-400/30">
              Real-time leaderboards
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Manage sports tournaments with speed and clarity
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              A web-based platform built for corporate and inter-college events. Create brackets, onboard teams with QR codes, and empower Admins, Judges, and Team Leaders with dedicated dashboards.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#dashboards"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-medium px-5 py-3 transition-colors"
              >
                Launch demo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium px-5 py-3 transition-colors"
              >
                <QrCode className="h-4 w-4" />
                Request access
              </a>
            </div>
            <div id="how" className="mt-8 text-sm text-slate-400">
              Scan-and-join via QR codes for fast, verified team onboarding.
            </div>
          </div>

          {/* Right column: simple mock UI */}
          <div className="relative rounded-xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="text-xs text-slate-400">TourneyFlow Live</div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { label: 'Teams', value: '32' },
                { label: 'Events', value: '6' },
                { label: 'Matches', value: '48' },
              ].map((item) => (
                <div key={item.label} className="rounded-lg bg-white/5 border border-white/10 p-4">
                  <div className="text-xs text-slate-400">{item.label}</div>
                  <div className="text-2xl font-semibold text-white">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-white">Live Leaderboard</div>
                <div className="text-xs text-slate-400">Badminton • Round Robin</div>
              </div>
              <div className="mt-4 space-y-2">
                {[
                  { team: 'Byte Busters', pts: 24 },
                  { team: 'Net Ninjas', pts: 22 },
                  { team: 'Smash Squad', pts: 20 },
                  { team: 'Drop Shotters', pts: 18 },
                ].map((row, idx) => (
                  <div
                    key={row.team}
                    className="flex items-center justify-between rounded-md bg-black/30 p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-6 w-6 flex items-center justify-center rounded bg-white/5 text-xs text-slate-300">
                        {idx + 1}
                      </div>
                      <div className="text-sm text-white">{row.team}</div>
                    </div>
                    <div className="text-sm font-semibold text-emerald-300">{row.pts} pts</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
