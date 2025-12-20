import React, {useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'

export default function MobileMenu({open, onClose}){
  const panelRef = useRef(null)

  useEffect(()=>{
    if(!open) return
    const prev = document.activeElement
    const first = panelRef.current && panelRef.current.querySelector('a,button')
    first && first.focus()
    function onKey(e){ if(e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return ()=>{ window.removeEventListener('keydown', onKey); try{ prev && prev.focus() }catch(e){} }
  },[open,onClose])

  if(!open) return null
  return (
    <div className="mobile-menu" role="dialog" aria-modal="true">
      <div className="mobile-panel" ref={panelRef}>
        <button className="close" onClick={onClose} aria-label="Close menu">Close</button>
        <nav aria-label="Mobile navigation">
          <ul style={{listStyle:'none',padding:0,marginTop:12,display:'flex',flexDirection:'column',gap:12}}>
            <li><Link to="/" onClick={onClose}>Home</Link></li>
            <li><Link to="/solutions" onClick={onClose}>Solutions</Link></li>
            <li><Link to="/case-studies" onClick={onClose}>Case studies</Link></li>
            <li><Link to="/blog" onClick={onClose}>Blog</Link></li>
            <li><Link to="/careers" onClick={onClose}>Careers</Link></li>
            <li><Link to="/pricing" onClick={onClose}>Pricing</Link></li>
            <li><Link to="/contact" onClick={onClose}>Contact</Link></li>
          </ul>
        </nav>
      </div>
      <div className="mobile-backdrop" onClick={onClose} aria-hidden="true" />
    </div>
  )
}
