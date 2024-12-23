import React from 'react'
import './Boton.css'

const index = (props) => {
    return (
        <button className='boton'>{props.children}</button>
    )
}

export default index