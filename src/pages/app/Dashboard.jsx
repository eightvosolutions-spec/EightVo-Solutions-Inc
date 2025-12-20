import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Card({title, children, actions}){
  return (
    <section className="card dashboard-card">
      <div className="card-head">
        <h3>{title}</h3>
        <div className="card-actions">{actions}</div>
      </div>
      <div className="card-body">{children}</div>
    </section>
  )
}

export default function Dashboard(){
  const { role } = useParams()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const r = role || 'client'

  useEffect(()=>{
    const t = setTimeout(()=> setLoading(false), 250)
    return ()=> clearTimeout(t)
  },[r])

  useEffect(()=>{
    let seq = false
    function onKey(e){
      if(e.key === 'g') seq = true
      else if(seq){
        if(e.key === 'p') navigate('/app/projects')
        if(e.key === 't') navigate('/app/tasks')
        seq = false
      }
    }
    window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  },[navigate])

  if(loading) return <div className="loading">Loading dashboard…</div>

  // Role-specific mock cards
  if(r === 'client'){
    return (
      <div className="dashboard container">
        <h2>Client Dashboard</h2>
        <div className="grid">
          <Card title="Project Health">Overall status: <strong>Healthy</strong></Card>
          <Card title="Recent Deliverables">Deliverable A, B, C</Card>
          <Card title="Upcoming Milestones">Milestone 1 — due in 7 days</Card>
          <Card title="Support">Contact: support@eightvo.com</Card>
        </div>
      </div>
    )
  }

  if(r === 'pm'){
    return (
      <div className="dashboard container">
        <h2>Project Manager Dashboard</h2>
        <div className="grid">
          <Card title="Cross-project Timeline">Mini-Gantt placeholder</Card>
          <Card title="Risk Flags">No critical risks</Card>
          <Card title="Assignments">Alice, Bob — review</Card>
          <Card title="Approvals">2 pending approvals</Card>
        </div>
      </div>
    )
  }

  if(r === 'engineer'){
    return (
      <div className="dashboard container">
        <h2>Engineer Dashboard</h2>
        <div className="grid">
          <Card title="Assigned Tasks">3 open tasks</Card>
          <Card title="CI Status">All pipelines passing</Card>
          <Card title="Code Artifacts">Links to builds</Card>
          <Card title="Quick Upload">Drop files here</Card>
        </div>
      </div>
    )
  }

  if(r === 'sales'){
    return (
      <div className="dashboard container">
        <h2>Sales / Finance Dashboard</h2>
        <div className="grid">
          <Card title="Pipeline">3 deals — $120k</Card>
          <Card title="Open Invoices">2 unpaid invoices</Card>
          <Card title="Revenue Metrics">MRR $12,000</Card>
          <Card title="Export">Export CSV</Card>
        </div>
      </div>
    )
  }

  if(r === 'admin'){
    return (
      <div className="dashboard container">
        <h2>Admin Dashboard</h2>
        <div className="grid">
          <Card title="Usage Metrics">Active users: 124</Card>
          <Card title="Billing">Next invoice: 2026-01-01</Card>
          <Card title="User Management">Invite or remove users</Card>
          <Card title="Feature Toggles">Toggle experimental features</Card>
        </div>
      </div>
    )
  }

  return <div>Unknown role</div>
}
