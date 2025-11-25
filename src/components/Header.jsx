import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

function MobileMenu({open, onClose}){
  if(!open) return null
  return (
    <div className="mobile-menu">
      <button className="close" onClick={onClose}>Close</button>
      <nav>
        <Link to="/" onClick={onClose}>Home</Link>
        <Link to="/investors" onClick={onClose}>Investors</Link>
        <Link to="/trainings" onClick={onClose}>Trainings</Link>
        <Link to="/careers" onClick={onClose}>Careers</Link>
        <Link to="/contact" onClick={onClose}>Contact</Link>
        <Link to="/terms" onClick={onClose}>Terms</Link>
      </nav>
    </div>
  )
}

export default function Header(){
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')
  const navigate = useNavigate()

  function submitSearch(e){
    e.preventDefault()
    if(q.trim()) navigate(`/?q=${encodeURIComponent(q.trim())}`)
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <button className="hamburger" onClick={()=>setOpen(true)} aria-label="Open menu">☰</button>
        <Link to="/" className="brand">EightVo Solutions Inc.</Link>

        <form className="search" onSubmit={submitSearch} role="search">
          <input aria-label="Search" placeholder="Search" value={q} onChange={e=>setQ(e.target.value)} />
          <button type="submit">🔍</button>
        </form>

        <nav className="main-nav">
          <Link to="/investors">Investors</Link>
          <Link to="/trainings">Trainings</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      <MobileMenu open={open} onClose={()=>setOpen(false)} />
    </header>
  )
}
