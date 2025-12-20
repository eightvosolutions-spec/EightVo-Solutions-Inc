import React from 'react'

export default function SkeletonCard(){
  return (
    <div className="ui-card card skeleton">
      <div className="card-head">
        <div style={{width:180,height:18,background:'#f1f5f9',borderRadius:6}} />
        <div style={{width:80,height:18,background:'#f1f5f9',borderRadius:6}} />
      </div>
      <div className="card-body">
        <div style={{height:12,background:'#f1f5f9',borderRadius:6,marginBottom:8}} />
        <div style={{height:12,background:'#f1f5f9',borderRadius:6,marginBottom:8,width:'80%'}} />
      </div>
    </div>
  )
}
