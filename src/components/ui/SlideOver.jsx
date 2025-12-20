import React, {useEffect, useRef} from 'react'
import { createPortal } from 'react-dom'
import FocusTrap from 'focus-trap-react'

function focusableElements(container){
  if(!container) return []
  const sel = 'a[href],button:not([disabled]),input:not([disabled]),textarea:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])'
  return Array.from(container.querySelectorAll(sel)).filter(el => !el.hasAttribute('disabled'))
}

export default function SlideOver({open, onClose, title, children}){
  const panelRef = useRef(null)
  const previouslyFocused = useRef(null)

  useEffect(()=>{
    function onKey(e){ if(e.key === 'Escape') onClose && onClose() }
    if(open){
      previouslyFocused.current = document.activeElement
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    }
    return ()=>{
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      if(previouslyFocused.current && previouslyFocused.current.focus) previouslyFocused.current.focus()
    }
  },[open,onClose])

  if(!open) return null
  const labelledId = title ? 'slideover-title' : undefined

  const content = (
    <div className="slide-over" role="presentation">
      <FocusTrap active={open} focusTrapOptions={{
        fallbackFocus: () => panelRef.current || undefined,
        // do not auto-deactivate when clicking outside — we handle backdrop clicks explicitly
        clickOutsideDeactivates: false,
        // disable focus-trap handling of Escape so we control close behavior
        escapeDeactivates: false,
        onActivate: () => {},
        onDeactivate: () => {}
      }}>
        <div className="slide-panel" ref={panelRef} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby={labelledId}>
          <header className="slide-head">
            <h3 id={labelledId} style={{margin:0}}>{title}</h3>
            <button className="close-btn" onClick={onClose} aria-label="Close">✕</button>
          </header>
          <div className="slide-body">{children}</div>
        </div>
      </FocusTrap>
      <div className="slide-backdrop" onClick={onClose} aria-hidden="true" />
    </div>
  )

  if (typeof document !== 'undefined' && document.body) {
    return createPortal(content, document.body)
  }

  return content
}
