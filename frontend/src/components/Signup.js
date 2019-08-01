import React from 'react'
import useForm from '../hooks/useForm'
import AuthService from '../services/auth'
import {Button} from 'antd'

function Signup(props) {
  const authservice = new AuthService()
  const [form, handleInputs] = useForm()


  const handleSignup = () => {
    authservice.signup(form)
    .then(response => {
      props.history.push('/login')
    })
    .catch(err => {
      console.log(err.response)
    })
  }

  return (
    <div className="bigcontainer">
      <div className="containerLefthSignup">
        <div className="scriptSignup">
        <h1>¿Sabias que?</h1>
        <h2>Los programadores de esta pagina no han dormido bien</h2>
        </div>
      </div>
      <div className="containerLefthSignupImg"></div>
      <div className="containerRightSignup">
        <input type="text" name="name" placeholder="Nombre" onChange={e => handleInputs(e)} />
        <input type="text" name="aPaterno" placeholder="Apellido Paterno" onChange={e => handleInputs(e)} />
        <input type="text" name="aMaterno" placeholder="Apellido Materno" onChange={e => handleInputs(e)} />
        <input type="text" name="rfc" placeholder="RFC" onChange={e => handleInputs(e)} />
        <input type="password" name="ciec" placeholder="CIEC" onChange={e => handleInputs(e)} />
        <input type="email" name="email" placeholder="email" onChange={e => handleInputs(e)} />
        <input type="password" name="password" placeholder="Contraseña" onChange={e => handleInputs(e)} />
        <div className="buttonSignup">
        <Button onClick={handleSignup}>Signup</Button>
        </div>
      </div>
    </div>
  )

}

export default Signup