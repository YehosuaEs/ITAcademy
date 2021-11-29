import texto from "./texto.json" 


function MyComponent  () /* (props) */  {
    
    const lineas = texto.map( (frases, index) => <p key={index}> {frases} </p> ); 

    /* const lineas = props.texto.map(text => <p>{text}</p>);  */


    return (
        
        <div>

            {/* Ejercicio 1  */}
            El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial 
         
           
            {/* {texto.map((frase) => <p>(frase)</p>)} */}



           {lineas}  


        </div>
        
        
   )
}

   
export default MyComponent;

/* app.jsx */

function App() {
    
    /* Ejercicio 2.1 */ 
    /* const lineasTexto = Textos.map( (frases, index) => 
          <p key={index}> 
            {frases}  
          </p> 
    );  */
    
    
    return (
      <header className="App-header"> 
       
        <div > 
          {/* Ejercicio 2.1 */}
          {/* {lineasTexto}  */}
          
      
          <MyComponent/>
   
  
        </div> 
       
      </header>
       
    );
  }
  
  export default App;





  /* ULITMA PARTE  */


        
         
        
        <Div>
          <TxtBienvenida header={'h1'}> Bienvenidos </TxtBienvenida>
          <TxtBienvenida header={'h3'}> Sprint 6 </TxtBienvenida>
          <TxtBienvenida ancho={'parrafo'}> Presiona el boton para comenzar y así poder visualizar los  ejercicios del Sprint 6</TxtBienvenida>
          <BtnWelcome onClick={pressButton}>Comenzar</BtnWelcome>
        </Div> 

        {/* Ejercicio 1 */}
        {/* <MyComponent/> */}

        
         