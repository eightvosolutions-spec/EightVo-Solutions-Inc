import React from 'react'

export default function Contact(){
  return (
    <div className="page contact">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={(e)=>{e.preventDefault(); alert('Submitted (demo)')}}>
        <label>
          Name
          <input required />
        </label>
        <label>
          Email
          <input type="email" required />
        </label>
        <label>
          Message
          <textarea required />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
