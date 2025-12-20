import React, {useEffect} from 'react'

export default function Modal({open, onClose, title, children, actions}){
  useEffect(()=>{
    function onKey(e){ if(e.key==='Escape') onClose() }
    if(open) window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  },[open,onClose])

  if(!open) return null
  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modal-box">
        <header className="modal-head">
          <h3>{title}</h3>
          <button onClick={onClose} aria-label="Close">✕</button>
        </header>
        <div className="modal-body">{children}</div>
        {actions && <div className="modal-actions">{actions}</div>}
      </div>
      <div className="modal-backdrop" onClick={onClose} aria-hidden />
    </div>
  )
}
