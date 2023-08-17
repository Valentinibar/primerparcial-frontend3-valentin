import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import "./components/Button.css"
import "./components/Form.css"

function App() {

const [usuario, setUsuario] = useState({
  nombre: " ",
})

const [animal, setAnimal] = useState({
  nombre: " "
})

const [show, setShow] = useState(false)
const [error, setError] = useState(false) 

const handleSubmit = ()=>{
  if(usuario.nombre.length > 2 && !usuario.nombre.startsWith(" ") && animal.nombre.length > 5) {   
      setShow(true)
      setError(false)
  }
  else{ setError(true)
        setShow(false)
  }


}



  return (
    <>
    <h2>Elige un animal</h2>

    <div className='form'>
    <div>
    <label>Ingrese su nombre </label>
    <input type="text"  value= {usuario.nombre} onChange={(event) => setUsuario({...usuario, nombre: event.target.value})} />
    </div>
    <div>
    <label>Ingrese su animal favorito </label>
    <input type="text"  value= {setAnimal.nombre} onChange={(event) => setAnimal({...animal, nombre: event.target.value})} />
    </div>
    <br />
    <button className='boton' onClick={handleSubmit} >Enviar</button>
    </div>

    {show && <Card  usuarionombre= {usuario.nombre}  animalfavorito= {animal.nombre}  />}
    {error && <h5 style={{color: "red"}}  > Hay un error en los datos. Corroborar que el nombre sea de 3 o mas caracteres y que no comience con un espacio adelante,
            y el animal de 6 o mas caracteres  </h5>}



    

    </>
  )
}

export default App

