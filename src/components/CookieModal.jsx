import React from 'react'

export default function CookieModal({open, onClose}){
  if(!open) return null
  return (
    <div className="cookie-modal" role="dialog" aria-modal="true">
      <div className="cookie-box">
        <h3>Cookie Settings</h3>
        <p>You can adjust cookie preferences for analytics and personalization.</p>
        <div className="cookie-actions">
          <button onClick={onClose}>Close</button>
          <button onClick={()=>{alert('Saved (demo)'); onClose()}}>Save preferences</button>
        </div>
      </div>
    </div>
  )
}
