
import React from 'react'
import './Campo.css'

const Campo = (props) => {
    const placeHolderModificado = `${props.placeHolder}...`

    return (
        <div className={`campo campo-${props.type}`} >
            <label htmlFor='nombre'>{props.titulo}:</label>
            <input type={props.type} onChange={(e) => props.actualizarvalor(e.target.value)}
                placeholder={placeHolderModificado} required={props.required} />
        </div >
    )
}

export default Campo

