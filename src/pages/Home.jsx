import React from 'react'
import LeadershipCard from '../components/LeadershipCard'
import NewsBanner from '../components/NewsBanner'

const leaders = [
  {name:'Sandeep Reddy', title:'CEO', photo:'', quote:'We focus on measurable impact.'},
  {name:'Manoj Kumar', title:'Director - Business & Technology', photo:'', quote:'Technology and strategy together.'},
  {name:'Bala Krishna', title:'Director - Operations, India', photo:'', quote:'Technology and strategy together.'}
]

export default function Home(){
  return (
    <div className="page home">
      <NewsBanner title="Latest News" subtitle="Company expands into new markets" image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=60" />

      <section className="leadership-section">
        <h2>Leadership</h2>
        <div className="leadership-list">
          {leaders.map((l,i)=>(
            <LeadershipCard key={i} {...l} />
          ))}
        </div>
      </section>

      <section className="news-section">
        <h2>News & Updates</h2>
        <div className="news-grid">
          <article className="news-item">
            <img src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=800&q=60" alt="news" />
            <h4>Quarterly results announced</h4>
            <p>Performance highlights and outlook.</p>
          </article>
          <article className="news-item">
            <img src="https://images.unsplash.com/photo-1529336953123-1f7f3a0c0f6f?w=800&q=60" alt="news" />
            <h4>New training programs</h4>
            <p>Upskilling courses for clients.</p>
          </article>
        </div>
      </section>
    </div>
  )
}
