import React, {useState} from 'react'
import useDocumentTitle from '../utils/useDocumentTitle'
import { PageBanner } from '../components/BrandContent'
export default function Contact(){
  useDocumentTitle('Let’s talk')
  const [values,setValues]=useState({name:'',email:'',message:''})
  const [status,setStatus]=useState('idle')
  async function submit(e){
    e.preventDefault()
    if(status==='sending')return
    setStatus('sending')
    const controller=new AbortController()
    const timeout=setTimeout(()=>controller.abort(),20000)
    try{
      const res=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:values.name.trim(),email:values.email.trim(),message:values.message.trim()}),signal:controller.signal})
      const data=await res.json()
      if(!res.ok || data.ok!==true)throw new Error('Send failed')
      setStatus('success');setValues({name:'',email:'',message:''})
    }catch{setStatus('error')}finally{clearTimeout(timeout)}
  }
  return <div className="ev-page"><PageBanner image="/images/banner-contact.jpg"/><section className="ev-wrap ev-page-intro ev-contact"><div><span className="ev-eyebrow">LET’S TALK</span><h1>Good things start<br/><em>with a conversation.</em></h1><p>Tell us about your idea, a challenge you’re working through, or your interest in MyCanJourney.</p><p>EightVo Solutions Inc.<br/>Unit 505, 350 Queens Quay W<br/>Toronto, ON M5V 3A7</p><a className="ev-text-link" href="tel:+14379863162">+1 (437) 986-3162</a></div>
  <form className="ev-contact-form" onSubmit={submit}><h2>What’s on your mind?</h2><label>Your name<input name="name" autoComplete="name" required maxLength={120} value={values.name} onChange={e=>setValues({...values,name:e.target.value})}/></label><label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254} value={values.email} onChange={e=>setValues({...values,email:e.target.value})}/></label><label>Tell us a little about it<textarea name="message" rows={6} required maxLength={5000} value={values.message} onChange={e=>setValues({...values,message:e.target.value})}/></label><p className="ev-note">Please don’t include sensitive personal or immigration documents in your message.</p><button className="ev-button ev-primary" disabled={status==='sending'} type="submit">{status==='sending'?'Sending…':'Send message ↗'}</button><div aria-live="polite">{status==='success'&&<p>Thanks for reaching out. Your message has been sent.</p>}</div>{status==='error'&&<p role="alert">We couldn’t confirm your message was sent. Please try again, or call us using the number on this page.</p>}</form></section></div>
}
