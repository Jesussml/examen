import { Link } from "react-router-dom"
import '../estilos/menu.css'

export function Menu() {
    return(
        <nav>
            <img className='logo' src='examen/images/logo.png' alt="logo" />
            <ul className='links'>
                <li><Link className='enlace' to='/examen'>Principal</Link></li>
                <li><Link className='enlace' to='/examen/peliculas'>Peliculas</Link></li>
            </ul>
            
        </nav>
    )
}