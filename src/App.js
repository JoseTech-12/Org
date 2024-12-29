import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Header } from './Componentes/Header/Header';
import { Formulario } from './Componentes/Formulario/Formulario';
import Footer from './Componentes/Footer';
import MiOrg from './Componentes/MiOrg/';
import Equipo from './Componentes/Equipo';
import './App.css';




function App() {

  const [mostrarForm, setMostrarForm] = useState(true);
  const [colaboradores, setColaboradores] = useState([
    {
      nombre: 'Jose',
      puesto: 'Front End',
      opciones: 'Front End',
      foto: 'https://avatars.githubusercontent.com/u/177365124?v=4',
      id: uuid(),
      fav: false
    }
  ])
  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo: 'Programacion',
      colorPrimario: '#D9F7E9',
      colorSecundario: '#57C278 ',
    },
    {
      id: uuid(),
      titulo: 'Front End',
      colorPrimario: '#E8F8FF',
      colorSecundario: '#82CFFA',
    },
    {
      id: uuid(),
      titulo: 'Data Science',
      colorPrimario: '#F0F8E2',
      colorSecundario: '#A6D157',
    },
    {
      id: uuid(),
      titulo: 'Devops',
      colorPrimario: '#FDE7E8',
      colorSecundario: '#E06B69',
    },
    {
      id: uuid(),
      titulo: 'UX y Diseño',
      colorPrimario: '#FAE9F5',
      colorSecundario: '#DB6EBF',
    },
    {
      id: uuid(),
      titulo: 'Movil',
      colorPrimario: '#FFF5D9',
      colorSecundario: '#FFBA05',
    },
    {
      id: uuid(),
      titulo: 'Inovacion y Gestión',
      colorPrimario: '#FFEEDF',
      colorSecundario: '#FF8A29',
    },

  ])

  const cambiarMostrar = () => {
    setMostrarForm(!mostrarForm);
  }


  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (id === equipo.id) {
        equipo.colorSecundario = color
      }
      return equipo

    })
    setEquipos(equiposActualizados)
  }

  const registrarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const agregarFavorito = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    setColaboradores(colaboradoresActualizados)

  }


  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id != id)
    setColaboradores(nuevosColaboradores)
  }


  const registrarEquipo = (equipo) => {
    setEquipos([...equipos, equipo])
  }

  return (
    <div>
      <Header />
      {mostrarForm && <Formulario
        registrarColaborador={registrarColaborador}
        registrarEquipo={registrarEquipo}
        equipos={equipos.map((equipo) => equipo.titulo)} />}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo, index) => <Equipo colaboradores={colaboradores.filter(colaborador => colaborador.opciones === equipo.titulo)}
          key={index} datos={equipo}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          agregarFavorito={agregarFavorito}
        >

        </Equipo>)
      }
      <Footer />
    </div>
  );
}

export default App;
