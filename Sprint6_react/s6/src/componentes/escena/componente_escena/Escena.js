import React from 'react';
import { LineTexto } from '../estilos_escena/EstiloTxt';
import { Nav } from '../../botones/estilos_botones/BotonesStyled';
import { BotonD } from '../../botones/estilos_botones/BotonesStyled';
import { BotonI } from '../../botones/estilos_botones/BotonesStyled';
import { useState } from "react"; 


function MyComponent  (props)   {

    /* ------------- Sección de Boton ---------- */
    const [contadorFrase, setContadorFrase] = useState(0,4);

    const pressBefore = () => { 
        /* alert("Anterior -1") */
        if (contadorFrase > 0){
            setContadorFrase(contadorFrase - 1 )
        } else {
            setContadorFrase(contadorFrase + props.txt.length-1)
        }
    };  
    
    const pressAfter = () => {
        /* alert( "Siguiente +1" ) */
       if (contadorFrase < props.txt.length-1){
            setContadorFrase(contadorFrase + 1 )
        } else {
            setContadorFrase(contadorFrase - props.txt.length+1)
        }
     };
     
    /* ------------- Sección de texto ---------- */
     const lineaTxt = props.txt.map (function (frases, index) {
        return  (
            <LineTexto key={index} color={index === contadorFrase && "pink" }> {frases}</LineTexto> 
        )       
    });


    /* ------------- Sección de return de MyComponent ---------- */
    return (
        <div>
            {/* Ejercicio 1  */}
            {/* El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial  */}
            {/* Ejercicio 2, 3 y 4 */}
            <Nav> 
                <BotonI onClick={pressBefore}>Anterior</BotonI>
                <BotonD onClick={pressAfter}>Siguiente</BotonD>
            </Nav>
            {lineaTxt}
           
        </div>  
   )
}

export default MyComponent;

