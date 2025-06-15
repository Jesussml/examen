import { Link } from "react-router-dom"
import '../estilos/menu.css'

export function Menu() {
    return(
        <nav>
            <img className='logo' src='../../public/logo.png' alt="logo" />
            <ul className='links'>
                <li><Link className='enlace' to='/'>Principal</Link></li>
                <li><Link className='enlace' to='/peliculas'>Peliculas</Link></li>
            </ul>
            
        </nav>
    )
}