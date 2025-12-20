import React, {useState, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
import CookieModal from './CookieModal'

function readPrefs(){
  try{ return JSON.parse(localStorage.getItem('cookiePrefs')||'null') }catch(e){return null}
}

export default function Footer(){
  const [cookieOpen, setCookieOpen] = useState(false)
  const cookieBtnRef = useRef(null)
  
  const [prefs, setPrefs] = useState(()=> readPrefs())

  useEffect(()=>{
    const onStorage = ()=> setPrefs(readPrefs())
    window.addEventListener('storage', onStorage)
    return ()=> window.removeEventListener('storage', onStorage)
  },[])

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand">EightVo Solutions</Link>
          <p className="muted" style={{marginTop:8}}>We help small businesses and communities unlock value from the technology they already own.</p>
          <div style={{marginTop:12}}>
            <button id="cookie-settings-btn" ref={cookieBtnRef} className="btn btn-ghost" style={{marginLeft:0}} onClick={()=> setCookieOpen(true)}>Cookie Settings</button>
          </div>
        </div>

        <div className="footer-col">
          <h4>Product</h4>
          <nav aria-label="Product">
            <Link to="/solutions">Solutions</Link>
            <Link to="/pricing">Pricing</Link>
          </nav>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <nav aria-label="Resources">
            <Link to="/blog">Blog</Link>
            <Link to="/case-studies">Case studies</Link>
          </nav>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <nav aria-label="Company">
            <Link to="/careers">Careers</Link>
            <Link to="/privacy">Privacy</Link>
          </nav>
        </div>

        <div className="footer-contact-col" aria-label="Contact information">
          <h4>Contact</h4>
          <address className="vcard" style={{fontStyle:'normal'}}>
            <div className="org">EightVo Solutions Inc.</div>
            <div className="adr">East York, Toronto, Ontario</div>
          </address>
          <div className="contact-links" style={{marginTop:6}}>
            <a href="mailto:info@eightvo.ca">info@eightvo.ca</a><br />
            <a href="tel:+14374993602">+1 437 499-3602</a><br />
            <a href="tel:+14379863162">+1 437 986-3162</a>
          </div>
          
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="legal">© {new Date().getFullYear()} EightVo Solutions Inc. — All rights reserved.</div>
        <nav aria-label="Footer small links" className="small-links">
          <Link to="/accessibility">Accessibility</Link>
          <Link to="/cookie-policy">Cookie Policy</Link>
        </nav>
      </div>

      <CookieModal open={cookieOpen} onClose={()=>{ setCookieOpen(false); setPrefs(JSON.parse(localStorage.getItem('cookiePrefs')||'null')) }} openerRef={cookieBtnRef} />

      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "EightVo Solutions Inc.",
          "url": "https://www.eightvo.com",
          "logo": "https://www.eightvo.com/logo.png",
          "contactPoint": [{
            "@type": "ContactPoint",
            "telephone": "+1-437-499-3602",
            "contactType": "customer service",
            "areaServed": "CA",
            "availableLanguage": ["English"]
          }, {
            "@type": "ContactPoint",
            "telephone": "+1-437-986-3162",
            "contactType": "customer service",
            "areaServed": "CA",
            "availableLanguage": ["English"]
          }],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "East York",
            "addressLocality": "Toronto",
            "addressRegion": "ON",
            "postalCode": "",
            "addressCountry": "CA"
          }
        }
        `}
      </script>
    </footer>
  )
}
