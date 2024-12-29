import React from 'react'
import './Colaborador.css'
import { IoIosCloseCircle, IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
const Colaborador = (props) => {
    const { colorEncabezado, eliminarColaborador, agregarFavorito } = props
    const { nombre, foto, puesto, equipo, id, fav } = props.colaborador
    const encabezado = { backgroundColor: colorEncabezado }


    return (

        <div className='colaborador'>
            <IoIosCloseCircle className='eliminar' onClick={() => {
                eliminarColaborador(id)
            }} />

            <div className='encabezado' style={encabezado}>
                <img src={foto} alt={nombre} />
            </div>
            <div className='infomacion'>
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
                <span onClick={() => {
                    agregarFavorito(id)
                }}>  {fav ? <IoMdHeart color="red" /> : <IoMdHeartEmpty />}
                </span>

            </div>

        </div>
    )
}

export default Colaborador

