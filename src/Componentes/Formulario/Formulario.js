import React from 'react'
import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaOpciones from '../ListaOpciones'
import Boton from '../Boton'

export const Formulario = () => {

    const manejarEnvio = (e) => {
        console.log('Enviando formulario...',)
        e.preventDefault()
    }

    return (
        <section className='formulario'>
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto titulo="Nombre" placeHolder="Ingresar nombre" required />
                <CampoTexto titulo="Puesto" placeHolder="Ingresar puesto" required />
                <CampoTexto titulo="Foto" placeHolder="Ingresar enlace de foto" required />
                <ListaOpciones />
                <Boton>
                    Crear
                </Boton>
            </form>
        </section>
    )
}
