import React from 'react'
import { Link } from 'react-router-dom'
import { PageBanner } from '../components/BrandContent'
import { jobs } from '../data/jobs'
import useDocumentTitle from '../utils/useDocumentTitle'

export default function Careers(){
  useDocumentTitle('Work with us')
  return <div className="ev-page">
    <PageBanner image="/images/banner-solutions.jpg"/>
    <section className="ev-wrap ev-page-intro">
      <span className="ev-eyebrow">WORK WITH US</span>
      <h1>Bring your perspective.<br/><em>Build with purpose.</em></h1>
      <p>We're a small, AI-focused team building products around real business expertise. Below are our current openings — take a look, and if something fits, we'd love to hear from you.</p>
    </section>
    <section className="ev-wrap ev-section">
      <div className="ev-job-list">
        {jobs.map(job => (
          <Link className="ev-job-card" to={`/careers/${job.slug}`} key={job.slug}>
            <div className="ev-job-card-top">
              <span className="ev-job-tag">{job.department}</span>
              <span className="ev-job-tag">{job.type}</span>
            </div>
            <h3>{job.title}</h3>
            <p className="ev-job-location">{job.location}</p>
            <p>{job.summary}</p>
            <span className="ev-text-link">View role details <span aria-hidden="true">→</span></span>
          </Link>
        ))}
      </div>
      <p className="ev-note">Don't see a fit but think you should be on our radar anyway? <Link to="/contact">Get in touch</Link> — we're interested in connecting with people who care about thoughtful design, practical AI, and deep business expertise.</p>
    </section>
  </div>
}
