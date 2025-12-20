import React from 'react'
import useDocumentTitle from '../utils/useDocumentTitle'

export default function Home(){
  useDocumentTitle('Home')
  return (
    <div className="page home">
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Business goals & target users</p>
            <h1>Clarity first. Technology second.</h1>
            <p>Small businesses and local communities face rising costs, scarce skilled staff, and growing competition. Many know tech can help but lack a trusted, clear starting point.</p>
            <p>We don’t replace your systems. We make them smarter so you can move faster, spend smarter, and compete with confidence.</p>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={()=>{ const el = document.querySelector('.site-header .header-cta'); if(el) el.click(); }}>Let’s talk</button>
              <button className="btn btn-secondary" onClick={()=>{ const el = document.querySelector('.site-header .header-cta'); if(el) el.click(); }}>See how we help</button>
            </div>
          </div>
          <aside className="card hero-highlight">
            <h3>We unlock clarity.</h3>
            <p className="muted">Most organizations already have the data and tools they need. What they lack is clear, actionable answers.</p>
            <ul className="plain-list">
              <li>We sit on top of what you already have.</li>
              <li>We turn stored data into decisions.</li>
              <li>We guide AI with human expertise.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section container" aria-labelledby="our-approach">
        <div className="section-header">
          <div>
            <p className="eyebrow">Our approach</p>
            <h2 id="our-approach">Unlock value from the technology you already own</h2>
          </div>
          <p className="muted">We combine AI, data science, and human expertise to deliver answers faster and with less risk.</p>
        </div>
        <div className="pill-grid">
          <div className="pill">We don’t replace your systems. We make them smarter.</div>
          <div className="pill">AI is most valuable when guided by people who understand business, behavior, and outcomes.</div>
          <div className="pill">Our team includes coaches, developers, AI/ML engineers, data scientists, and trainers.</div>
        </div>
      </section>

      <section className="section container" aria-labelledby="impact">
        <div className="section-header">
          <p className="eyebrow">What you gain</p>
          <h2 id="impact">Operate smarter. Grow faster. Become future-ready.</h2>
        </div>
        <div className="cards responsive-grid">
          <article className="card">
            <h3>Operate smarter</h3>
            <p className="muted">Use data to improve operations, automate repetitive work, and reduce guesswork.</p>
          </article>
          <article className="card">
            <h3>Grow faster</h3>
            <p className="muted">Reach more customers digitally and make better decisions using insights you already own.</p>
          </article>
          <article className="card">
            <h3>Be future-ready</h3>
            <p className="muted">Build resilient systems, upskill your teams, and compete with bigger players.</p>
          </article>
        </div>
      </section>

      <section className="section container" aria-labelledby="who-we-serve">
        <div className="section-header">
          <p className="eyebrow">Who we serve</p>
          <h2 id="who-we-serve">Tailored paths for small businesses and community initiatives</h2>
        </div>
        <div className="split-grid">
          <article className="card">
            <h3>For Small Businesses</h3>
            <ul className="plain-list">
              <li>Improve operations using data.</li>
              <li>Automate repetitive work.</li>
              <li>Reach more customers digitally.</li>
              <li>Make better decisions using insights.</li>
            </ul>
            <p className="muted">Grow without guessing, spend smarter, and compete with bigger players.</p>
          </article>
          <article className="card">
            <h3>For Public and Community Initiatives</h3>
            <ul className="plain-list">
              <li>Improve service delivery.</li>
              <li>Use data to plan and allocate resources.</li>
              <li>Upskill the local workforce.</li>
              <li>Support digital transformation for SMBs.</li>
            </ul>
            <p className="muted">Strengthen local businesses, create skilled jobs, and build long-term digital capability.</p>
          </article>
        </div>
      </section>

      <section className="section container" aria-labelledby="differentiators">
        <div className="section-header">
          <p className="eyebrow">Why we are truly different</p>
          <h2 id="differentiators">We solve while we train and focus on long-term growth</h2>
        </div>
        <div className="responsive-grid cards">
          <article className="card">
            <h3>We solve while we train</h3>
            <p className="muted">We deliver solutions and build skills alongside the work so knowledge stays local.</p>
            <ul className="plain-list">
              <li>Business owners understand what’s happening.</li>
              <li>Teams gain practical skills.</li>
              <li>Knowledge stays local.</li>
            </ul>
          </article>
          <article className="card">
            <h3>Focus on independence</h3>
            <p className="muted">Our goal is not dependency — it is independence that resonates with small business owners and policymakers.</p>
          </article>
        </div>
      </section>

      <section className="section container cta-quote" aria-labelledby="cta">
        <div className="quote-box">
          <h2 id="cta">“We don’t replace what’s working — we make it work better.”</h2>
          <p className="muted">We’re not asking for big commitments today. We’re asking for conversations — to understand your challenges and explore how we can unlock value from what you already have.</p>
          <button className="btn btn-primary" onClick={()=>{ const el = document.querySelector('.site-header .header-cta'); if(el) el.click(); }}>Start the conversation</button>
        </div>
      </section>
    </div>
  )
}
