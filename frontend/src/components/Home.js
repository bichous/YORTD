import React from 'react'
import {NavLink} from 'react-router-dom'
import {Button} from 'antd'

function Home() {

  return (

      <div className='bigContainer'>
        <div className='landingHomeLeft'>
          <div className='script'>
            <h1>¿YORTD?</h1>
            <h3>YORT - Your Taxes Done, es una aplicación Web, que <br/>
            ayuda a personas físicas que se encuentran bajo el <br/>
            regimen de HONORARIOS y/o ACTIVIDAD EMPRESARIAL<br/>
            a saber cuanto impuesto tienen que pagar cada mes.
            </h3>
          </div>
          <div className='buttonsHome'>
            <NavLink to={'/signup'} exact>
              <Button className="btn">Crear Cuenta</Button>
            </NavLink>
            <NavLink to={'/login'} exact>
              <Button className="btn">Ya tengo cuenta</Button>
            </NavLink>
          </div>
        </div>
        <div className='landingHomeRight'>
        
        </div>
      </div>
      
      
      
   
  )
}

export default Home


