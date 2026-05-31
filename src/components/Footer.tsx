import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark-card mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="SM Growth" className="h-9 w-9 rounded-full object-cover" />
            <span className="text-white font-bold text-lg">SM<span className="text-primary"> Growth</span></span>
          </div>
          <p className="text-slate-500 text-sm">AI-Powered. Data-Driven. Results-Focused.</p>
          <nav className="flex items-center gap-6 text-sm text-slate-400">
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} SM Growth. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
