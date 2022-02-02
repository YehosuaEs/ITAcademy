import { Fragment, useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/navegador/nav.js';
import Home from './componentes/body/home/home.jsx';
import StarShipsList from './componentes/body/starShips/starShipsList.jsx';
import Nave  from './componentes/body/starShips/nave.jsx';
//import ImgNave from './componentes/body/starShips/imgNave.jsx';
import Video from "./componentes/body/filmsVideoEtc/video" 
import  Films  from "./componentes/body/filmsVideoEtc/films"
import Series  from "./componentes/body/filmsVideoEtc/series"
import  Disney from "./componentes/body/filmsVideoEtc/disney"
import NotFound from './componentes/body/filmsVideoEtc/notFound.jsx';
import LoginForm from './componentes/Login/login.jsx';



function App() {
  const [user, setUser] = useState(null);
  const [usuario, setUsuario] = useState({email:"",  password: ""});
  const [error, setError] = useState("");

  const Login = (details) => {
    if (details.email !== "" ) {
      setUser(true)
      setUsuario ({
        email: details.email,
        password: details.password
      });
    } else {
      setError("Necesitas intruducir un email y una contraseña.")
    }
  }
/* 
  const Logout = () => {
    console.log("logout");
    setUser({email:"",  password: ""})
  } */

  return (
    <Router>

      <Fragment>
        <div>
           <NavBar> </NavBar>
            <Routes> 
            <Route path="/*"  element={<Navigate to={user ? "/" : "/login" }/>  }/> 
            {(usuario.email !== "") ? ( 
              <> 
                <Route path="/starShips/:index" element={<Nave/>}></Route>
                <Route path="/" element={<Home/>} />
                <Route path="/starShips" element={<StarShipsList/>} />
                <Route path="/video" element={<Video/>} />
                <Route path="/films" element={<Films />} />
                <Route path="/series" element={<Series />} />
                <Route path="/disney+" element={<Disney />} />
                <Route path="*" element={<NotFound/>} /> 
              </> 
              ) : (
                  <Route path="/login"  element={<LoginForm  authenticate={() => setUser(true)}  Login={Login} error={error}/>}  />
              )
            }          
            </Routes>
        </div>
      </Fragment>
    </Router>
   
  );
}

export default App;
