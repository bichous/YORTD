import React from 'react'
import {NavLink} from 'react-router-dom'

function Home() {

  return (
    
      <div>
      <NavLink to={'/signup'} exact>Crear cuenta</NavLink> <br/>
      <NavLink to={'/login'} exact>Ya tengo cuenta</NavLink>
      </div>
      
      
   
  )
}

export default Home


