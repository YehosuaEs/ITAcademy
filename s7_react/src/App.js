import "./App.css";
import { Fragment } from 'react'; 
import { BrowserRouter as Router,Routes, Route} from "react-router-dom"; 
import Home from "./componentes/home/home";
import NavBar from "./componentes/navBar/navBar"
import EjercicioUno from "./componentes/ejercicioUno/ejercicioUno"; 
import EjercicioDosyTres from "./componentes/ejercicioDos/ejercicioDos"; 

function App() {

  return (
    <Router> 
      <Fragment>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/ejercicioUno" element={<EjercicioUno/>}/> 
          <Route path="/ejercicioDosyTres" element={<EjercicioDosyTres/>}/> 
        </Routes> 
      </Fragment>
    </Router>
    
  );
}

export default App;
