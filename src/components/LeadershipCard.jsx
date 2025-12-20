import React from 'react'

export default function LeadershipCard({name, title, photo, quote}){
  const src = photo || 'https://via.placeholder.com/72?text=Photo'
  return (
    <article className="leadership-card">
      <img loading="lazy" width="72" height="72" src={src} alt={name} />
      <div className="lead-content">
        <h4>{name}</h4>
        <small>{title}</small>
        <blockquote>{quote}</blockquote>
      </div>
    </article>
  )
}
