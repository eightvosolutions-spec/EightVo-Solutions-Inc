import { useEffect } from 'react'

export default function useDocumentTitle(title, suffix = ' — EightVo Solutions Inc.'){
  useEffect(()=>{
    if(!title) return
    document.title = `${title}${suffix}`
  },[title,suffix])
}
