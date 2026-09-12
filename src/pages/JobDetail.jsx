import React, { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import useDocumentTitle from '../utils/useDocumentTitle'
import { getJobBySlug } from '../data/jobs'

const ACCEPTED_TYPES = '.pdf,.doc,.docx'
const MAX_FILE_MB = 4

export default function JobDetail(){
  const { slug } = useParams()
  const job = getJobBySlug(slug)
  useDocumentTitle(job ? `${job.title} — Careers` : 'Role not found')

  if (!job) return <Navigate to="/careers" replace/>

  return <div className="ev-page">
    <div className="ev-wrap ev-page-intro ev-job-detail">
      <Link className="ev-text-link" to="/careers">← Back to all roles</Link>
      <div className="ev-job-header">
        <span className="ev-job-tag">{job.department}</span>
        <span className="ev-job-tag">{job.type}</span>
      </div>
      <h1>{job.title}</h1>
      <p className="ev-job-location">{job.location} · {job.posted}</p>
      <p>{job.summary}</p>
      <a className="ev-button ev-primary ev-job-apply-cta" href="#apply">Apply for this role <span aria-hidden="true">↓</span></a>
    </div>

    <div className="ev-wrap">
      <section className="ev-job-section">
        <h2>About the role</h2>
        {job.overview.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}
      </section>
      <section className="ev-job-section">
        <h2>What you'll do</h2>
        <ul>{job.responsibilities.map((item, i) => <li key={i}>{item}</li>)}</ul>
      </section>
      <section className="ev-job-section">
        <h2>What we're looking for</h2>
        <ul>{job.minimumQualifications.map((item, i) => <li key={i}>{item}</li>)}</ul>
      </section>
      <section className="ev-job-section">
        <h2>Nice to have</h2>
        <ul>{job.niceToHave.map((item, i) => <li key={i}>{item}</li>)}</ul>
      </section>

      <section id="apply" className="ev-job-apply">
        <h2>Apply for this role</h2>
        <p>Tell us a bit about yourself and attach your latest resume. We'll get back to you by email.</p>
        <ApplyForm job={job}/>
      </section>
    </div>
  </div>
}

function ApplyForm({ job }){
  const [values, setValues] = useState({ name: '', email: '', phone: '', coverNote: '' })
  const [file, setFile] = useState(null)
  const [fileError, setFileError] = useState('')
  const [status, setStatus] = useState('idle')

  function onFileChange(e){
    const f = e.target.files && e.target.files[0]
    setFileError('')
    if (!f){ setFile(null); return }
    const okType = /\.(pdf|docx?|DOCX?|PDF)$/.test(f.name)
    if (!okType){
      setFile(null); setFileError('Please attach a PDF or Word document (.pdf, .doc, .docx).'); e.target.value = ''; return
    }
    if (f.size > MAX_FILE_MB * 1024 * 1024){
      setFile(null); setFileError(`That file is larger than ${MAX_FILE_MB}MB. Please attach a smaller file.`); e.target.value = ''; return
    }
    setFile(f)
  }

  async function submit(e){
    e.preventDefault()
    if (status === 'sending') return
    if (!file){ setFileError('Please attach your resume.'); return }
    setStatus('sending')
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 30000)
    try{
      const formData = new FormData()
      formData.append('name', values.name.trim())
      formData.append('email', values.email.trim())
      formData.append('phone', values.phone.trim())
      formData.append('coverNote', values.coverNote.trim())
      formData.append('jobTitle', job.title)
      formData.append('jobSlug', job.slug)
      formData.append('resume', file)
      const res = await fetch('/api/careers/apply', { method: 'POST', body: formData, signal: controller.signal })
      const data = await res.json()
      if (!res.ok || data.ok !== true) throw new Error(data.error || 'Send failed')
      setStatus('success')
      setValues({ name: '', email: '', phone: '', coverNote: '' })
      setFile(null)
    }catch(err){
      setStatus('error')
    }finally{
      clearTimeout(timeout)
    }
  }

  return <form className="ev-contact-form ev-apply-form" onSubmit={submit}>
    <label>Your name<input name="name" autoComplete="name" required maxLength={120} value={values.name} onChange={e=>setValues({...values,name:e.target.value})}/></label>
    <label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254} value={values.email} onChange={e=>setValues({...values,email:e.target.value})}/></label>
    <label>Phone number<input name="phone" type="tel" autoComplete="tel" required maxLength={30} value={values.phone} onChange={e=>setValues({...values,phone:e.target.value})}/></label>
    <label>Anything you'd like to add (optional)<textarea name="coverNote" rows={5} maxLength={3000} value={values.coverNote} onChange={e=>setValues({...values,coverNote:e.target.value})}/></label>
    <label>Latest resume<input name="resume" type="file" accept={ACCEPTED_TYPES} required onChange={onFileChange}/></label>
    <p className="ev-field-hint">PDF or Word document, up to {MAX_FILE_MB}MB.{file ? ` Selected: ${file.name}` : ''}</p>
    {fileError && <p className="ev-field-hint ev-field-error" role="alert">{fileError}</p>}
    <p className="ev-note">We'll only use this information to review your application for this role.</p>
    <button className="ev-button ev-primary" disabled={status==='sending'} type="submit">{status==='sending' ? 'Sending…' : 'Submit application ↗'}</button>
    <div aria-live="polite">{status==='success' && <p>Thanks for applying — we've received your application and will be in touch.</p>}</div>
    {status==='error' && <p role="alert">We couldn't confirm your application was sent. Please try again, or reach us directly via the <Link to="/contact">contact page</Link>.</p>}
  </form>
}
