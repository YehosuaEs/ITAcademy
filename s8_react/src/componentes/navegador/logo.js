import react, { Fragment } from "react";
import logoStarWars from "./imgNavegador/logo_Star_Wars/logoStarWars.svg"



function Logo() {

    return(
        <Fragment>

            <div className="col-lg-4 rounded text-center me-4 pe-5">
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