import React, {useState, useRef, useEffect} from 'react'
import SlideOver from './ui/SlideOver'
import { trackEvent } from '../utils/analytics'

export default function ContactSlideOver({open, onClose}){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const firstRef = useRef(null)

  useEffect(()=>{
    if(open){
      setTimeout(()=> firstRef.current && firstRef.current.focus(), 80)
      trackEvent('contact_slideover_opened', {source:'header'})
    }
  },[open])

  function validate(){
    if(!name.trim()) return 'Please enter your name.'
    if(!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) return 'Please enter a valid email.'
    if(!message.trim()) return 'Please enter a message.'
    return null
  }

  async function handleSubmit(e){
    e && e.preventDefault()
    setError(null)
    const v = validate()
    if(v){ setError(v); return }
    setSubmitting(true)
    trackEvent('contact_form_submitted', {source:'slideover'})
    try{
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, email, message})
      })

      if(!res.ok){
        const err = await res.json().catch(()=>({error:'Request failed'}))
        throw new Error(err && err.error ? err.error : 'Request failed')
      }

      setName(''); setEmail(''); setMessage('')
      onClose && onClose()
    }catch(err){ setError('Submission failed. ' + (err && err.message ? err.message : '')) }
    setSubmitting(false)
  }

  return (
    <SlideOver open={open} onClose={onClose} title="Contact EightVo Solutions">
      <form className="card form" onSubmit={handleSubmit} aria-label="Contact form">
        <div className="form-row">
          <label className="form-label">Name
            <input className="form-input" ref={firstRef} value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" aria-required="true" />
          </label>
        </div>

        <div className="form-row">
          <label className="form-label">Email
            <input className="form-input" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.com" type="email" aria-required="true" />
          </label>
        </div>

        <div className="form-row">
          <label className="form-label">Message
            <textarea className="form-textarea" value={message} onChange={e=>setMessage(e.target.value)} placeholder="How can we help?" rows={6} aria-required="true" />
          </label>
        </div>

        {error && <div role="alert" className="form-error">{error}</div>}

        <div className="form-actions">
          <button className="btn btn-primary" type="submit" disabled={submitting}>{submitting ? 'Sending…' : 'Send message'}</button>
          <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </SlideOver>
  )
}
