import React from "react";
import { Div, TxtBienvenida} from "../estilos_bienvenida/bienbenidaStyled";
import { BtnWelcome } from "../estilos_bienvenida/bienbenidaStyled";



function Bienvenida() {
 


    return(
        <React.Fragment>
             
             
            <Div>
                <TxtBienvenida header={'h1'}> Bienvenidos </TxtBienvenida>
                <TxtBienvenida header={'h3'}> Sprint 6 </TxtBienvenida>
                <TxtBienvenida ancho={'parrafo'}> Presiona el boton para comenzar y así poder visualizar los  ejercicios del Sprint 6</TxtBienvenida>
                <BtnWelcome>Comenzar</BtnWelcome>
            </Div>
             
             

        </React.Fragment>
    )
}

export default Bienvenida;