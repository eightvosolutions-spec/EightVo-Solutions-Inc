import React, { useRef, useEffect } from 'react'

export default function Topbar(){
  const searchRef = useRef(null)

  useEffect(()=>{
    function onKey(e){
      if(e.key === '/'){
        const el = searchRef.current
        if(el){
          e.preventDefault()
          el.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  },[])

  return (
    <header className="app-topbar" role="banner">
      <div className="topbar-left">
        <label className="search" htmlFor="global-search">
          <input ref={searchRef} id="global-search" placeholder="Search (press /)" aria-label="Global search" />
        </label>
      </div>
      <div className="topbar-right">
        <button aria-label="Notifications" className="icon-btn">🔔</button>
        <button aria-label="Quick create" className="icon-btn">+</button>
        <div className="user-menu">
          <button className="user-btn">Me ▾</button>
        </div>
      </div>
    </header>
  )
}
