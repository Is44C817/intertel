import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'

function App() {

  return (
    <div>
      <Header />
      <div className='mt-12 flex'>
        <Formulario />
        <Resultado />
      </div>
    </div>
  )
}

export default App
