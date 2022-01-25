import React from "react";
import { Fragment } from "react";
import "./stylesNav/Nav.css"
import Iconos from "./iconos";
import Logo from "./logo";
import Menu from "./menu";


function NavBar() {

    return (
        <Fragment>
          
            <div className="Nav">
                <div className="row">
                    {/* ----Iconos Redes Sociales */}
                    <div className="col-sm-1"></div>
                    <Iconos></Iconos>
                    {/* ----logo---- */}
                    <Logo></Logo>
                    {/* ----Busqueda y Login---- */}
                    <div className="col-sm-3 text-center text-white mt-3">
                        <form className="form-inline">
                            <div className="form-inline">
                                <div className="col-xs-3">
                                    <input className="form-control" id="ex2" type="text"/>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </div>
                            </div>
                        </form>       
                            {/* <div class="input-group-btn">
                                <button className="btn btn-default bg-primary" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                            </div>         */} 
                        Busqueda y Login
                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </div>
            <Menu></Menu>
           
                
        </Fragment>
    );
};

export default NavBar;

