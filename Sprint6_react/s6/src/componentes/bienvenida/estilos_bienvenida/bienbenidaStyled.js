import styled from "styled-components";

export const Div = styled.div `
    background: white; 
    margin-top: 200px;

    `;

export const TxtBienvenida = styled.p`
background: violet; 
text-align: center;
font-size: 34px;
margin: auto;

    ${props => props.header === 'h1' && `
    font-size: 50px;
    font-weight: 700;
    padding-top: 80px;
    width: 600px;
    background: transparent;
    `}

    ${props => props.header === 'h3' && `
    font-size: 46px;
    width: 600px;
    padding-top: 40px;
    background: transparent;
    `}
    
    ${props => props.ancho === 'parrafo' && `
    width: 600px;
    font-size: 26px;
    padding-top: 40px;
    margin-bottom: 40px;
    background: transparent;
    `}
`;

export const BtnWelcome = styled.button`
background: white;
border: 6px solid dodgerblue;
color: dodgerblue;
margin-top: 50px;
margin-left: 750px;
margin-bottom: 60px;
width: 300px;
height: 80px;
cursor: pointer;
display: inline;
font-size: 24px;
font-weight: 900;
border-radius: 6px;
transition: 0.5s;

    &:hover {
      background: dodgerblue;
      border 4px solid dodgerblue;
      color: white;
    }
`;