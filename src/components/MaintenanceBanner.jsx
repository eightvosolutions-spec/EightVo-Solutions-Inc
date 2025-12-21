import React from 'react'

const marqueeMessages = [
  'Scheduled maintenance underway — performance monitoring enabled',
  'Some services may be briefly unavailable while we upgrade infrastructure',
  'We will be back at full speed shortly',
  'Thank you for your patience and for building with us'
]

export default function MaintenanceBanner(){
  return (
    <section className="maintenance-banner" role="status" aria-live="polite">
      <div className="container maintenance-shell">
        <span className="maintenance-pill" aria-hidden="true">
          <span className="pulse" />
          Maintenance
        </span>
        <div className="maintenance-marquee" aria-label="Site maintenance notice">
          <div className="marquee-track">
            {marqueeMessages.concat(marqueeMessages).map((text, index) => (
              <span className="marquee-item" key={index}>
                <span className="spark" aria-hidden="true">✦</span>
                {text}
              </span>
            ))}
          </div>
        </div>
        <span className="maintenance-note">Live status refreshed every few minutes.</span>
      </div>
    </section>
  )
}
