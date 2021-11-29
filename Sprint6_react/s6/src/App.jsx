import React, { Fragment } from 'react';
import MyComponent  from './componentes/escena/componente_escena/Escena';
import Enunciados from "./textos.json" ; 
import { Div, TxtBienvenida, BtnWelcome } from './componentes/bienvenida/estilos_bienvenida/bienbenidaStyled'; 
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
        {/* <MyComponent/> */}
        
        {/* Ejercicio 2, 3, 4 */}
        {/* <MyComponent txt={Enunciados}/> */}
        
        {/* Ejercicio 5 */}
      {condicion ? (
        <Div>
          <TxtBienvenida header={'h1'}> Bienvenidos </TxtBienvenida>
          <TxtBienvenida header={'h3'}> Sprint 6 </TxtBienvenida>
          <TxtBienvenida ancho={'parrafo'}> Presiona el boton para comenzar y así poder visualizar los  ejercicios del Sprint 6</TxtBienvenida>
          <BtnWelcome onClick={pressButton}>Comenzar</BtnWelcome>
        </Div> 
      ) : (
        <MyComponent txt={Enunciados}/>
      )};

     
      </div> 

    </Fragment> 
  );
}

export default App;