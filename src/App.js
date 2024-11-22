import React from 'react'; //importacion de react para trabajar con componentes de react

// se usa para manejar la navegacion entre paginas de react
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import Reservalist from '../src/components/Reservalist';
import ReservaForm from '../src/components/ReservaForms';
// import NotFound from './components/NotFound';

import axios from 'axios';

// definir la aplicacion 

// Router: habilita el enrutamiento
// Routes: contiene todas las rutas de la aplicacion
// Route: pat"/" muestra el componente reserva list



function App() {
  return (
    <BrowserRouter basename="/">

      <Routes>
        <Route path="/reservas" element={<Reservalist />} />
        <Route path = "/nueva" element = {<ReservaForm/>}/>
          <Route path = "/editar/:id" element = {<ReservaForm/>}/> 
           {/* <Route path='/*' element={<NotFound />} /> / */}
      </Routes>

    </BrowserRouter>
  );
}

export default App;