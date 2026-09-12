import React from 'react'
import { Link } from 'react-router-dom'

export const capabilities = [
  ['01', 'AI-powered applications', 'Thoughtful AI features that help people find answers, complete tasks, and make sense of complex information.'],
  ['02', 'Intelligent websites', 'Fast, accessible websites with clear journeys, useful personalization, and a natural experience on every screen.'],
  ['03', 'Connected workflows', 'Bring business systems and everyday processes together, reducing repetitive work and unnecessary steps.']
]
export function Capabilities(){
  return <div className="ev-cards">{capabilities.map(([n,title,copy])=><article className="ev-card" key={n}><span className="ev-number">{n}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
}
export function ProductFeature(){
  return <section className="ev-product ev-wrap" aria-labelledby="journey-title">
    <div className="ev-product-copy"><span className="ev-eyebrow">OUR PRODUCT · IN DEVELOPMENT</span><h2 id="journey-title">MyCanJourney<span className="ev-dot">.</span></h2>
    <h3>Your Canadian immigration journey, made clear.</h3><p>Know where you stand. Understand your options. Know what to do next.</p>
    <p>We’re building MyCanJourney to help people understand and manage their Canadian immigration journey using their own profile, current immigration rules, personalized pathway insights, reminders, score explanations, and practical next steps.</p>
    <Link className="ev-button ev-primary" to="/products/mycanjourney">Explore MyCanJourney <span aria-hidden="true">↗</span></Link></div>
    <div className="ev-preview"><div className="ev-preview-top"><strong>MyCanJourney</strong><span>Concept preview</span></div>
      <div className="ev-preview-body"><span className="ev-eyebrow">YOUR JOURNEY, IN FOCUS</span><h3>A clearer path starts<br/>with you.</h3>
      <div className="ev-preview-row"><span className="ev-step">1</span><div><strong>Your profile</strong><small>Your experience. Your goals.</small></div><span aria-hidden="true">✓</span></div>
      <div className="ev-preview-row"><span className="ev-step">2</span><div><strong>Your options</strong><small>Understand possible pathways.</small></div><span aria-hidden="true">↗</span></div>
      <div className="ev-preview-row"><span className="ev-step">3</span><div><strong>Your next step</strong><small>Move forward with more clarity.</small></div><span aria-hidden="true">→</span></div>
      <p className="ev-preview-note">An early look at the experience we’re designing.</p></div></div>
  </section>
}
export function CallToAction(){
  return <section className="ev-wrap ev-cta"><div><span className="ev-eyebrow">LET’S BUILD SOMETHING USEFUL</span><h2>Your expertise.<br/>Our technology. Real possibilities.</h2><p>Have an idea, a business challenge, or a domain you know inside out? Let’s talk.</p></div><Link className="ev-button ev-primary" to="/contact">Start a conversation <span aria-hidden="true">↗</span></Link></section>
}
export function Photo({id,alt,className='',eager=false}){
  const base='https://images.unsplash.com/'+id
  return <img className={className} src={base+'?auto=format&fit=crop&w=1200&q=80'} srcSet={[480,800,1200,1600].map(w=>base+'?auto=format&fit=crop&w='+w+'&q=80 '+w+'w').join(', ')} sizes="(max-width: 760px) 100vw, 50vw" width="1200" height="900" alt={alt} loading={eager?'eager':'lazy'} decoding="async"/>
}
