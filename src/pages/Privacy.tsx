import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-dark">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-6 pt-32 pb-16 w-full">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-10">Effective date: June 1, 2025</p>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
            <p>We collect the following categories of information:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
              <li><strong className="text-slate-300">Account data:</strong> name, email address, password (hashed).</li>
              <li><strong className="text-slate-300">Usage data:</strong> pages visited, features used, timestamps.</li>
              <li><strong className="text-slate-300">Content data:</strong> posts, captions, and media you schedule through the Service.</li>
              <li><strong className="text-slate-300">Social platform tokens:</strong> OAuth tokens needed to post on your behalf.</li>
              <li><strong className="text-slate-300">Payment data:</strong> processed by our payment provider; we never store card numbers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
            <p>We use collected data to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
              <li>Provide, operate, and improve the Service.</li>
              <li>Schedule and publish content on connected platforms.</li>
              <li>Generate AI-powered analytics and recommendations.</li>
              <li>Send transactional emails (receipts, security alerts).</li>
              <li>Respond to support requests.</li>
            </ul>
            <p className="mt-3">
              We do <strong className="text-white">not</strong> sell your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Cookies & Tracking</h2>
            <p>
              We use essential cookies for authentication and session management, and optional
              analytics cookies to understand how the Service is used. You can disable non-essential
              cookies in your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Third-Party Services</h2>
            <p>
              SM Growth integrates with third-party social platforms (Instagram, TikTok, YouTube,
              etc.) and may use service providers for hosting, analytics, and payments. Each
              third-party has its own privacy policy; we encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Data Retention</h2>
            <p>
              We retain your data for as long as your account is active. Upon account deletion, we
              remove your personal data within 30 days, except where retention is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Security</h2>
            <p>
              We implement industry-standard security measures including encryption in transit
              (TLS 1.2+), encrypted storage of sensitive tokens, and regular security audits.
              No system is perfectly secure; use a strong, unique password.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction or deletion of your data.</li>
              <li>Object to or restrict certain processing activities.</li>
              <li>Export your data in a portable format.</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, email{' '}
              <a href="mailto:privacy@smgrowth.io" className="text-primary hover:underline">
                privacy@smgrowth.io
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Children's Privacy</h2>
            <p>
              The Service is not directed to children under 16. We do not knowingly collect data
              from children. If you believe a child has provided data to us, contact us and we will
              delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you by email or
              in-app notice at least 14 days before material changes take effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contact Us</h2>
            <p>
              For privacy-related inquiries, contact us at{' '}
              <a href="mailto:privacy@smgrowth.io" className="text-primary hover:underline">
                privacy@smgrowth.io
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
