import { Link } from "react-router-dom"
import '../estilos/menu.css'

export function Menu() {
    return(
        <nav>
            <a href="https://github.com/Jesussml/examen" target="_blank" >
                <img className='logo' src='https://img.icons8.com/?size=100&id=H2sN5AIZbe5o&format=png&color=EAEFEF' alt="logo" />
            </a>
            <ul className='links'>
                <li><Link className='enlace' to='/examen'>Principal</Link></li>
                <li><Link className='enlace' to='/examen/peliculas'>Peliculas</Link></li>
            </ul>
            
        </nav>
    )
}