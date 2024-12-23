import React from 'react'
import './ListaOpciones.css'
const ListaOpciones = () => {

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
            <select name="opciones" id="opciones" >
                {
                    equipos.map((equipo, index) => <option key={index}>{equipo}</option>)
                }

            </select>
        </div >
    )
}

export default ListaOpciones