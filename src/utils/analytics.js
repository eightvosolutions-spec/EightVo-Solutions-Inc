import { readPrefs } from './cookies'

export function trackEvent(name, props = {}){
  try{
    // Respect cookie preferences (analytics)
    const prefs = readPrefs()
    if(prefs && prefs.analytics === false){
      // analytics disabled by user
      return
    }

    if(typeof window !== 'undefined'){
      if(window.dataLayer && Array.isArray(window.dataLayer)){
        window.dataLayer.push(Object.assign({event: name}, props))
      }
      if(window.__analytics && typeof window.__analytics.track === 'function'){
        window.__analytics.track(name, props)
      }
    }
  }catch(e){/* ignore */}
  // fallback for development visibility
  try{ console.log('[analytics]', name, props) }catch(e){}
}
