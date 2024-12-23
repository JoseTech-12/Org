import React from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeHolderModificado = `${props.placeHolder}...`
    return (
        <div className='campo-texto'>
            <label htmlFor='nombre'>{props.titulo}:</label>
            <input placeholder={placeHolderModificado} type='text' id='nombre' name='nombre' />
        </div>
    )
}

export default CampoTexto

