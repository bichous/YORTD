import React, {useState, useEffect}from 'react'
import AuthService from '../services/auth'
import useForm from '../hooks/useForm'
import {Button} from 'antd'



const Calculate =(props) => {
  
  const authservice = new AuthService()
  const [form, handleInputs] = useForm()
  const [facturita, setFacturita] = useState([])
  const [facturita2, setFacturitaR] = useState([])


  const [user] = useState(JSON.parse(localStorage.getItem("loggedUser")))

  useEffect(()=>{
    authservice
    .facturitasEmitidas()
    .then(({data}) => {
      setFacturita(prevState =>(
        [...prevState, ...data.facturita]
      ))
    })
    .catch(err => {
      console.log(err)
    })
  },[])
  
  useEffect(()=>{
    authservice
    .facturitasRecibidas()
    .then(({data}) => {
      setFacturitaR(prevState =>(
        [...prevState, ...data.facturita2]
      ))
    })
    .catch(err => {
      console.log(err)
    })
  },[])

  const goBack = () => {
    props.history.push('/profile')
  }


  let sumaEmitidas = facturita.reduce((sum, value) => {
    // console.log(value.total)
    return sum + parseFloat(value.total)
  }, 0)

  let importeEmitidas = (sumaEmitidas/(1.16))

  let ivaEmitidas = (sumaEmitidas/(-1.16))+sumaEmitidas

  let sumaRecibidas = facturita2.reduce((sum, value) => {
    // console.log(value.total)
    return sum + parseFloat(value.total)
  }, 0)

  let importeRecibidas = (sumaRecibidas/(1.16))

  let ivaRecibidas = (sumaRecibidas/(-1.16))+sumaRecibidas

  let impuestoPagar = ivaEmitidas - ivaRecibidas

   
  
  return (
    <div className="bigContainer">
      
      <div className="containerMidCalculate">
      <p>Importe: {importeEmitidas.toFixed(2)}</p>
      <p>IVA: {ivaEmitidas.toFixed(2)}</p>
      <p>Total: {sumaEmitidas.toFixed(2)}</p>
      <p>Importe: {importeRecibidas.toFixed(2)}</p>
      <p>IVA: {ivaRecibidas.toFixed(2)}</p>
      <p>Total: {sumaRecibidas.toFixed(2)}</p>
      
      <p>Tu total de IVA a pagar es: {impuestoPagar.toFixed(2)}</p>

      <div className="buttons">
      <Button onClick={goBack}>Back</Button>
      </div>
      </div>
      
    </div>
    
  )
  
}

export default Calculate


