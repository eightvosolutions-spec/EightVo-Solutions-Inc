import React, { useState, useEffect, useRef, useContext } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeProvider'
export default function Header(){
  const [open,setOpen]=useState(false)
  const button=useRef(null)
  const {pathname}=useLocation()
  const {theme,toggle}=useContext(ThemeContext)
  useEffect(()=>{setOpen(false)},[pathname])
  function closeOnEscape(e){if(e.key==='Escape'){setOpen(false);button.current?.focus()}}
  return <header className="ev-header" onKeyDown={closeOnEscape}><a className="ev-skip" href="#main-content">Skip to content</a><div className="ev-wrap ev-header-inner">
    <Link to="/" className="ev-brand" aria-label="EightVo Solutions home"><span className="ev-brand-symbol"><img src="/icons/logo-mark.png" alt="" width="52" height="52" /></span><span>EightVo<span className="ev-brand-small">SOLUTIONS</span></span></Link>
    <button ref={button} className="ev-menu-toggle" aria-expanded={open} aria-controls="ev-navigation" onClick={()=>setOpen(!open)}>{open?'Close ✕':'Menu ☰'}</button>
    <nav id="ev-navigation" className={'ev-nav'+(open?' is-open':'')} aria-label="Primary navigation"><NavLink to="/solutions">What we build</NavLink><NavLink to="/products/mycanjourney">MyCanJourney</NavLink><NavLink to="/about">About us</NavLink><Link className="ev-button ev-primary" to="/contact">Let’s talk <span aria-hidden="true">↗</span></Link></nav>
    <button className="ev-theme" onClick={toggle} aria-label={theme==='dark'?'Switch to light theme':'Switch to dark theme'} aria-pressed={theme==='dark'}>{theme==='dark'?'☀':'◐'}</button>
  </div></header>
}
