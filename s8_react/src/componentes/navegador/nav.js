import React from "react";
import { Fragment } from "react";
import "./stylesNav/Nav.css"
import Iconos from "./iconos";
import Logo from "./logo";
import Menu from "./menu";
import LoginSearch from "./searchLogin";



function NavBar() {

    return (
        <Fragment>
          
            <div className="Nav">
                <div className="row">
                    <div className="col-lg-1"></div>
                    {/* ----Iconos Redes Sociales */}
                    <Iconos />
                    {/* ----logo---- */}
                    <Logo />
                    {/* ----Busqueda y Login---- */}
                    <LoginSearch />
                    <div className="col-lg-1"></div>
                </div>
            </div>
            {/* ----Menu de navegación ---- */}
            <Menu />
         
        </Fragment>
    );
};

export default NavBar;

