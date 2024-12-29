import React from 'react'
import './Colaborador.css'
import { IoIosCloseCircle } from "react-icons/io";
const Colaborador = (props) => {
    const { colorEncabezado, eliminarColaborador } = props
    const { nombre, foto, puesto, equipo } = props.colaborador
    const encabezado = { backgroundColor: colorEncabezado }


    return (

        <div className='colaborador'>
            <IoIosCloseCircle className='eliminar' onClick={eliminarColaborador} />
            <div className='encabezado' style={encabezado}>
                <img src={foto} alt={nombre} />
            </div>
            <div className='infomacion'>
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
            </div>

        </div>
    )
}

export default Colaborador

