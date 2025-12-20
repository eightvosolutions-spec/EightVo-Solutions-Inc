import React, {useState, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeProvider'
import ContactSlideOver from './ContactSlideOver'
import { trackEvent } from '../utils/analytics'
import MobileMenu from './MobileMenu'

export default function Header(){
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')
  const navigate = useNavigate()
  const { theme, toggle } = useContext(ThemeContext)
  const [contactOpen, setContactOpen] = useState(false)

  function submitSearch(e){
    e.preventDefault()
    if(q.trim()) navigate(`/?q=${encodeURIComponent(q.trim())}`)
  }

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="container topbar">
        <button className={`hamburger ${open ? 'open' : ''}`} onClick={()=>setOpen(true)} aria-label="Open menu">☰</button>
        <Link to="/" className="brand">EightVo Solutions</Link>

        <div className="nav-spacer" />

        <nav className="main-nav" aria-label="Primary">
          <Link to="/">Home</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/case-studies">Case studies</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/careers">Careers</Link>
        </nav>
        <div style={{marginLeft:12,display:'flex',gap:8,alignItems:'center'}}>
          <button onClick={() => { trackEvent('cta_contact_clicked',{source:'header'}); setContactOpen(true) }} className="btn btn-primary header-cta" aria-label="Contact EightVo Solutions">Contact</button>
          <button onClick={toggle} aria-pressed={theme==='dark'} className="btn-ghost" aria-label="Toggle theme">
            {theme === 'dark' ? '🌙' : '🌞'}
          </button>
        </div>
      </div>
      <MobileMenu open={open} onClose={()=>setOpen(false)} />
      <ContactSlideOver open={contactOpen} onClose={()=>setContactOpen(false)} />
    </header>
  )
}
