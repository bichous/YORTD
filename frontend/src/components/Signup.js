import React from 'react'
import useForm from '../hooks/useForm'
import AuthService from '../services/auth'

function Signup() {
  const authservice = new AuthService()
  const [form, handleInputs] = useForm()


  const handleSignup = () => {
    authservice.signup(form)
    .then(response => {
      
      console.log(response.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <main>
      <div className="signup">
        <h2>Signup</h2>
        <input type="text" name="name" placeholder="Nombre" onChange={e => handleInputs(e)} />
        <input type="text" name="aPaterno" placeholder="Apellido Paterno" onChange={e => handleInputs(e)} />
        <input type="text" name="aMaterno" placeholder="Apellido Materno" onChange={e => handleInputs(e)} />
        <input type="text" name="rfc" placeholder="RFC" onChange={e => handleInputs(e)} />
        <input type="password" name="ciec" placeholder="CIEC" onChange={e => handleInputs(e)} />
        <input type="email" name="email" placeholder="email" onChange={e => handleInputs(e)} />
        <input type="password" name="password" placeholder="Contraseña" onChange={e => handleInputs(e)} />
        <button onClick={handleSignup}>Signup</button>
      </div>
    </main>
  )

}

export default Signup