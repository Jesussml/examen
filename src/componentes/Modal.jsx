import '../estilos/modal.css'

export function Modal( {orden, titulo, children }) {
    const ordenFor = `btnCheck${orden}`

    return(
        <div className='modal'>
            <div class="modalBoton">
                <label for={ordenFor}>{titulo}</label>
            </div>
            <input type="checkbox" id={ordenFor} />
            <div class="modalCont">
                <div class="modalContenido">
                    <h2>Resumen: {titulo}</h2>
                    <p>{children}</p>    
                    <div class="cerrarModal">
                        <label for={ordenFor}>Cerrar</label>
                    </div>
                </div>
            </div>
        </div>
    )
}