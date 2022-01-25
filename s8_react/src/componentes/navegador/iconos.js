import react from "react";
import { Fragment } from "react";
import facebook from "./imgNavegador/Iconos_Redes_Sociales/facebook.png";
import instagram from "./imgNavegador/Iconos_Redes_Sociales/instagram.png";
import twitter from "./imgNavegador/Iconos_Redes_Sociales/twitter.png";
import youtube from "./imgNavegador/Iconos_Redes_Sociales/youtube.png";


function Iconos(){

    return (

        <Fragment>

            <div className="col-sm-3 text-right text-white mt-3">
                <img src={facebook} style={{width:'3vmin', marginRight:"20px", cursor:"pointer"}}></img>
                <img src={instagram} style={{width:'3vmin', marginRight:"20px", cursor:"pointer"}}></img>
                <img src={twitter} style={{width:'3vmin', marginRight:"20px", cursor:"pointer"}}></img>
                <img src={youtube} style={{width:'3vmin', marginRight:"20px", cursor:"pointer"}}></img>
            </div>

        </Fragment>
    )
};

export default Iconos;