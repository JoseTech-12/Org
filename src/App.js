import { useState } from 'react';
import { Header } from './Componentes/Header/Header';
import { Formulario } from './Componentes/Formulario/Formulario';
import MiOrg from './Componentes/MiOrg/';

import './App.css';

function App() {

  const [mostrarForm, setMostrarForm] = useState(true);

  const cambiarMostrar = () => {
    setMostrarForm(!mostrarForm);
  }
  return (
    <div>
      <Header />
      {mostrarForm && <Formulario />}

      <MiOrg cambiarMostrar={cambiarMostrar} />


    </div>
  );
}

export default App;
