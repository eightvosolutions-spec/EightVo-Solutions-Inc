import React from 'react'

export default function Card({title, actions, children, footer}){
  return (
    <div className="ui-card card">
      <div className="card-head">
        <h3 className="card-title">{title}</h3>
        <div className="card-actions">{actions}</div>
      </div>
      <div className="card-body">{children}</div>
      {footer ? <div className="card-footer">{footer}</div> : null}
    </div>
  )
}

