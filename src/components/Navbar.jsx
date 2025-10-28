import { useState } from 'react';
import { Trophy, LayoutDashboard, Shield } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Dashboards', href: '#dashboards' },
    { label: 'How it works', href: '#how' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Trophy className="h-5 w-5 text-white" />
            </div>
            <div className="font-semibold tracking-tight text-white">TourneyFlow</div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#login"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 text-white text-sm px-3 py-2 transition-colors"
            >
              <Shield className="h-4 w-4" />
              Secure Login
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <LayoutDashboard className="h-6 w-6 text-white" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-slate-300 hover:text-white hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#login"
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-white bg-white/10 hover:bg-white/20"
              >
                Secure Login
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
