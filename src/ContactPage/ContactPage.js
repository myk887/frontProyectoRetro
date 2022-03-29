import './ContactPage.css'
import React, { useState } from 'react'
import { Link } from "react-router-dom"


function ContactPage() {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [checked, setChecked] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    // const res = await fetch('http://localhost:3000/externalMessage', {
    //   method: 'POST',
    //   body: JSON.stringify({ name, surname, email, phone, checked, message }),
    //   headers: new Headers({
    //     'Content-Type': 'application/json'
    //   })
    // })
    console.log('Mensaje enviado')
  }


  return (
    <div className="contactpage">
      <h1>Contacta con nosotros</h1>
      <form className="contactpage-form" onSubmit={handleSubmit}>

        <label className="contactpage-info">
          <input name="name" placeholder="* Nombre..." value={name} required onChange={e => setName(e.target.value)} ></input>
          <input name="surname" placeholder="Apellidos..." value={surname} onChange={e => setSurname(e.target.value)}></input>
        </label>

        <label className="contactpage-info">
          <input placeholder="* Email.." required value={email} onChange={e => setEmail(e.target.value)} ></input>
          <input placeholder="Telefono..." value={phone} onChange={e => setPhone(e.target.value)}></input>
          <textarea placeholder="Escribe aquí tu mensaje..." value={message} onChange={e => setMessage(e.target.value)}></textarea>
        </label>

        <p>* Campos obligatorios</p>

        <label className="contactpage-check">
          <input className='check' type="checkbox" required value={checked} onChange={e => setChecked(e.target.value)}></input>
          <span>He leído y acepto la</span> <Link to="/privacity" className='contactpage-link'> Política de Privacidad</Link>
        </label>

        <button className="contactpage-button" type="submit" value="Submit" onClick={handleSubmit}>Enviar mensaje</button>

      </form>
    </div>
  )
}

export default ContactPage