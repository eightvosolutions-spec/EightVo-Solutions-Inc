import React, {useEffect, useRef} from 'react'

export default function QuickCreate({open, onClose, onCreate}){
  const nameRef = useRef(null)
  useEffect(()=>{ if(open) nameRef.current?.focus() },[open])
  if(!open) return null
  function submit(e){ e.preventDefault(); const val = nameRef.current.value; onCreate && onCreate({name:val}); onClose && onClose() }
  return (
    <div className="quick-create" role="dialog" aria-modal="true">
      <form className="quick-box" onSubmit={submit}>
        <h3>Quick create</h3>
        <input ref={nameRef} placeholder="Name" required />
        <div style={{display:'flex',gap:8,marginTop:12}}>
          <button className="btn btn-primary">Create</button>
          <button type="button" className="btn" onClick={onClose}>Cancel</button>
        </div>
      </form>
      <div className="quick-backdrop" onClick={onClose} aria-hidden />
    </div>
  )
}
