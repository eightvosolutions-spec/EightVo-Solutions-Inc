import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import CookieModal from './CookieModal'

export default function Footer(){
  const [cookieOpen, setCookieOpen] = useState(false)
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-links">
          <nav>
            <Link to="/accessibility">Accessibility</Link>
            <Link to="/privacy">Privacy Notice</Link>
            <button className="linkless" onClick={()=>setCookieOpen(true)}>Cookie Settings</button>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </nav>
        </div>

        <div className="brands">
          <strong>•  Eightvo Entertainments</strong>
          <strong>•  Eightvo Imports and Exports</strong>
        </div>
      </div>
      <CookieModal open={cookieOpen} onClose={()=>setCookieOpen(false)} />
    </footer>
  )
}
