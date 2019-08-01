import React, {useState}from 'react'
import AuthService from '../services/auth'
import useForm from '../hooks/useForm'
import {Button} from 'antd'

function Edit(props) {
  const authservice = new AuthService()
  const [form, handleInputs] = useForm()

  const [user] = useState(JSON.parse(localStorage.getItem("loggedUser")))

  const goBack = () => {
    props.history.push('/profile')
  }

  const handleEdit = () => {
    console.log(user._id)
    authservice.edit(form, user._id)

    .then(response => {
      console.log(response.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    
      <div className="bigContainer">
        <div className='containerLefthProfile'>
        <img width="50%" height="auto" src="/img/user.png" alt=""/>
        <div width="50%">
        <input type="file"></input>
        </div>
        </div>
        <div className='containerRightEdit'>
        <div className="scriptEdit">
        <h2>Update</h2>
        </div>
        <div className="inputsEdit">
        <input type="text" name="name" placeholder="Nombre" onChange={e => handleInputs(e)} />
        <input type="text" name="aPaterno" placeholder="Apellido Paterno" onChange={e => handleInputs(e)} />
        <input type="text" name="aMaterno" placeholder="Apellido Materno" onChange={e => handleInputs(e)} />
        <input type="text" name="rfc" placeholder="RFC" onChange={e => handleInputs(e)} />
        <input type="password" name="ciec" placeholder="CIEC" onChange={e => handleInputs(e)} />
        <input type="email" name="email" placeholder="email" onChange={e => handleInputs(e)} />
        <input type="password" name="password" placeholder="Contraseña" onChange={e => handleInputs(e)} />
        </div>
        <div className="buttonsEdit">
        <Button onClick={handleEdit}>Save</Button>
        <Button onClick={goBack}>Back</Button>
        </div>
        </div>
        <div className="containerRightRightEdit">
          <img src="/img/logoyortd.png" alt=""/>
        </div>

      </div>
    
  )
}

export default Edit