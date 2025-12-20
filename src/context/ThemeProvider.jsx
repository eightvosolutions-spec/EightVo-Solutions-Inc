import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext({ theme: 'dark', toggle: ()=>{} })

export default function ThemeProvider({ children }){
  const [theme, setTheme] = useState(()=>{
    try{ return localStorage.getItem('theme') || 'dark' }catch(e){ return 'dark' }
  })

  useEffect(()=>{
    try{ document.documentElement.setAttribute('data-theme', theme); localStorage.setItem('theme', theme) }catch(e){}
  },[theme])

  function toggle(){ setTheme(t=> t === 'light' ? 'dark' : 'light') }

  return (
    <ThemeContext.Provider value={{ theme, toggle, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
