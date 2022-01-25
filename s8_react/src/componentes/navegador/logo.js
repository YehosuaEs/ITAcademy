import react from "react";
import { Fragment } from "react";
import logoStarWars from "./imgNavegador/logo_Star_Wars/logoStarWars.svg"



function Logo() {

    return(
        <Fragment>

            <div className="col-sm-4 rounded text-center">
                <img 
                    src={logoStarWars} 
                    style={{width:'25vmin'}} 
                    alt="Star Wars Logo">
                </img>
            </div>

        </Fragment>

    )
};

export default Logo;