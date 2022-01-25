import styledComponents from "styled-components";
import fondo from "../home/fondo.webp"



export const Cuerpo = styledComponents.div`
    background-color: black;
    background-image: url(${fondo});
    padding: 50px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;


export const Bloque = styledComponents.div`
    background-color: #161616 ;
    width: 65%;
    margin: 10px;
    margin-left: auto;
    margin-right: auto; 

    
`;

export const Lista = styledComponents.p`
    color: #949494;
    font-size: 24px;
    line-height: 15px;
    margin-left: 2%;
    text-transform: capitalize;

   
    ${props => props.estilo === 'nave' &&`
        padding-top:20px;
    `}

    ${props => props.estilo === 'modelo' &&`
        font-size: 16px;

    `}

`;
