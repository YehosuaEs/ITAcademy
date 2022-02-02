import react, { Fragment }from "react";
import facebook from "./imgNavegador/Iconos_Redes_Sociales/facebook.png";
import instagram from "./imgNavegador/Iconos_Redes_Sociales/instagram.png";
import twitter from "./imgNavegador/Iconos_Redes_Sociales/twitter.png";
import youtube from "./imgNavegador/Iconos_Redes_Sociales/youtube.png";


function Iconos(){

    return (

        <Fragment>
            <div className="col-lg-3 text-right text-white mt-3 ms-3">
                <a href="https://www.facebook.com/StarWars" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="facebook icon" style={{width:'3vmin', marginRight:"20px", cursor:"pointer"}}></img>
                </a>
                <a href="https://www.instagram.com/starwars/" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="instagram icon"  style={{width:'3vmin', marginRight:"20px", cursor:"pointer"}}></img>
                </a>
                <a href="https://twitter.com/starwars" target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="twitter icon"  style={{width:'3vmin', marginRight:"20px", cursor:"pointer"}}></img>
                </a>
                <a href="https://www.youtube.com/user/starwars" target="_blank" rel="noopener noreferrer">
                    <img src={youtube}  alt="youtube icon" style={{width:'3vmin', marginRight:"20px", cursor:"pointer"}}></img>
                </a>
            </div>
        </Fragment>
    )
};

export default Iconos;