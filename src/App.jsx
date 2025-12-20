import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const Home = React.lazy(() => import('./pages/Home'))
const Contact = React.lazy(() => import('./pages/Contact'))
const DesignSystem = React.lazy(() => import('./pages/DesignSystem'))
const Solutions = React.lazy(() => import('./pages/Solutions'))
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'))
const Blog = React.lazy(() => import('./pages/Blog'))
const Pricing = React.lazy(() => import('./pages/Pricing'))
const Privacy = React.lazy(() => import('./pages/Privacy'))
const CookiePolicy = React.lazy(() => import('./pages/CookiePolicy'))
const Accessibility = React.lazy(() => import('./pages/Accessibility'))
const Careers = React.lazy(() => import('./pages/Careers'))
const AppShell = React.lazy(() => import('./layouts/AppShell'))
const AppDashboard = React.lazy(() => import('./pages/app/Dashboard'))

export default function App(){
  return (
    <div className="app-root">
      <Header />
      <main className="main-content" id="main-content">
        <Suspense fallback={<div aria-busy="true">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/design-system" element={<DesignSystem/>} />
            <Route path="/solutions" element={<Solutions/>} />
            <Route path="/case-studies" element={<CaseStudies/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/careers" element={<Careers/>} />
            <Route path="/pricing" element={<Pricing/>} />
            <Route path="/privacy" element={<Privacy/>} />
            <Route path="/cookie-policy" element={<CookiePolicy/>} />
            <Route path="/accessibility" element={<Accessibility/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/app" element={<AppShell/>}>
              <Route index element={<AppDashboard/>} />
              <Route path=":role" element={<AppDashboard/>} />
            </Route>
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
