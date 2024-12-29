import React from 'react'
import './ListaOpciones.css'
const ListaOpciones = (props) => {





    return (
        <div className='lista-opciones'>
            <label htmlFor="opciones">Equipos</label>

            <select value={props.valor} onChange={(e) => props.actualizarvalor(e.target.value)} >
                <option value="" disabled defaultValue="" hidden >Seleccionar equipo</option>
                {
                    props.equipos.map((equipo, index) => <option value={equipo} key={index}>{equipo}</option>)
                }

            </select>
        </div >
    )
}

export default ListaOpciones