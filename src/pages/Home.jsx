


import React from 'react'
import LeadershipCard from '../components/LeadershipCard'
import NewsBanner from '../components/NewsBanner'
import CaseStudyCard from '../components/CaseStudyCard'
import useDocumentTitle from '../utils/useDocumentTitle'

const leaders = [
  {name:'Sandeep Reddy', title:'CEO', photo:'', quote:'We focus on measurable impact.'},
  {name:'Manoj Kumar', title:'Director - Business & Technology', photo:'', quote:'Technology and strategy together.'},
  {name:'Bala Krishna', title:'Director - Operations, India', photo:'', quote:'Operational excellence and delivery.'}
]

export default function Home(){
  useDocumentTitle('Home')
  return (
    <div className="page home">
      <section className="hero">
        <div className="container hero-inner">
          <div style={{maxWidth:640}}>
            <h1>Helping businesses make better decisions using the technology they already have.</h1>
            <p>Small businesses and local communities face rising costs, limited resources, and growing competition. Most know technology can help — but don’t know where to start or whom to trust.</p>
            <p style={{fontWeight:600}}>We bring clarity.</p>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={()=>{ const el = document.querySelector('.site-header .header-cta'); if(el) el.click(); }}>Start a Conversation</button>
              <button className="btn btn-secondary" onClick={()=>{ const el = document.querySelector('.site-header .header-cta'); if(el) el.click(); }}>Contact Us</button>
            </div>
          </div>
          <aside style={{minWidth:260}}>
            <div className="card" style={{padding:20}}>
              <h3 style={{marginTop:0}}>Clear outcomes, not guesswork</h3>
              <p className="muted">We work with what you already have to surface insights, reduce risk, and guide confident decisions.</p>
              <div style={{marginTop:12}}>
                <button className="btn btn-primary" onClick={()=>{ const el = document.querySelector('.site-header .header-cta'); if(el) el.click(); }}>Start a Conversation</button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section container" aria-labelledby="clarity">
        <h2 id="clarity">The Challenge Isn’t Technology — It’s Clarity</h2>
        <div className="case-grid">
          <CaseStudyCard
            title="Data exists, but insights don’t"
            excerpt="Businesses already have systems, data, and tools in place. What’s missing are clear answers and confident decisions."
            image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=60"
            metric="Unlock hidden value"
          />

          <CaseStudyCard
            title="Systems run, but value is hidden"
            excerpt="We don’t replace what’s working — we make it work better by surfacing the outcomes you’re missing."
            image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=60&auto=format&fit=crop"
            metric="Clarity over complexity"
          />
        </div>

        <div style={{display:'flex',justifyContent:'flex-start',gap:12,marginTop:16}}>
          <button className="btn btn-primary" onClick={()=>{ const el = document.querySelector('.site-header .header-cta'); if(el) el.click(); }}>Talk with our team</button>
          <button className="btn btn-ghost" onClick={()=>{ const el = document.querySelector('.site-header .header-cta'); if(el) el.click(); }}>See how we work</button>
        </div>
      </section>

      <section className="section container" aria-labelledby="how-we-help">
        <h2 id="how-we-help">How We Help</h2>
        <div className="cards" style={{marginTop:12}}>
          <article className="card">
            <h3>Unlock value from existing systems</h3>
            <p className="muted">We sit on top of your current tools to turn data into clear, actionable insights and reduce guesswork in decision-making.</p>
          </article>
          <article className="card">
            <h3>Move faster with less risk</h3>
            <p className="muted">Our teams prioritize outcomes over tools, helping organizations make better decisions without unnecessary disruption.</p>
          </article>
          <article className="card">
            <h3>Outcomes over technology</h3>
            <p className="muted">We don’t sell technology — we unlock value from the technology you already own.</p>
          </article>
        </div>
      </section>

      <section className="section container">
        <h2>Our Solutions</h2>
        <p className="muted">We provide end-to-end business solutions, focused on outcomes — not tools.</p>
        <div className="cards" style={{marginTop:12}}>
          <article className="card">
            <h3>Cyber Security</h3>
            <p className="muted">Protect what matters, reduce risk, and build trust without unnecessary complexity.</p>
          </article>
          <article className="card">
            <h3>AI &amp; ML Solutions</h3>
            <p className="muted">Use intelligent insights to support better planning, forecasting, and decision-making — guided by real business understanding.</p>
          </article>
          <article className="card">
            <h3>Web &amp; Digital Applications</h3>
            <p className="muted">Design digital experiences that reach customers, streamline operations, and grow efficiently.</p>
          </article>
        </div>
      </section>

      <section className="section container">
        <h2>Who We Help</h2>
        <div className="cards" style={{marginTop:12}}>
          <article className="card">
            <h3>For Small Businesses</h3>
            <p className="muted">Improve operations using data, automate repetitive work, reach more customers digitally, and make confident decisions using insights.</p>
            <p><strong>Result:</strong> Grow smarter, spend wisely, and compete with larger players — without guessing.</p>
          </article>
          <article className="card">
            <h3>For Public &amp; Community Initiatives</h3>
            <p className="muted">Improve service delivery, plan and allocate resources with data, upskill the local workforce, and support digital growth for small and medium businesses.</p>
            <p><strong>Result:</strong> Stronger local businesses, skilled jobs, and long-term digital capability.</p>
          </article>
        </div>
      </section>

      <section className="section container">
        <h2>We Solve While We Train</h2>
        <div className="cards" style={{marginTop:12}}>
          <article className="card">
            <h3>Hands-on clarity</h3>
            <p className="muted">Business owners know what’s happening, teams gain practical skills, and knowledge stays within the organization.</p>
          </article>
          <article className="card">
            <h3>Built for independence</h3>
            <p className="muted">Our goal is not dependency. Our goal is independence for small business owners, community leaders, and policymakers.</p>
          </article>
        </div>
      </section>

      <section className="section container">
        <h2>Our Team</h2>
        <p className="muted">We are a firm built by experienced professionals — coaches, developers, AI and ML engineers, data specialists, and trainers — united by one purpose: solving real business problems and helping organizations grow sustainably.</p>
      </section>

      <section className="section container" aria-labelledby="contact-cta">
        <h2 id="contact-cta">Let’s Start a Conversation</h2>
        <p>We’re not asking for big commitments today. We’re asking for conversations.</p>
        <p className="muted">If you’re looking to gain clarity from your data, make better decisions, and use technology more effectively, we’d love to talk.</p>
        <div className="cards" style={{marginTop:12}}>
          <article className="card">
            <h3>Contact Information</h3>
            <p>📧 Email: contact@yourcompany.com</p>
            <p>📞 Phone: +1 (XXX) XXX-XXXX</p>
            <p>📍 Location: Serving businesses and communities locally and globally</p>
            <div style={{marginTop:12}}>
              <button className="btn btn-primary" onClick={()=>{ const el = document.querySelector('.site-header .header-cta'); if(el) el.click(); }}>Contact Us to Explore Solutions</button>
            </div>
          </article>
        </div>
        <p style={{marginTop:16,fontWeight:600}}>“We don’t replace what’s working — we make it work better.”</p>
      </section>

      {/* Contact section removed — contact details live in the footer and header slide-over */}
    </div>
  )
}
