import React from 'react'
import './Formulario.css'
import CampoTexto from '../CampoTexto'

export const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto titulo="Nombre" placeHolder="Ingresar nombre" />
                <CampoTexto titulo="Puesto" placeHolder="Ingresar puesto" />
                <CampoTexto titulo="Foto" placeHolder="Ingresar enlace de foto" />
            </form>
        </section>
    )
}
