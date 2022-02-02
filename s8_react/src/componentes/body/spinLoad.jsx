import React from "react";
import {Loading, Bloque, Lista} from "./starShips/styleStarShips"



/* -------  Div del Spin Loader cuando este cargando algo ------- */
export const SpinLoad = () => {
    return (
        <Bloque estilo={"spinDiv"}>
            <Loading/> 
            <Lista estilo={"loading"} > Loading page... please wait  </Lista>
        </Bloque>
    )
};