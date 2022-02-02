import styledComponents, {keyframes} from "styled-components";
import fondoStarShips from "./fondoStarShips.png"
import fondoNave from "./fondoNave.png"



export const Cuerpo = styledComponents.div`
    background-color: black;
    background-image: url(${fondoStarShips});
    padding: 50px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 1000px;

        ${props => props.estilo === 'bgNave' && `
        background-image: url(${fondoNave});
        min-height: 1000px;
        padding-top: 0px;
        `}

`;

export const Bloque = styledComponents.div`
    background-color: #161616 ;
    width: 65%;
    margin: 10px;
    margin-left: auto;
    margin-right: auto; 

    ${props => props.estilo === 'bloqueNave' &&`
        width: 80%;
        margin-top: 0px;
    `}

    ${props => props.estilo === "descripcionNave" &&`
        display: grid;
        grid-template-columns: auto auto;
        grid-template-areas: 'myArea myArea';
        grid-gap: 10px;
        padding: 40px;
        width: 100%;
    `}
     
    ${props => props.estilo === "ImagenNave" &&`
        padding: 40px;
        width: 100%;
    `}

    ${props => props.estilo === 'spinDiv' && `
        margin: auto;
        width: 15%;
        background-color: transparent;
        margin-bottom: 680px;
        
    `}
`;

export const Lista = styledComponents.p`
    color: #949494;
    font-size: 20px;
    max-width: 80%;
    margin-left: 2%;
    margin-bottom: auto;

    ${props => props.estilo === 'nave' &&`
        color: #BFBFBF;
        padding-top: 15px;
        text-transform: uppercase;
        font-weight: 700;
    `}

    ${props => props.estilo === 'modelo' &&`
        font-size: 16px;
        margin-bottom: 15px;
        text-transform: capitalize;
    `}

    ${props => props.estilo === 'naveName' && `
        text-transform: uppercase;
        font-weight: 800;
        font-size: 24px;
        margin: 10px;
        color: #BFBFBF;
        grid-area: myArea;
    `}

    ${props => props.estilo === 'loading' && ` 
        text-transform: uppercase;
        font-size: 18px;
        color: #BFBFBF;
        margin: auto;
        text-align: center;
        padding-top: 20px;
    `}

`;

const rotate360 = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

export const Loading = styledComponents.div`
    animation: ${rotate360} 1.1s linear infinite;
    transform: translateZ(0);
    border-top: 4px solid grey;
    border-right: 4px solid grey;
    border-bottom: 4px solid grey;
    border-left: 5px solid white;
    background: transparent;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin: auto;
    margin-top: 300px;
`;

export const BotonNext = styledComponents.button` 
    width: 150px;
    margin: auto;
    margin-top: 10px;
    padding: 5px;
    font-weight: 600;
    color: #000000;
    background-color: #949494;
    
    &:hover {
        background-color: #74747474;
        color: #BFBFBF;
     }
`;


export const ImgShip = styledComponents.img`
    width: 100%;
`;