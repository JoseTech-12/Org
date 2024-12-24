import React from 'react'
import './Equipo.css'

const Equipo = (props) => {
    const { colorPrimario, colorSecundario, titulo } = props.datos
    const estilosSeccion = { backgroundColor: colorPrimario }
    const estilosTitulo = { borderColor: colorSecundario }

    return (
        <section style={estilosSeccion} className='equipo' >
            <h3 style={estilosTitulo}>{titulo}</h3>
            <div className='colaboradores'>

            </div>
        </section >
    )
}

export default Equipo