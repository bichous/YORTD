import React from 'react'
import useForm from '../hooks/useForm'
import AuthService from '../services/auth'

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
    <main>
        <div className="login">
         <h2>Login</h2>
         <input type="email" name="email" onChange={e => handleInputs(e)} />
         <input type="password" name="password" onChange={e => handleInputs(e)} />
         <button onClick={handleLogin}>Login</button>
        </div>
      <div></div>
    </main>
  )

}

export default Login

