import React, { useEffect, useRef, useState } from 'react'
import { readPrefs, savePrefs } from '../utils/cookies'

export default function CookieModal({open, onClose, openerRef}){
  const modalRef = useRef(null)
  const previouslyFocused = useRef(null)
  const [prefs, setPrefs] = useState(()=> readPrefs() || {accepted:false, analytics:false, personalization:false})

  useEffect(()=>{
    if(!open) return
    previouslyFocused.current = document.activeElement
    const main = document.querySelector('#main-content')
    const header = document.querySelector('.site-header')
    const footer = document.querySelector('.site-footer')
    if(main) main.setAttribute('aria-hidden','true')
    if(header) header.setAttribute('aria-hidden','true')
    if(footer) footer.setAttribute('aria-hidden','true')

    // focus first interactive element
    const focusable = modalRef.current.querySelectorAll('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])')
    const first = focusable[0]
    if(first) first.focus()

    function onKey(e){
      if(e.key === 'Escape') onClose()
      if(e.key === 'Tab'){
        const focusables = Array.from(modalRef.current.querySelectorAll('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])'))
        if(!focusables.length) return
        const idx = focusables.indexOf(document.activeElement)
        if(e.shiftKey && idx === 0){
          e.preventDefault(); focusables[focusables.length-1].focus()
        } else if(!e.shiftKey && idx === focusables.length-1){
          e.preventDefault(); focusables[0].focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)

    return ()=>{
      document.removeEventListener('keydown', onKey)
      if(main) main.removeAttribute('aria-hidden')
      if(header) header.removeAttribute('aria-hidden')
      if(footer) footer.removeAttribute('aria-hidden')
      try{ if(openerRef && openerRef.current) openerRef.current.focus(); else previouslyFocused.current && previouslyFocused.current.focus() }catch(e){}
    }
  },[open,onClose,openerRef])

  if(!open) return null

  const statusText = prefs ? (prefs.accepted ? 'Cookies: enabled' : 'Cookies: disabled') : 'Cookies: not set'

  function toggle(field){
    setPrefs(p=>({ ...p, [field]: !p[field] }))
  }

  function acceptAll(){
    const next = {accepted:true, analytics:true, personalization:true}
    setPrefs(next); savePrefs(next); onClose()
  }

  function declineAll(){
    const next = {accepted:false, analytics:false, personalization:false}
    setPrefs(next); savePrefs(next); onClose()
  }

  function saveAndClose(){
    const next = { ...prefs, accepted: prefs.analytics || prefs.personalization }
    setPrefs(next); savePrefs(next); onClose()
  }

  function onBackdropClick(e){
    // only close when clicking the backdrop (outside the modal box)
    if(e.target === e.currentTarget){
      onClose && onClose()
    }
  }

  return (
    <div className="cookie-modal" role="dialog" aria-modal="true" aria-label="Cookie preferences" onClick={onBackdropClick}>
      <div className="cookie-box" ref={modalRef} onClick={e=>e.stopPropagation()}>
        <h3>Cookie Settings</h3>
        <p className="muted">{statusText}</p>
        <p>You can adjust cookie preferences for analytics and personalization.</p>

        <div className="cookie-toggle">
          <label>
            <input type="checkbox" checked={prefs.analytics} onChange={()=>toggle('analytics')} aria-checked={prefs.analytics} />
            <span>Analytics cookies</span>
          </label>
          <p className="muted">Help us understand usage.</p>
        </div>

        <div className="cookie-toggle">
          <label>
            <input type="checkbox" checked={prefs.personalization} onChange={()=>toggle('personalization')} aria-checked={prefs.personalization} />
            <span>Personalization cookies</span>
          </label>
          <p className="muted">Remember display preferences and content suggestions.</p>
        </div>

        <div className="cookie-actions">
          <button onClick={acceptAll} className="btn btn-primary">Accept all</button>
          <button onClick={saveAndClose} className="btn btn-secondary">Save preferences</button>
          <button onClick={declineAll} className="btn btn-ghost">Decline all</button>
        </div>
      </div>
    </div>
  )
}
