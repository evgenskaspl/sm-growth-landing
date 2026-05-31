import Header from '../components/Header';
import Footer from '../components/Footer';
import heroBg from '../assets/hero-bg.jpg';

const features = [
  {
    icon: '📈',
    title: 'Trend Discovery',
    desc: 'Spot viral trends before they peak and ride the wave with timely, relevant content.',
  },
  {
    icon: '💡',
    title: 'Content Ideas',
    desc: 'AI-generated content ideas tailored to your niche, audience, and growth goals.',
  },
  {
    icon: '🔍',
    title: 'Competitor Analysis',
    desc: 'Benchmark against top creators and uncover gaps you can exploit.',
  },
  {
    icon: '📊',
    title: 'Growth Analytics',
    desc: 'Deep-dive dashboards showing what works, what doesn\'t, and why.',
  },
  {
    icon: '🤖',
    title: 'AI-Powered Workflows',
    desc: 'Automate your posting schedule and optimize reach with smart AI workflows.',
  },
  {
    icon: '🗓️',
    title: 'Multi-Platform Scheduling',
    desc: 'Schedule Reels, Shorts, and TikToks from one unified calendar.',
  },
];

const platforms = ['Instagram Reels', 'TikTok', 'YouTube Shorts', 'And More'];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-dark">
      <Header />

      {/* Hero */}
      <section className="relative pt-16 overflow-hidden">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/60 to-dark" />
        <div className="relative max-w-6xl mx-auto px-6 py-32 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-slate-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            AI-Powered Social Growth
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            One Suite to<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Grow Reels, Shorts
            </span><br />
            and Social
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            AI-Powered. Data-Driven. Results-Focused. — Everything you need to grow your short-form presence across every platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="https://app.smgrowth.io"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition-colors shadow-lg shadow-primary/30"
            >
              Start Growing Free
            </a>
            <a
              href="#features"
              className="text-slate-300 hover:text-white border border-white/20 hover:border-white/40 px-8 py-3.5 rounded-xl font-medium text-lg transition-colors"
            >
              See Features
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 flex-wrap text-slate-500 text-sm">
            {platforms.map((p) => (
              <span key={p} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything You Need to Grow
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            A full suite of AI tools designed specifically for short-form content creators.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-dark-card border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-dark-card border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '28+', label: 'Platforms Supported' },
              { value: '32.5%', label: 'Avg. Audience Growth' },
              { value: '10K+', label: 'Creators Trust Us' },
              { value: '87/100', label: 'Avg. AI Content Score' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{s.value}</div>
                <div className="text-slate-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Grow Your Social Presence?
        </h2>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
          Join thousands of creators who use SM Growth to dominate Reels, Shorts, and TikTok.
        </p>
        <a
          href="https://app.smgrowth.io"
          className="inline-block bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg shadow-primary/30"
        >
          Get Started for Free
        </a>
      </section>

      <Footer />
    </div>
  );
}
