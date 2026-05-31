import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="SM Growth" className="h-10 w-10 rounded-full object-cover" />
          <span className="text-white font-bold text-xl tracking-wide">SM<span className="text-primary"> Growth</span></span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a
            href="https://app.smgrowth.io"
            className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
