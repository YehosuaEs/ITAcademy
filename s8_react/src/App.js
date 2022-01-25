import { Fragment} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './componentes/navegador/nav.js';
import StarShipsList from './componentes/body/starShips/starShipsList.js';
import Home from './componentes/body/home/home.js';
import Nave  from './componentes/body/starShips/nave.jsx';

function App() {



  return (
    <Router>

      <Fragment>

        <NavBar></NavBar>

        <Routes> 
          
          <Route path="/starShips/:index" element={<Nave/>}></Route>
          <Route path="/" element={<Home/>} />
          <Route path="/starShips" element={<StarShipsList/>} />
         
        </Routes>
 
         
      </Fragment>

    </Router>
   
  );
}

export default App;
