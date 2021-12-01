import React from 'react';
import { LineTexto, Fondo } from '../estilos_escena/estilos_txt';
import {Nav, BotonD, BotonI } from '../../botones/estilos_botones/botonones_styled';
import { useState } from "react"; 

function MyComponent  (props)   {

    /* ------------- Seccion de Boton ---------- */
    const [contadorFrase, setContadorFrase] = useState(0);

    const pressBefore = () => { 
        if (contadorFrase > 0){
            setContadorFrase(contadorFrase - 1 )
        } else {
            setContadorFrase(contadorFrase + props.txt.length-1)
        }
    };  
    
    const pressAfter = () => {
       if (contadorFrase < props.txt.length-1){
            setContadorFrase(contadorFrase + 1 )
        } else {
            setContadorFrase(contadorFrase - props.txt.length+1)
        }
     };

    /* ------------- Seccion de texto ---------- */
    const lineaTxt = props.txt.map (function (frases, index) {
        return(
            <LineTexto key={index}  relleno={index === contadorFrase && "pink"}> {frases.txt}</LineTexto> 
        )       
    }); 
    
    /* ------------- Seccion de return de MyComponent ---------- */
    return (
        <Fondo style={{backgroundImage: `url(${props.txt[contadorFrase].img})`}} > 
            {/* Ejercicio 1  */}
            {/* El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial  */}
            {/* Ejercicios 2, 3, 4 , 5 y 6 */}
            <Nav> 
                <BotonI onClick={pressBefore}>Anterior</BotonI>
                <BotonD onClick={pressAfter}>Siguiente</BotonD>
            </Nav>
           {lineaTxt} 
        </Fondo> 
   )
}

export default MyComponent;





/*
<>
 <img src={frases.img} alt={"imagen de fondo"} key={index}/>  
</>
 */