import styledComponents from "styled-components"

export const Parrafo = styledComponents.p`
margin: 60px;
margin-left: 300px;
margin-right: 300px;
font-size: 25px;
font-weight: 500;
text-align: center;
line-height : 40px;
`;


export const Titulo = styledComponents.h1`
font-size: 50px;
text-align: center;
margin-top: 50px;
font-weight: 800;

    ${props => props.estilo === 'subtitulo' && `
     font-size: 25px;
     margin-top: 0px;
    `}
`;