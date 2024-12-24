import { useState } from 'react';
import { Header } from './Componentes/Header/Header';
import { Formulario } from './Componentes/Formulario/Formulario';
import MiOrg from './Componentes/MiOrg/';
import Equipo from './Componentes/Equipo';

import './App.css';

function App() {

  const [mostrarForm, setMostrarForm] = useState(true);

  const equipos = [
    {
      titulo: 'Programacion',
      colorPrimario: '#D9F7E9',
      colorSecundario: '#57C278 ',
    },
    {
      titulo: 'Front End',
      colorPrimario: '#E8F8FF',
      colorSecundario: '#82CFFA',
    },
    {
      titulo: 'Data Science',
      colorPrimario: '#F0F8E2',
      colorSecundario: '#A6D157',
    },
    {
      titulo: 'Devops',
      colorPrimario: '#FDE7E8',
      colorSecundario: '#E06B69',
    },
    {
      titulo: 'UX y Diseño',
      colorPrimario: '#FAE9F5',
      colorSecundario: '#DB6EBF',
    },
    {
      titulo: 'Movil',
      colorPrimario: '#FFF5D9',
      colorSecundario: '#FFBA05',
    },
    {
      titulo: 'Inovacion y Gestión',
      colorPrimario: '#FFEEDF',
      colorSecundario: '#FF8A29',
    },

  ]


  const cambiarMostrar = () => {
    setMostrarForm(!mostrarForm);
  }
  return (
    <div>
      <Header />
      {mostrarForm && <Formulario />}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo, index) => <Equipo key={index} datos={equipo}></Equipo>)
      }

    </div>
  );
}

export default App;
