import React from 'react'
import { Button, Card } from '../components/ui'
import useDocumentTitle from '../utils/useDocumentTitle'

export default function DesignSystem(){
  useDocumentTitle('Design System')
  return (
    <div className="page design-system">
      <div className="container">
        <h1>Design System — EightVo</h1>
        <p className="muted">Style tile and component examples for quick visual validation.</p>

        <section style={{marginTop:20}}>
          <h2>Colors</h2>
          <div className="palette">
            <div className="swatch" style={{background:'#0B8F6B'}}>Primary</div>
            <div className="swatch" style={{background:'#0B79B0'}}>Secondary</div>
            <div className="swatch" style={{background:'#0F172A'}}>Text</div>
            <div className="swatch" style={{background:'#6B7280'}}>Muted</div>
            <div className="swatch" style={{background:'#F8FAFC',color:'#0F172A'}}>Surface</div>
          </div>
        </section>

        <section style={{marginTop:20}}>
          <h2>Typography</h2>
          <div className="type-sample"><h1 style={{fontSize:'2rem',margin:0}}>H1 — Build and deliver products</h1></div>
          <div className="type-sample"><h2 style={{fontSize:'1.5rem',margin:0}}>H2 — Product strategy meets engineering</h2></div>
          <div className="type-sample"><p style={{fontSize:'1rem',color:'var(--color-muted)'}}>Body — Use Inter for UI, strong hierarchy and readable line length.</p></div>
        </section>

        <section style={{marginTop:20}}>
          <h2>Buttons</h2>
          <div style={{display:'flex',gap:12,alignItems:'center',flexWrap:'wrap'}}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </section>

        <section style={{marginTop:20}}>
          <h2>Cards</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:12}}>
            <Card>
              <h3>Project health</h3>
              <p className="muted">3 active sprints • 12 open issues</p>
            </Card>
            <Card>
              <h3>Recent deliverable</h3>
              <p className="muted">Prototype v0.8 delivered to client</p>
            </Card>
          </div>
        </section>

        <section style={{marginTop:20}}>
          <h2>Usage</h2>
          <p className="muted">Open this page during development to validate the visual language and components.</p>
        </section>
      </div>
    </div>
  )
}
