


import React from 'react'
import LeadershipCard from '../components/LeadershipCard'
import NewsBanner from '../components/NewsBanner'
import CaseStudyCard from '../components/CaseStudyCard'
import MaintenanceBanner from '../components/MaintenanceBanner'
import useDocumentTitle from '../utils/useDocumentTitle'

const leaders = [
  {name:'Sandeep Reddy', title:'Direc', photo:'', quote:'We focus on measurable impact.'},
  {name:'Manoj Kumar', title:'Director - Business & Technology', photo:'', quote:'Technology and strategy together.'},
  {name:'Bala Krishna', title:'Director - Operations, India', photo:'', quote:'Operational excellence and delivery.'}
]

export default function Home(){
  useDocumentTitle('Home')
  return (
    <div className="page home">
      <MaintenanceBanner />
      <section className="hero">
        <div className="container hero-inner">
          <div style={{maxWidth:640}}>
            <h1>Build and deliver software products and solutions that scale</h1>
            <p>We combine product strategy, engineering, and operations to deliver measurable business outcomes. Start with an MVP and iterate rapidly.</p>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={()=>{ const el = document.querySelector('.site-header .header-cta'); if(el) el.click(); }}>Get started</button>
              <button className="btn btn-secondary" onClick={()=>{ const el = document.querySelector('.site-header .header-cta'); if(el) el.click(); }}>Request demo</button>
            </div>
          </div>
          <aside style={{minWidth:260}}>
            <div className="card" style={{padding:20}}>
              <h3 style={{marginTop:0}}>MVP in 8 weeks</h3>
              <p className="muted">Fast, focused teams delivering production-ready products.</p>
              <div style={{marginTop:12}}>
                <button className="btn btn-primary" onClick={()=>{ const el = document.querySelector('.site-header .header-cta'); if(el) el.click(); }}>Start a project</button>
              </div>
            </div>
          </aside>
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

      <section className="section container">
        <h2>Use cases</h2>
        <div className="cards" style={{marginTop:12}}>
          <article className="card">
            <h3>Productization</h3>
            <p className="muted">Turn ideas into measurable products with clear roadmaps.</p>
          </article>
          <article className="card">
            <h3>Platform Migration</h3>
            <p className="muted">Migrate legacy systems to modern cloud-native platforms.</p>
          </article>
          <article className="card">
            <h3>Analytics & Data</h3>
            <p className="muted">Centralize metrics and enable data-driven decisions.</p>
          </article>
        </div>
      </section>

      {/* Contact section removed — contact details live in the footer and header slide-over */}
    </div>
  )
}
