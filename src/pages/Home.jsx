import React from 'react'
import useDocumentTitle from '../utils/useDocumentTitle'

export default function Home() {
  useDocumentTitle('Home')

  const handleContactClick = () => {
    const el = document.querySelector('.site-header .header-cta')
    if (el) {
      el.click()
    } else {
      window.location.href = '/contact'
    }
  }

  return (
    <div className="page home">
      <section className="hero value-hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow">🏠 Home Page — Primary User Story</div>
            <h1>Helping businesses make better decisions using the technology they already have.</h1>
            <p>
              Small businesses and local communities face rising costs, limited resources, and growing competition.
              Most know technology can help — but don’t know where to start or whom to trust.
            </p>
            <p className="strong">We bring clarity.</p>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={handleContactClick}>👉 Start a Conversation</button>
              <button className="btn btn-secondary" onClick={handleContactClick}>👉 Contact Us</button>
            </div>
            <div className="pill-row" aria-label="High level services">
              <span className="pill">Cyber Security</span>
              <span className="pill">AI &amp; ML</span>
              <span className="pill">Web Applications</span>
            </div>
          </div>
          <aside className="hero-panel" aria-label="Outcome highlights">
            <div className="monogram" aria-hidden="true">EV</div>
            <div className="panel-body">
              <p className="muted">Suggested logo mark</p>
              <h3>EightVo Solutions</h3>
              <p className="muted">Clarity-first consulting for modern businesses.</p>
              <div className="metrics">
                <div className="metric">
                  <span className="metric-number">On your systems</span>
                  <span className="metric-label">We work with what&apos;s already in place.</span>
                </div>
                <div className="metric">
                  <span className="metric-number">Decision support</span>
                  <span className="metric-label">Actionable insight, not jargon.</span>
                </div>
                <div className="metric">
                  <span className="metric-number">Low-pressure</span>
                  <span className="metric-label">Conversations, not commitments.</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section container clarity" aria-labelledby="clarity-heading">
        <div className="section-header">
          <p className="eyebrow">2️⃣ The Core Problem We Solve</p>
          <h2 id="clarity-heading">The Challenge Isn’t Technology — It’s Clarity</h2>
          <p className="muted">Businesses already have systems, data, and tools. What&apos;s missing are clear answers and confident decisions.</p>
        </div>
        <div className="grid two-col">
          <div className="card">
            <ul className="list">
              <li><strong>Data exists, but insights don&apos;t</strong></li>
              <li><strong>Systems run, but value is hidden</strong></li>
              <li><strong>Tools are used, but outcomes are unclear</strong></li>
            </ul>
          </div>
          <div className="card">
            <h3>Our Approach</h3>
            <p className="muted">We don&apos;t replace what&apos;s working. We make it work better.</p>
            <div className="pill-stack">
              <span className="pill pill-ghost">Work on top of existing systems</span>
              <span className="pill pill-ghost">Help businesses make better decisions</span>
              <span className="pill pill-ghost">Show who our services are for</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section container" aria-labelledby="help-heading">
        <div className="section-header">
          <p className="eyebrow">3️⃣ What We Do</p>
          <h2 id="help-heading">How We Help</h2>
          <p className="muted">We sit on top of your existing systems and unlock value you&apos;re currently missing.</p>
        </div>
        <div className="grid three-col">
          <article className="card">
            <h3>Turn data into clear, actionable insights</h3>
            <p className="muted">Connect decisions to outcomes with dashboards and practical recommendations.</p>
          </article>
          <article className="card">
            <h3>Reduce guesswork in decision-making</h3>
            <p className="muted">Confident choices, supported by evidence—not technology jargon.</p>
          </article>
          <article className="card">
            <h3>Move faster with less risk</h3>
            <p className="muted">Iterative delivery that respects your pace and protects what already works.</p>
          </article>
        </div>
        <div className="note">We don&apos;t sell technology. We unlock value from the technology you already own.</div>
      </section>

      <section className="section container" aria-labelledby="solutions-heading">
        <div className="section-header">
          <p className="eyebrow">4️⃣ Our Services</p>
          <h2 id="solutions-heading">Our Solutions</h2>
          <p className="muted">End-to-end business outcomes—no tools, no jargon.</p>
        </div>
        <div className="grid three-col">
          <article className="card">
            <h3>Cyber Security</h3>
            <p className="muted">Protect what matters, reduce risk, and build trust without unnecessary complexity.</p>
          </article>
          <article className="card">
            <h3>AI &amp; ML Solutions</h3>
            <p className="muted">Intelligent insights for planning, forecasting, and decision-making grounded in business reality.</p>
          </article>
          <article className="card">
            <h3>Web &amp; Digital Applications</h3>
            <p className="muted">Digital experiences that reach customers, streamline operations, and fuel efficient growth.</p>
          </article>
        </div>
      </section>

      <section className="section container audience" aria-labelledby="audience-heading">
        <div className="section-header">
          <p className="eyebrow">5️⃣ Who We Help</p>
          <h2 id="audience-heading">Built for real organizations</h2>
        </div>
        <div className="grid two-col">
          <article className="card">
            <h3>For Small Businesses</h3>
            <ul className="list">
              <li>Improve operations using data</li>
              <li>Automate repetitive work</li>
              <li>Reach more customers digitally</li>
              <li>Make confident decisions using insights</li>
            </ul>
            <p className="muted"><strong>Result:</strong> Grow smarter, spend wisely, and compete with larger players — without guessing.</p>
          </article>
          <article className="card">
            <h3>For Public &amp; Community Initiatives</h3>
            <ul className="list">
              <li>Improve service delivery</li>
              <li>Use data to plan and allocate resources</li>
              <li>Upskill the local workforce</li>
              <li>Support digital growth for small and medium businesses</li>
            </ul>
            <p className="muted"><strong>Result:</strong> Stronger local businesses, skilled jobs, and long-term digital capability.</p>
          </article>
        </div>
      </section>

      <section className="section container" aria-labelledby="difference-heading">
        <div className="section-header">
          <p className="eyebrow">6️⃣ Why We&apos;re Different</p>
          <h2 id="difference-heading">We Solve While We Train</h2>
          <p className="muted">We don&apos;t just deliver solutions — we build understanding.</p>
        </div>
        <div className="grid three-col">
          <article className="card">
            <h3>Business owners stay informed</h3>
            <p className="muted">Transparent updates keep leaders close to every milestone.</p>
          </article>
          <article className="card">
            <h3>Teams gain hands-on skills</h3>
            <p className="muted">Practical coaching while we deliver to keep knowledge in-house.</p>
          </article>
          <article className="card">
            <h3>Independence, not dependency</h3>
            <p className="muted">Our goal is to make your organization confident and self-sufficient.</p>
          </article>
        </div>
        <div className="pill-row">
          <span className="pill">Small business owners</span>
          <span className="pill">Community leaders</span>
          <span className="pill">Policymakers</span>
        </div>
      </section>

      <section className="section container" aria-labelledby="team-heading">
        <div className="section-header">
          <p className="eyebrow">7️⃣ Our Team</p>
          <h2 id="team-heading">Experienced, outcome-focused professionals</h2>
          <p className="muted">Coaches, developers, AI and ML engineers, data specialists, and trainers — united by one purpose: solving real business problems and helping organizations grow sustainably.</p>
        </div>
        <div className="grid three-col brand-grid" aria-label="Suggested partner logos">
          <div className="brand-card">EV Clarity</div>
          <div className="brand-card">InsightWave</div>
          <div className="brand-card">TrustLayer</div>
        </div>
      </section>

      <section className="section container cta" aria-labelledby="contact-heading">
        <div className="cta-box">
          <div>
            <p className="eyebrow">8️⃣ Call to Action + Contact Information</p>
            <h2 id="contact-heading">Let&apos;s Start a Conversation</h2>
            <p className="muted">We&apos;re not asking for big commitments today. We&apos;re asking for conversations.</p>
            <ul className="list">
              <li>Gain clarity from your data</li>
              <li>Make better decisions</li>
              <li>Use technology more effectively</li>
            </ul>
            <p className="strong">Contact Information</p>
            <p className="muted">📧 Email: contact@yourcompany.com</p>
            <p className="muted">📞 Phone: +1 (XXX) XXX-XXXX</p>
            <p className="muted">📍 Location: Serving businesses and communities locally and globally</p>
          </div>
          <div className="cta-actions">
            <button className="btn btn-primary" onClick={handleContactClick}>👉 Contact Us to Explore Solutions</button>
            <p className="muted final-line">“We don’t replace what’s working — we make it work better.”</p>
          </div>
        </div>
      </section>
    </div>
  )
}
