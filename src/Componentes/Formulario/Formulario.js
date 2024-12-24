import { useState } from 'react'
import React from 'react'
import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaOpciones from '../ListaOpciones'
import Boton from '../Boton'

export const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [puesto, setPuesto] = useState('')
    const [foto, setFoto] = useState('')
    const [opciones, setOpciones] = useState('')

    const manejarEnvio = (e) => {
        console.log('Enviando formulario...',)
        e.preventDefault()
        const colaborador = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            opciones: opciones
        }
        console.log('Colaborador creado:', colaborador)

    }


    return (
        <section className='formulario'>
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto actualizarvalor={setNombre}
                    titulo="Nombre" placeHolder="Ingresar nombre" required />
                <CampoTexto actualizarvalor={setPuesto}
                    titulo="Puesto" placeHolder="Ingresar puesto" required />
                <CampoTexto actualizarvalor={setFoto}
                    titulo="Foto" placeHolder="Ingresar enlace de foto" required />
                <ListaOpciones valor={opciones} actualizarvalor={setOpciones} />
                <Boton>
                    Crear
                </Boton>
            </form>
        </section>
    )
}
