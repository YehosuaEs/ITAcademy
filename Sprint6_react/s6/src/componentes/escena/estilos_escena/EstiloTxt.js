import styled from "styled-components";



export const LineTexto = styled.p `
margin: 20px;
padding: 20px;
border: 1px Solid #DFDFDF;
background: #FAFAFA; 
text-align: center;
border-radius: 30px;
font-size: 20px;
font-weight: 500;
        
    ${props => props.color === 'pink' && `
    background: pink;
    `}
`;