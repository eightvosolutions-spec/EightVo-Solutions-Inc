import React from 'react'

export default function Button({variant='primary', children, className='', ...props}){
  const cls = `btn ${variant==='primary' ? 'btn-primary' : variant==='secondary' ? 'btn-secondary' : 'btn-ghost'} ${className}`
  return (
    <button className={cls} {...props}>{children}</button>
  )
}
