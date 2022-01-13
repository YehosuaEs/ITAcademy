import { Fragment } from "react";
import { Link } from "react-router-dom";


function NavBar () {

    return (
        
            <Fragment>
               {/*  {<div className="container-fluid navbar navbar-expand-lg navbar-dark bg-secondary">  
                    <h1>Sprint 7</h1>
                </div>}
                 */}
                 <nav className="navbar navbar-expand-sm navbar-light  bg-primary">
            <p className="mb-1 mt-1 mx-5 display-4 text-white fw-bold bg-primary">Sprint 7</p>
              <ul className="navbar-nav position-absolute top-50 start-50 translate-middle ">
                <li className="btn btn-primary ">
                  <Link to="/" className="nav-link text-white h2 mx-2"> Inicio</Link>
                </li>
                <li className="btn btn-primary">
                  <Link to="/ejercicioUno" className="nav-link text-white h2 mx-5"> Ex.1</Link>
                </li>
                <li className="btn btn-primary">
                  <Link to="/ejercicioDosyTres" className="nav-link text-white h2 mx-2"> Ex.2+</Link>
                </li>
              </ul>
         </nav>
            </Fragment>
       
    )
     


};


export default NavBar;