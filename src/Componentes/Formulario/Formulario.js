import { useState } from 'react'
import React from 'react'
import './Formulario.css'
import Campo from '../Campo'
import ListaOpciones from '../ListaOpciones'
import Boton from '../Boton'
import { v4 as uuid } from 'uuid'

export const Formulario = (props) => {
    const [nombre, setNombre] = useState('')
    const [puesto, setPuesto] = useState('')
    const [foto, setFoto] = useState('')
    const [opciones, setOpciones] = useState('')
    const [titulo, setTitulo] = useState('')
    const [color, setColor] = useState('')
    const { registrarColaborador, registrarEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        const colaborador = {
            id: uuid(),
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            opciones: opciones,
            fav: false

        }
        registrarColaborador(colaborador)

    }

    const manejarEnvioEquipo = (e) => {
        e.preventDefault()
        const equipo = {
            id: uuid(),
            titulo: titulo,
            colorSecundario: color
        }
        registrarEquipo(equipo)
    }


    return (
        <section className='formulario'>
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Campo actualizarvalor={setNombre}
                    titulo="Nombre" placeHolder="Ingresar nombre" required />
                <Campo actualizarvalor={setPuesto}
                    titulo="Puesto" placeHolder="Ingresar puesto" required />
                <Campo actualizarvalor={setFoto}
                    titulo="Foto" placeHolder="Ingresar enlace de foto" required />
                <ListaOpciones equipos={props.equipos} valor={opciones} actualizarvalor={setOpciones} />
                <Boton>
                    Crear
                </Boton>
            </form>

            <form onSubmit={manejarEnvioEquipo}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Campo actualizarvalor={setTitulo}
                    titulo="Titulo" placeHolder="Ingresar titulo" required />
                <Campo type="color" actualizarvalor={setColor}
                    titulo="Color" placeHolder="Ingresar el color en Hex" required />
                <Boton>
                    Registrar equipo
                </Boton>
            </form>

        </section>
    )
}
