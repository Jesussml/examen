import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Menu } from './componentes/Menu'
import { Principal } from './componentes/Principal'
import { Pelicula } from './componentes/Pelicula'

function App() {
  return (
    <>
      <div className='Principal'>
        <header>
          <Menu></Menu>
        </header>
        <div className='barraTitulo'>
          <h1>CINEMATECA BOLIVIANA</h1>
        </div>
        <div className="contenido">
          <Routes>
            <Route path="/examen/" element={<Principal></Principal>}></Route>
            <Route path="/examen/peliculas" element={<Pelicula></Pelicula>}></Route>
          </Routes>
        </div>
        <footer>
          Todos los derechos reservados | Saravia Mamani Jesús Aldair | 2025
        </footer>
      </div>
    </>
  )
}

export default App
