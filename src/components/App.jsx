import React from 'react'
import { useState } from 'react'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();

  return (
  <div>
      <div className='general-info'>
        <label htmlFor="name">Full Name</label>
        <input type="text" name="name" id='name' onChange={(event) => {setName(event.target.value)}}/>

        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id='email' onChange={(event) => {setEmail(event.target.value)}}/>

        <label htmlFor="phone">Phone Number</label>
        <input type="number" name="phone" id='phone' onChange={(event) => {setPhone(event.target.value)}}/>
      </div>

      <div className='education'>
        <label htmlFor="school-name">Name of School</label>
        <input type="text" name="school-name" id='school-name' onChange={(event) => {setName(event.target.value)}}/>

        <label htmlFor="education-title">Area of Study</label>
        <input type="text" name="education-title" id='education-title' onChange={(event) => {setEmail(event.target.value)}}/>

        <label htmlFor="education-date">Year of Compeletion</label>
        <input type="date" name="education-date" id='education-date' onChange={(event) => {setPhone(event.target.value)}}/>
      </div>

    <section>
      <h2>name: {name}</h2>
      <h2>email: {email}</h2>
      <h2>phone: {phone}</h2>
    </section>

  </div>
  )
}

export default App
