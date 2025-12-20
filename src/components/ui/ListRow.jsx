import React from 'react'

export default function ListRow({checked, onChange, title, meta, actions}){
  return (
    <div className="list-row" role="listitem">
      <label className="list-checkbox">
        <input type="checkbox" checked={!!checked} onChange={onChange} aria-label={`Select ${title}`} />
      </label>
      <div className="list-main">
        <div className="list-title">{title}</div>
        {meta && <div className="list-meta muted">{meta}</div>}
      </div>
      <div className="list-actions">{actions}</div>
    </div>
  )
}
