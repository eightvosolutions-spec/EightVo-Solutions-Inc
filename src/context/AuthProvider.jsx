import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext({ user: null, login: ()=>{}, logout: ()=>{}, role: 'client' })

export default function AuthProvider({ children }){
  const [user, setUser] = useState(()=>{
    try{ const raw = localStorage.getItem('auth_user'); return raw ? JSON.parse(raw) : null }catch(e){ return null }
  })

  useEffect(()=>{
    try{ if(user) localStorage.setItem('auth_user', JSON.stringify(user)); else localStorage.removeItem('auth_user') }catch(e){}
  },[user])

  function login(payload){
    // payload: {name, role}
    setUser({name: payload.name, role: payload.role || 'client'})
  }

  function logout(){ setUser(null) }

  return (
    <AuthContext.Provider value={{ user, login, logout, role: user?.role || 'client' }}>
      {children}
    </AuthContext.Provider>
  )
}
