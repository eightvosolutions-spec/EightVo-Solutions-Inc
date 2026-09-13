import React from 'react'
import { Link } from 'react-router-dom'
import useDocumentTitle from '../utils/useDocumentTitle'
import { Capabilities, ProductFeature, CallToAction } from '../components/BrandContent'
export default function Home(){
  useDocumentTitle('AI products, built around people')
  return <div className="ev-page">
    <section className="ev-hero ev-wrap"><div className="ev-hero-copy"><span className="ev-eyebrow">HUMAN INSIGHT. INTELLIGENT TECHNOLOGY.</span><h1>Powerful AI.<br/>Simple experiences.<br/><em>Lasting impact.</em></h1><p>We build AI-powered applications and websites that make life and work easier—bringing business expertise, thoughtful design, and intelligent technology together.</p><div className="ev-actions"><Link className="ev-button ev-primary" to="/solutions">Discover what we build <span aria-hidden="true">↗</span></Link><Link className="ev-text-link" to="/products/mycanjourney">Meet MyCanJourney <span aria-hidden="true">→</span></Link></div><div className="ev-hero-foot">Built around people. Designed to grow with them.</div></div>
    <div className="ev-hero-image"><img src="/images/ai-products.webp" alt="Illustration of people building connected, easy-to-use AI applications on a laptop and phone" width="1000" height="1250" loading="eager" fetchPriority="high" decoding="async"/><div className="ev-image-shade"/><div className="ev-image-label"><span className="ev-live-dot"/> IDEAS INTO EVERYDAY IMPACT</div><div className="ev-image-caption">Technology feels better<br/>when people come first.</div><div className="ev-image-chip"><span aria-hidden="true">✦</span> AI + domain expertise</div></div></section>
    <div className="ev-principles ev-wrap"><span>Thoughtfully powered by AI</span><span>Grounded in business expertise</span><span>Made for everyday use</span></div>
    <section className="ev-section ev-wrap"><div className="ev-section-heading"><div><span className="ev-eyebrow">WHAT WE BUILD</span><h2>Less friction.<br/>More possibility.</h2></div><p>From a first idea to a product people rely on, we focus on making complex things feel straightforward.</p></div><Capabilities/></section>
    <ProductFeature/>
    <section className="ev-section ev-wrap ev-about"><img src="/images/expert-collaboration.webp" alt="AI-created illustration of domain experts collaborating on a product workflow" width="1400" height="933" loading="lazy" decoding="async"/><div><span className="ev-eyebrow">THE EIGHTVO APPROACH</span><h2>Great products start<br/>with understanding.</h2><p>Domain experts understand the real challenges. Our role is to turn that knowledge into useful digital experiences—with AI where it adds value and people at the heart of every decision.</p><p>For us, sustainable products are built for long-term usefulness: maintainable foundations, considered use of resources, and room to evolve as needs change.</p><Link className="ev-text-link" to="/about">Get to know EightVo <span aria-hidden="true">→</span></Link></div></section>
    <CallToAction/>
  </div>
}
