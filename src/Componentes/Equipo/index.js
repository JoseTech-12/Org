import React from 'react'
import './Equipo.css'
import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba'

const Equipo = (props) => {
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, agregarFavorito } = props
    const estilosSeccion = { backgroundColor: hexToRgba(colorSecundario, 0.6) }
    const estilosTitulo = { borderColor: colorSecundario }



    return (
        <>
            {
                colaboradores.length > 0 &&
                < section style={estilosSeccion} className='equipo' >
                    <input
                        type='color'
                        className='input-color'
                        value={colorSecundario}
                        onChange={(e) => {
                            actualizarColor(e.target.value, id)


                        }}
                    />
                    <h3 style={estilosTitulo}>{titulo}</h3>
                    <div className='colaboradores'>
                        {
                            colaboradores.map((colaborador, index) => {
                                return <Colaborador key={index} colorEncabezado={colorSecundario}
                                    colaborador={colaborador}
                                    eliminarColaborador={eliminarColaborador}
                                    agregarFavorito={agregarFavorito}
                                />
                            })}


                    </div>
                </section >
            }
        </>
    )

}

export default Equipo