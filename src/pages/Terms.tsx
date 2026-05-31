import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-dark">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-6 pt-32 pb-16 w-full">
        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-slate-500 text-sm mb-10">Effective date: June 1, 2025</p>

        <div className="prose-dark space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using SM Growth ("Service"), you agree to be bound by these Terms of
              Service. If you do not agree, you may not use the Service. We may update these terms
              at any time; continued use constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Description of Service</h2>
            <p>
              SM Growth provides an AI-powered social media growth platform including trend
              discovery, content ideation, competitor analysis, growth analytics, and multi-platform
              scheduling for short-form video content on platforms such as Instagram Reels, TikTok,
              and YouTube Shorts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Eligibility</h2>
            <p>
              You must be at least 16 years old to use the Service. By using SM Growth you represent
              that you meet this requirement and that all information you provide is accurate and
              complete.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and
              for all activity that occurs under your account. Notify us immediately of any
              unauthorized use at support@smgrowth.io.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
              <li>Use the Service for any unlawful purpose.</li>
              <li>Scrape, copy, or redistribute our data or AI outputs at scale.</li>
              <li>Attempt to reverse-engineer the platform or its AI models.</li>
              <li>Upload content that infringes third-party intellectual property rights.</li>
              <li>Harass, abuse, or harm other users.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Intellectual Property</h2>
            <p>
              All platform code, designs, AI models, and brand assets are the exclusive property of
              SM Growth. Content you create or schedule remains yours; you grant us a limited license
              to process and transmit it solely to provide the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Payments & Subscriptions</h2>
            <p>
              Paid plans are billed on a subscription basis. All fees are non-refundable except
              where required by law. We reserve the right to change pricing with 30 days' notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Disclaimer of Warranties</h2>
            <p>
              The Service is provided "as is" without warranties of any kind. We do not guarantee
              specific growth outcomes, follower counts, or engagement metrics.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, SM Growth shall not be liable for any indirect,
              incidental, special, or consequential damages arising from your use of the Service.
              Our total liability shall not exceed the amount paid by you in the 12 months preceding
              the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Termination</h2>
            <p>
              We may suspend or terminate your account at any time for violations of these Terms.
              You may cancel your account at any time through your account settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the jurisdiction in which SM Growth operates,
              without regard to conflict-of-law principles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">12. Contact</h2>
            <p>
              Questions about these Terms? Email us at{' '}
              <a href="mailto:support@smgrowth.io" className="text-primary hover:underline">
                support@smgrowth.io
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
