import React from 'react'

export default function EmptyState({title, description, action}){
  return (
    <div className="empty-state">
      <div className="empty-illustration" aria-hidden>🎨</div>
      <h3>{title}</h3>
      {description && <p className="muted">{description}</p>}
      {action && <div className="empty-action">{action}</div>}
    </div>
  )
}
