// Centralized cookie preferences helper
export function readPrefs(){
  try{ return JSON.parse(localStorage.getItem('cookiePrefs') || 'null') }catch(e){ return null }
}

export function savePrefs(prefs){
  try{ localStorage.setItem('cookiePrefs', JSON.stringify(prefs));
        // broadcast change for real-time consumers
        try{ window.dispatchEvent(new CustomEvent('cookiePrefsChanged', { detail: prefs })); }catch(e){}
  }catch(e){}
}

export function onPrefsChange(cb){
  if(typeof window === 'undefined') return ()=>{}
  const handler = (e)=> cb(e.detail)
  window.addEventListener('cookiePrefsChanged', handler)
  return ()=> window.removeEventListener('cookiePrefsChanged', handler)
}

// dispatch current prefs once (useful on startup)
export function dispatchCurrentPrefs(){
  try{ const p = readPrefs(); window.dispatchEvent(new CustomEvent('cookiePrefsChanged', { detail: p })); }catch(e){}
}
