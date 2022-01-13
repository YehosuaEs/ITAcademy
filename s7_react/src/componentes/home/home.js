/* import react from "react";  */
import { Fragment } from "react";
import { Parrafo, Titulo } from "./homeStyled";


function Home (){

    return (
        <Fragment>
            <Titulo>Pantalla de Inicio</Titulo>
            <Titulo estilo={'subtitulo'}>descripción del sprint 7</Titulo>
            <Parrafo>En esta entrega realizaremos una aplicación para 
                calcular el presupuesto de una página web, añadiendo 
                más interacciones con el usuario que en la práctica 
                anterior (casillas de selección, inputs, botones). 
                Nuestra web deberá reaccionar y modificar el precio 
                total en función de las opciones que elija el usuario.
            </Parrafo>
        </Fragment>
        
    )
};

export default Home;

