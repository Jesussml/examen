import '../estilos/cartilla.css'

export function Cartilla( {nombre, ruta, desc, enlace} ) {
    const srcImage = `/images/actor_${ruta}`

    return(
        <div className='cartilla'>
            <div className="cartillaHead">
                <img src={srcImage} />
                <h3>{nombre}</h3>
            </div>
            <div className="cartillaContenido">
                <p>{desc}</p>
                <a href={enlace} target='_blank' ><button className='enlaceBtn'>Leer mas</button></a>
            </div>
        </div>
    )
}