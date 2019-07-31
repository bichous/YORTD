import React, {useState} from 'react'
import AuthService from '../services/auth'
import {Button} from 'antd'
import {NavLink} from 'react-router-dom'


function Profile(props) {

  const authservice = new AuthService()
  const [user] = useState(JSON.parse(localStorage.getItem("loggedUser")))
  console.log(user)

  const handleLogout = () => {
    authservice.logout()
    .then(response => {
      console.log(response)
      props.history.push('/')
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    
      <div className="bigContainerP">
        <div className="containerLefthProfile">
         <div className='photoProfile'>
          <img width="40%" height="auto" src="/img/user.png" alt=""/>
          <div className="buttonsProfile">
          <NavLink to={`/profile/edit/${user._id}`}>
          <Button className="btn">Edit</Button>
          </NavLink>
          <Button className="btn" onClick={handleLogout}>Logout</Button>
          </div>
         </div>
        </div>
        <div className='containerRightProfile'>
           <label>Nombre: <h3>{user.name}</h3></label>
           <label>Apellido Paterno: <h3>{user.aPaterno}</h3></label>
           <label>Apellido Materno: <h3>{user.aMaterno}</h3></label>
           <label>RFC: <h3>{user.rfc}</h3></label>
           <label>CIEC: <h3>{user.ciec}</h3></label>
           <label>Email: <h3>{user.email}</h3></label>
           <div className="buttonsProfileD">
           <NavLink to={'/calculate'}>
             <Button>Subir Facturas</Button>
           </NavLink> </div>     
         </div>
      </div>
   
  )

}

export default Profile






  