import React from 'react'
import {Link} from 'react-router-dom'
import { PageBanner } from '../components/BrandContent'
import useDocumentTitle from '../utils/useDocumentTitle'
export default function Blog(){useDocumentTitle("Our thinking");return <div className="ev-page"><PageBanner image="/images/expert-collaboration.webp" alt="Illustration of a collaborative discussion about product ideas"/><section className="ev-wrap ev-page-intro"><span className="ev-eyebrow">Our thinking</span><h1>Useful AI starts with useful questions.</h1><p>What should become simpler? Where does expertise matter most? How can a product keep earning its place in someone’s day? These questions guide what we build. We’ll share product updates and lessons from the journey here.</p><Link className="ev-button ev-primary" to="/contact">Start a conversation ↗</Link></section></div>}
