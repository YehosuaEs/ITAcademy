import React, { Fragment } from 'react';
import textosImg from './imagenesTexto/textoImg.js';
import MyComponent  from './componentes/escena/componente_escena/Escena'; 
/* import Enunciados from "./imagenes_texto/texto/textos.json" ;  */  
import { Div, TxtBienvenida, BtnWelcome } from './componentes/bienvenida/estilos_bienvenida/bienvenida_styled'; 
import { useState } from 'react'; 

function App() {

  const [condicion, setCondicion] = useState(true);
   
  const pressButton = () => {
    return(
      setCondicion(condicion === false)
  )};  
  
  return (
    <Fragment>
       
      <div>
          {/* Ejercicio 1 */}
          {/*  <MyComponent/>  */}
          {/* Ejercicio 2, 3, 4, 5 y 6 */}
          {condicion ? (
            <Div>
              <TxtBienvenida header={'h1'}> Bienvenidos </TxtBienvenida>
              <TxtBienvenida header={'h3'}> Sprint 6 </TxtBienvenida>
              <TxtBienvenida ancho={'parrafo'}> Presiona el boton para comenzar y así poder visualizar los  ejercicios del Sprint 6</TxtBienvenida>
              <Div button={'boton'} > 
                <BtnWelcome onClick={pressButton}>Comenzar</BtnWelcome>
              </Div> 
            </Div> 
          ) : (
            <MyComponent txt={textosImg}/>  
          )}; 
      </div> 

    </Fragment> 
  );
}

export default App;