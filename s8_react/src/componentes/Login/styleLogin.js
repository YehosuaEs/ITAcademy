import styledComponents from "styled-components";
import fondoHome from "../body/home/fondoHome.png"


export const Cuerpo = styledComponents.div`
    background-image: url(${fondoHome});
    min-height: 650px; 
    background-size: cover;

`;

export const Formulario = styledComponents.div` 
    color: ##181818;
    font-size: 28px;
    max-width: 30%; 
    margin: auto;
   
    padding-top: 100px;

    
`;

export const LoginBody = styledComponents.form`
    background-color: #221F1F;
    margin: auto;
    height: 100%;
    padding: 30px;
    width: 100%
    border-radius: 5px;
    text-align: center;
    color: #ecd802;
    
 
`;


export const ContenidoLogIn = styledComponents.input`
    margin: 10px;
    padding: 10px 10px 10px 20px;
    height: 45px;
    width: 90%; 
    border-radius: 5px;
    font-size: 18px;
    color: #ecd802;
    &:focus {
        border: 2px solid #ecd802;
        outline: none;
        box-shadow: 0px 0px 2px red;
        background-color: #484848
    }

    ${props => props.estilo === "BotonSignIn" && `
        background-color: #484848;
        color: #f4f5f5;
        margin: 10px;
        padding: 10px;
        width: 90%;
        border-radius: 5px;
        font-size: 24px;
        border-style: hidden;
        font-size: 18px;

        &:hover {
            background-color: #3D3D3D;
        }
    `}

`;

 const Boton = styledComponents.button`
    background-color: #484848;
    color: #f4f5f5;
    margin: 10px;
    padding: 5px;
    width: 90%;
    border-radius: 5px;
    font-size: 24px;
    border-style: hidden;
    

    &:hover {
        background-color: #3D3D3D;
     }
`;


export const Texto = styledComponents.p`
    margin: 30px 0px 0px 0px ;
    font-size: 24px;

    ${props => props.estilo === "NewAccount" && `
        font-size:18px;
        opacity: 30%;
    `}

    ${props => props.estilo ==="AlertEmail" && `
        font-size: 16px;
        margin: 5px 0px 10px 0px;
        color: red;
    `}

`;