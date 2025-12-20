import React, {useEffect, useState} from 'react'

function Toast({t, onClose}){
  useEffect(()=>{
    const id = setTimeout(()=> onClose(t.id), 4500)
    return ()=> clearTimeout(id)
  },[t,onClose])
  return (
    <div className="toast">
      <div className="toast-body">{t.message}</div>
      {t.action && <button className="toast-action" onClick={()=>{t.action(); onClose(t.id)}}>{t.actionLabel||'Undo'}</button>}
      <button className="toast-close" onClick={()=>onClose(t.id)}>✕</button>
    </div>
  )
}

export default function ToastStack(){
  const [toasts, setToasts] = useState([])

  // expose simple API for demo purposes
  useEffect(()=>{
    window.__addToast = (message, opts={})=>{
      const id = Math.random().toString(36).slice(2,9)
      setToasts(t=>[...t, {id,message,action:opts.onAction,actionLabel:opts.label}])
      return id
    }
    window.__removeToast = (id)=> setToasts(t=>t.filter(x=>x.id!==id))
    return ()=>{delete window.__addToast; delete window.__removeToast}
  },[])

  function remove(id){ setToasts(t=>t.filter(x=>x.id!==id)) }

  if(!toasts.length) return null
  return (
    <div className="toast-stack" aria-live="polite">
      {toasts.map(t=> <Toast key={t.id} t={t} onClose={remove} />)}
    </div>
  )
}
