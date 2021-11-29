import React from "react";
import {Boton} from '../estilos_botones/BotonesStyled' 
import { BotonD } from "../estilos_botones/BotonesStyled";
import { BotonI } from "../estilos_botones/BotonesStyled";


/* 
const Botones = ({onclick, props, type, texto}) => {
    return (
        <React.Fragment>
            <Boton onClick={onclick} {...props} type={type}>{texto}</Boton>
        </React.Fragment>
    )
}
export default Botones; 
 */





import { useState } from "react"; 

const Botones = () => {

    const [contador, setContador] = useState(0);
    
    const pressBefore = () => { 
        alert("Anterior")
        return (
            setContador(contador -1)
    )};  

    const pressAfter = () => {
        alert("Siguiente")
        return (
            setContador(contador +1)
    )}; 


    return (
        <React.Fragment>

            <BotonI onClick={pressBefore}>Anterior</BotonI>
            {contador}
            <BotonD onClick={pressAfter}>Siguiente </BotonD> 
            
        </React.Fragment>
    )
}

export default Botones; 

