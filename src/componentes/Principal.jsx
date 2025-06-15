import { Cartilla } from './Cartilla'
import '../estilos/principal.css'

export function Principal() {
    return(
        <div className='contPrincipal'>
            <Cartilla nombre='David Santalla' ruta='DavidSantalla.png' enlace='https://es.wikipedia.org/wiki/David_Santalla' desc='David Santalla nació en el 16 de agosto de 1939 en la ciudad de La Paz. Es hijo del general de aviación Alfredo Santalla Estrella, quien fue el único militar boliviano que alcanzó a participar en la Primera Guerra ...' />
            <Cartilla nombre='Hugo Pozo' ruta='HugoPozo.png' enlace='https://es.wikipedia.org/wiki/Hugo_Pozo' desc='Se formó actoralmente con Eduardo Cassis, dando comienzo a su carrera en 1972 en el TEATRO NACIONAL POPULAR. Con más de 300 obras representadas a nivel nacional e internacional.Fundó su propia empresa de ...' />
            <Cartilla nombre='Jenny Serrano' ruta='JennySerrano.png' enlace='https://es.wikipedia.org/wiki/Jenny_Serrano' desc='Jenny Serrano nació un 13 de abril de 1963 en la ciudad de Cochabamba. Es hija de María Esperanza Flores Alba y Ángel Serrano, conocida por la facilidad de interpretar a múltiples personajes de toda índole y ...' />
        </div>
    )
}