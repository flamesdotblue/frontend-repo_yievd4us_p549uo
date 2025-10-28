import { useState } from 'react';
import { LayoutDashboard, Settings, ClipboardList, Users, Shield } from 'lucide-react';

const tabs = [
  { key: 'admin', label: 'Admin', icon: Shield },
  { key: 'judge', label: 'Judges', icon: ClipboardList },
  { key: 'leader', label: 'Team Leaders', icon: Users },
];

const adminData = {
  events: [
    { name: 'Cricket', status: 'Ongoing', teams: 8 },
    { name: 'Football', status: 'Scheduled', teams: 10 },
    { name: 'Badminton', status: 'Live', teams: 16 },
  ],
};

const judgeData = {
  queue: [
    { match: 'Table Tennis • Match 12', court: 'Court 2', time: '12:30 PM' },
    { match: 'Badminton • Match 8', court: 'Court 1', time: '12:45 PM' },
    { match: 'Foosball • Match 3', court: 'Arena A', time: '1:00 PM' },
  ],
};

const leaderData = {
  fixtures: [
    { vs: 'Byte Busters vs Net Ninjas', when: 'Today, 2:10 PM', venue: 'Court 3' },
    { vs: 'Smash Squad vs Drop Shotters', when: 'Today, 3:00 PM', venue: 'Court 1' },
  ],
};

export default function DashboardShowcase() {
  const [tab, setTab] = useState('admin');

  return (
    <section id="dashboards" className="py-20 border-t border-white/10 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white">Dashboards that work the way you do</h2>
            <p className="mt-2 text-slate-300">Each role gets a streamlined view tailored to their responsibilities.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-slate-400">
            <LayoutDashboard className="h-5 w-5" />
            <span className="text-sm">Preview</span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {tabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm transition-colors border ${
                tab === key
                  ? 'bg-emerald-500 text-emerald-950 border-emerald-400'
                  : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
          {tab === 'admin' && <AdminPanel />}
          {tab === 'judge' && <JudgePanel />}
          {tab === 'leader' && <LeaderPanel />}
        </div>
      </div>
    </section>
  );
}

function AdminPanel() {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 rounded-lg border border-white/10 bg-black/30 p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold">Events overview</h3>
          <a href="#login" className="text-xs rounded-md bg-white/10 hover:bg-white/20 text-white px-3 py-1.5">Create event</a>
        </div>
        <div className="mt-4 divide-y divide-white/10">
          {adminData.events.map((e) => (
            <div key={e.name} className="flex items-center justify-between py-3">
              <div className="text-sm text-white">{e.name}</div>
              <div className="flex items-center gap-3">
                <span className={`text-xs px-2 py-1 rounded-md ${
                  e.status === 'Live' ? 'bg-emerald-500/20 text-emerald-300' :
                  e.status === 'Ongoing' ? 'bg-blue-500/20 text-blue-300' :
                  'bg-amber-500/20 text-amber-300'
                }`}>
                  {e.status}
                </span>
                <span className="text-xs text-slate-300">{e.teams} teams</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-white/10 bg-black/30 p-5">
        <h3 className="text-white font-semibold">Quick settings</h3>
        <div className="mt-4 space-y-3">
          {[
            { label: 'Registration window', value: 'Open' },
            { label: 'Scoring schema', value: 'Win: 3, Draw: 1' },
            { label: 'Leaderboard visibility', value: 'Public' },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between rounded-md bg-white/5 p-3">
              <div className="text-sm text-slate-300">{row.label}</div>
              <div className="text-sm text-white">{row.value}</div>
            </div>
          ))}
          <a href="#login" className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 text-white text-sm px-3 py-2">
            <Settings className="h-4 w-4" />
            Manage settings
          </a>
        </div>
      </div>
    </div>
  );
}

function JudgePanel() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-lg border border-white/10 bg-black/30 p-5">
        <h3 className="text-white font-semibold">Match queue</h3>
        <div className="mt-4 space-y-3">
          {judgeData.queue.map((q) => (
            <div key={q.match} className="flex items-center justify-between rounded-md bg-white/5 p-3">
              <div>
                <div className="text-sm text-white">{q.match}</div>
                <div className="text-xs text-slate-400">{q.court} • {q.time}</div>
              </div>
              <a href="#login" className="rounded-md bg-emerald-500 hover:bg-emerald-400 text-emerald-950 text-xs font-medium px-3 py-1.5">Record score</a>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-white/10 bg-black/30 p-5">
        <h3 className="text-white font-semibold">Recent submissions</h3>
        <div className="mt-4 space-y-3">
          {[
            { match: 'Badminton • Match 7', result: '21-17, 19-21, 21-18' },
            { match: 'Table Tennis • Match 10', result: '3-1' },
            { match: 'Foosball • Match 2', result: '8-5' },
          ].map((x) => (
            <div key={x.match} className="rounded-md bg-white/5 p-3">
              <div className="text-sm text-white">{x.match}</div>
              <div className="text-xs text-slate-400">Result: {x.result}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LeaderPanel() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-lg border border-white/10 bg-black/30 p-5">
        <h3 className="text-white font-semibold">Upcoming fixtures</h3>
        <div className="mt-4 space-y-3">
          {leaderData.fixtures.map((f) => (
            <div key={f.vs} className="rounded-md bg-white/5 p-3">
              <div className="text-sm text-white">{f.vs}</div>
              <div className="text-xs text-slate-400">{f.when} • {f.venue}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-lg border border-white/10 bg-black/30 p-5">
        <h3 className="text-white font-semibold">Team actions</h3>
        <div className="mt-4 grid sm:grid-cols-2 gap-3">
          {[
            { label: 'Share QR invite', href: '#dashboards', style: 'bg-emerald-500 text-emerald-950 hover:bg-emerald-400' },
            { label: 'View standings', href: '#features', style: 'bg-white/10 text-white hover:bg-white/20' },
            { label: 'Submit roster', href: '#login', style: 'bg-white/10 text-white hover:bg-white/20' },
            { label: 'Report issue', href: '#login', style: 'bg-white/10 text-white hover:bg-white/20' },
          ].map((btn) => (
            <a key={btn.label} href={btn.href} className={`rounded-md px-4 py-2 text-sm font-medium text-center ${btn.style}`}>
              {btn.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
