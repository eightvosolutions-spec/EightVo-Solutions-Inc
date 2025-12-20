import { useRef } from 'react'

function createProjectResource(id){
  let status = 'pending'
  let result
  const suspender = new Promise((resolve)=>{
    // mock fetch delay; replace with real fetch in production
    setTimeout(()=>{
      result = { id, name: `Project ${id}`, status: 'healthy', updated: Date.now() }
      status = 'success'
      resolve()
    }, 700)
  })
  return {
    read(){
      if(status === 'pending') throw suspender
      if(status === 'error') throw result
      return result
    }
  }
}

export function useProject(id){
  const ref = useRef(null)
  if(!ref.current) ref.current = createProjectResource(id)
  return ref.current
}
