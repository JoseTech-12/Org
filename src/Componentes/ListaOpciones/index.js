import React from 'react'
import './ListaOpciones.css'
const ListaOpciones = (props) => {


    const equipos = [
        'Programacion',
        'Front End',
        'Data Science',
        'Devops',
        'UX y Diseño',
        'Movil',
        'Inovacion y Gestión'
    ]


    return (
        <div className='lista-opciones'>
            <label htmlFor="opciones">Equipos</label>

            <select value={props.valor} onChange={(e) => props.actualizarvalor(e.target.value)} >
                <option value="" disabled defaultValue="" hidden >Seleccionar equipo</option>
                {
                    equipos.map((equipo, index) => <option value={equipo} key={index}>{equipo}</option>)
                }

            </select>
        </div >
    )
}

export default ListaOpciones