import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import { useState, useEffect } from 'react'

function App() {

  const [resultados, setResultados] = useState([])

  return (
    <div>
      <Header />
      <div className='mt-12 flex'>
        <Formulario
          resultados={resultados}
          setResultados={setResultados} />
        <Resultado />
      </div>
    </div>
  )
}

export default App
