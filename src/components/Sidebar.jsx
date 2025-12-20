import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const ROLE_LINKS = {
  client: [
    {to: '/app/projects', label: 'Projects'},
    {to: '/app/tasks', label: 'Tasks'},
    {to: '/app/files', label: 'Files'},
    {to: '/app/billing', label: 'Billing'}
  ],
  pm: [
    {to: '/app/projects', label: 'Projects'},
    {to: '/app/timeline', label: 'Timeline'},
    {to: '/app/assignments', label: 'Assignments'},
    {to: '/app/approvals', label: 'Approvals'}
  ],
  engineer: [
    {to: '/app/tasks', label: 'Tasks'},
    {to: '/app/code', label: 'Code'},
    {to: '/app/ci', label: 'CI'},
    {to: '/app/files', label: 'Files'}
  ],
  sales: [
    {to: '/app/pipeline', label: 'Pipeline'},
    {to: '/app/invoices', label: 'Invoices'},
    {to: '/app/reports', label: 'Reports'}
  ],
  admin: [
    {to: '/app/usage', label: 'Usage'},
    {to: '/app/billing', label: 'Billing'},
    {to: '/app/users', label: 'Users'},
    {to: '/app/flags', label: 'Feature Toggles'}
  ]
}

export default function Sidebar({ role = 'client' }){
  const [collapsed, setCollapsed] = useState(false)
  const links = ROLE_LINKS[role] || ROLE_LINKS.client

  return (
    <aside className={"sidebar" + (collapsed? ' collapsed':'' )} aria-label="Primary navigation">
      <div className="sidebar-top">
        <button className="collapse-toggle" onClick={()=>setCollapsed(!collapsed)} aria-pressed={collapsed} aria-label={collapsed? 'Expand sidebar' : 'Collapse sidebar'}>
          {collapsed ? '»' : '«'}
        </button>
        <div className="brand">EightVo</div>
      </div>

      <nav className="sidebar-nav">
        {links.map((l,i)=> (
          <NavLink key={i} to={l.to} className={({isActive}) => 'nav-item' + (isActive? ' active':'')}>
            <span className="nav-icon" aria-hidden>🔹</span>
            <span className="nav-label">{l.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <small className="muted">role: {role}</small>
      </div>
    </aside>
  )
}
