import React, { Suspense, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const About = React.lazy(() => import('./pages/About'))
const MyCanJourney = React.lazy(() => import('./pages/MyCanJourney'))
const Home = React.lazy(() => import('./pages/Home'))
const Contact = React.lazy(() => import('./pages/Contact'))
const DesignSystem = React.lazy(() => import('./pages/DesignSystem'))
const Solutions = React.lazy(() => import('./pages/Solutions'))
const Blog = React.lazy(() => import('./pages/Blog'))
const Pricing = React.lazy(() => import('./pages/Pricing'))
const Privacy = React.lazy(() => import('./pages/Privacy'))
const CookiePolicy = React.lazy(() => import('./pages/CookiePolicy'))
const Accessibility = React.lazy(() => import('./pages/Accessibility'))
const Careers = React.lazy(() => import('./pages/Careers'))
const JobDetail = React.lazy(() => import('./pages/JobDetail'))
const AppShell = React.lazy(() => import('./layouts/AppShell'))
const AppDashboard = React.lazy(() => import('./pages/app/Dashboard'))

export default function App(){
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return (
    <div className="app-root">
      <Header />
      <main className="main-content" id="main-content" tabIndex={-1}>
        <Suspense fallback={<div aria-busy="true">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/design-system" element={<DesignSystem/>} />
            <Route path="/solutions" element={<Solutions/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/products/mycanjourney" element={<MyCanJourney/>} />
            <Route path="/case-studies/*" element={<Navigate to="/products/mycanjourney" replace/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/careers" element={<Careers/>} />
            <Route path="/careers/:slug" element={<JobDetail/>} />
            <Route path="/pricing" element={<Pricing/>} />
            <Route path="/privacy" element={<Privacy/>} />
            <Route path="/cookie-policy" element={<CookiePolicy/>} />
            <Route path="/accessibility" element={<Accessibility/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<div className="ev-wrap ev-page-intro"><h1>Page not found</h1><a href="/">Back to home</a></div>} />
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
