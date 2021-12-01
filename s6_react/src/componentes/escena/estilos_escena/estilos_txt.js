import styled from "styled-components";

export const LineTexto = styled.p `
margin: 20px;
padding: 20px;
border: 1px Solid #F9FAFB;
background: rgb(249, 250, 251, 0.8); 
text-align: center;
border-radius: 30px;
font-size: 24px;
font-weight: 700;
        
    ${props => props.relleno === 'pink' && `
    background: rgb(248, 113, 113, 0.9);
    border: 1px Solid rgb(248, 113, 113);
    color: white;
    `}
`;

export const Fondo = styled.div`
    width: 100%;
    padding-top:10px;
    padding-bottom: 25px;
    height: 900px;
    background-size: 100% 100%;
    
`;