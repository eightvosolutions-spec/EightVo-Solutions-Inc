import React, {useState} from 'react'
import useDocumentTitle from '../utils/useDocumentTitle'

export default function Contact(){
  useDocumentTitle('Contact')
  const [values, setValues] = useState({name:'',email:'',message:''})
  const [errors, setErrors] = useState({})

  function validate(){
    const e = {}
    if(!values.name.trim()) e.name = 'Name is required'
    if(!values.email.trim()) e.email = 'Email is required'
    else if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) e.email = 'Enter a valid email'
    if(!values.message.trim()) e.message = 'Message is required'
    return e
  }

  function onSubmit(e){
    e.preventDefault()
    const eobj = validate()
    setErrors(eobj)
    if(Object.keys(eobj).length === 0){
      alert('Submitted (demo)')
      setValues({name:'',email:'',message:''})
    }
  }

  return (
    <div className="page contact">
      <div className="container">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={onSubmit} noValidate>
        <label>
          Name
          <input aria-invalid={errors.name? 'true' : 'false'} value={values.name} onChange={e=>setValues({...values,name:e.target.value})} />
          {errors.name && <span role="alert" className="field-error">{errors.name}</span>}
        </label>
        <label>
          Email
          <input type="email" aria-invalid={errors.email? 'true' : 'false'} value={values.email} onChange={e=>setValues({...values,email:e.target.value})} />
          {errors.email && <span role="alert" className="field-error">{errors.email}</span>}
        </label>
        <label>
          Message
          <textarea aria-invalid={errors.message? 'true' : 'false'} value={values.message} onChange={e=>setValues({...values,message:e.target.value})} />
          {errors.message && <span role="alert" className="field-error">{errors.message}</span>}
        </label>
        <button type="submit">Send</button>
      </form>
      </div>
    </div>
  )
}
