import React from 'react'
import CaseStudyCard from '../components/CaseStudyCard'
import useDocumentTitle from '../utils/useDocumentTitle'

const clarityHighlights = [
  {
    title: "The Challenge Isn't Technology — It's Clarity",
    copy: 'We cut through noise so ideas ship sooner.'
  },
  {
    title: 'New ideas. Existing platforms. Same momentum.',
    copy: 'Greenfield builds or live system boosts — both get fast squads.'
  },
  {
    title: 'Direction in days, launches in weeks.',
    copy: 'Lean plans, visible progress, measurable impact.'
  }
]

export default function Home(){
  useDocumentTitle('Home')
  return (
    <div className="page home">
      <section className="hero">
        <div className="container hero-inner">
          <div style={{maxWidth:640}}>
            <h1>Launch new products and elevate the ones you already run</h1>
            <p>Product minds and engineers in one crew, ready for fresh builds or bold upgrades.</p>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={()=>{ const el = document.querySelector('.site-header .header-cta'); if(el) el.click(); }}>Get started</button>
              <button className="btn btn-secondary" onClick={()=>{ const el = document.querySelector('.site-header .header-cta'); if(el) el.click(); }}>Request demo</button>
            </div>
          </div>
          <aside style={{minWidth:260}}>
            <div className="card" style={{padding:20}}>
              <h3 style={{marginTop:0}}>Momentum in 8 weeks</h3>
              <p className="muted">Focused teams delivering launch-ready work, sprint after sprint.</p>
              <div style={{marginTop:12}}>
                <button className="btn btn-primary" onClick={()=>{ const el = document.querySelector('.site-header .header-cta'); if(el) el.click(); }}>Start a project</button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section container" aria-labelledby="clarity-blocks">
        <h2 id="clarity-blocks" className="visually-hidden">Why teams pick us</h2>
        <div className="cards" style={{marginTop:0}}>
          {clarityHighlights.map((item, i) => (
            <article key={i} className="card" style={{padding:20}}>
              <h3 style={{marginTop:0}}>{item.title}</h3>
              <p className="muted">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section container" aria-labelledby="featured-cases">
        <h2 id="featured-cases">Featured Case Studies</h2>
        <div className="case-grid">
          <CaseStudyCard
            title="Platform migration for a fintech"
            excerpt="Modernized payment pipelines and reduced latency by 60%."
            image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=60"
            metric="60% lower latency"
            href="/case-studies/fintech-migration"
          />

          <CaseStudyCard
            title="SaaS productization for a media startup"
            excerpt="Built an MVP and a growth roadmap; accelerated time-to-market."
            image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=60&auto=format&fit=crop"
            metric="MVP in 8 weeks"
            href="/case-studies/media-productization"
          />
        </div>

        <div style={{display:'flex',justifyContent:'flex-start',gap:12,marginTop:16}}>
          <a className="btn btn-primary" href="/case-studies">See all case studies</a>
          <button className="btn btn-ghost" onClick={()=>{ const el = document.querySelector('.site-header .header-cta'); if(el) el.click(); }}>Talk to sales</button>
        </div>
      </section>

      <section className="section container" aria-labelledby="trust">
        <h2 id="trust">Trusted by</h2>
        <div style={{display:'flex',gap:16,alignItems:'center',marginTop:12}}>
          <div className="card" style={{padding:12}}>Logo A</div>
          <div className="card" style={{padding:12}}>Logo B</div>
          <div className="card" style={{padding:12}}>Logo C</div>
          <div style={{marginLeft:'auto',display:'flex',gap:12}}>
            <div className="card" style={{padding:12,textAlign:'center'}}>
              <strong>12x</strong>
              <div className="muted">Faster delivery</div>
            </div>
            <div className="card" style={{padding:12,textAlign:'center'}}>
              <strong>99.9%</strong>
              <div className="muted">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2>Use cases</h2>
        <div className="cards" style={{marginTop:12}}>
          <article className="card">
            <h3>New builds</h3>
            <p className="muted">Fast tracks from sketch to launch-ready MVPs.</p>
          </article>
          <article className="card">
            <h3>Platform lifts</h3>
            <p className="muted">Modernize live systems without slowing the business.</p>
          </article>
          <article className="card">
            <h3>Data leaps</h3>
            <p className="muted">Bring analytics and automation into everyday decisions.</p>
          </article>
        </div>
      </section>

      {/* Contact section removed — contact details live in the footer and header slide-over */}
    </div>
  )
}
