import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DashboardShowcase from './components/DashboardShowcase';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DashboardShowcase />

        {/* Login anchor target */}
        <section id="login" className="py-16 border-t border-white/10 bg-slate-900/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white">Secure login</h3>
              <p className="mt-2 text-slate-300">Choose your role to continue. Authentication will be enabled in the next step.</p>
            </div>
            <div className="mt-8 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                { label: 'Admin Login', href: '#', style: 'bg-emerald-500 text-emerald-950 hover:bg-emerald-400' },
                { label: 'Judge Login', href: '#', style: 'bg-white/10 text-white hover:bg-white/20' },
                { label: 'Team Leader Login', href: '#', style: 'bg-white/10 text-white hover:bg-white/20' },
              ].map((btn) => (
                <a key={btn.label} href={btn.href} className={`rounded-md px-5 py-3 text-sm font-medium text-center ${btn.style}`}>
                  {btn.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} TourneyFlow. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
