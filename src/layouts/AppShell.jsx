import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import '../styles/app-shell.css'

export default function AppShell(){
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="app-main">
        <Topbar />
        <main className="app-content" id="app-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
