import React from 'react'

export default function LeadershipCard({name, title, photo, quote}){
  return (
    <article className="leadership-card">
      <img src={photo} alt={`${name}`} />
      <div className="lead-content">
        <h4>{name}</h4>
        <small>{title}</small>
        <blockquote>{quote}</blockquote>
      </div>
    </article>
  )
}
