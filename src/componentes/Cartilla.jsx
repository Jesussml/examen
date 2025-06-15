import '../estilos/cartilla.css'

export function Cartilla( {nombre, ruta, children, enlace} ) {

    return(
        <div className='cartilla'>
            <div className="cartillaHead">
                <img src={ruta} />
                <h3>{nombre}</h3>
            </div>
            <div className="cartillaContenido">
                <p>{children}</p>
                <a href={enlace} target='_blank' ><button className='enlaceBtn'>Leer mas</button></a>
            </div>
        </div>
    )
}