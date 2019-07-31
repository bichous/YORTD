import React from 'react'
import useForm from '../hooks/useForm'
import AuthService from '../services/auth'
import {Button} from 'antd'

function Login(props) {

  const authservice = new AuthService()
  const [form, handleInputs] = useForm()

  // const loggedUser = localStorage.getItem("loggedUser")
  // if (loggedUser) return props.history.push('/profile')


  const handleLogin = () => {
    authservice.login(form)
    .then(response => {
    console.log(response.data)
    localStorage.setItem("loggedUser", JSON.stringify(response.data.user))
    props.history.push('/profile')
    })
    .catch(err => {
      console.log(err.response)
    })
  }

  return (
    <div className="bigcontainer">
        <div className="containerLeftLogin">
         <div className="scriptLogin">
         <h2>Login</h2>
         </div>
         <div className="inputsLogin">
          <input type="email" name="email" placeholder="E-mail" onChange={e => handleInputs(e)} />
          <input type="password" name="password" placeholder="Password" onChange={e => handleInputs(e)} />
         </div>
         <div className="buttonLogin">
         <Button onClick={handleLogin}>Login</Button>
         </div>
         <div className="containerRightLoginCerdito"></div>
         <div className="containerRightLoginImg"></div>
        </div>
    </div>
  )

}

export default Login

