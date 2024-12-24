
import React from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeHolderModificado = `${props.placeHolder}...`

    return (
        <div className='campo-texto'>
            <label htmlFor='nombre'>{props.titulo}:</label>
            <input onChange={(e) => props.actualizarvalor(e.target.value)}
                placeholder={placeHolderModificado} type='text' required={props.required} />
        </div>
    )
}

export default CampoTexto

