import styled from "styled-components";

 /* ---------NAV Contenedor de los botones -------- */
export const Nav = styled.nav`
display: flex;
widht: calc (100% -10px);
margin: 10px;

`;
/* ---------- BOTONES --------- */
export const Boton = styled.button`
background: transparent;
border: 1px solid #D1D1D1;
color: black;
margin: 5px;
width: 100%;
height: 80px;
cursor: pointer;
display: inline;
font-size: 22px;
font-weight: 900;

transition: 1s;

    &:hover {
      opacity: 1;
      background: #D1D1D1;
    }
    
    ${props => props.type === 'Before' && `
    border-top-left-radius: 60px;
    border-bottom-left-radius: 60px;
    `}

    ${props => props.type === 'After' && `
    border-top-right-radius: 60px;
    border-bottom-right-radius: 60px;
    `}
`;


export const BotonI = styled.button`
background: #ECECEC;
border: 1px solid #D1D1D1;
color: black;
margin: 10px;
padding: 20px;
width: 100%;
cursor: pointer;
display: inline;
font-size: 22px;
font-weight: 900;
transition: 1s;
border-top-left-radius: 60px;
border-bottom-left-radius: 60px;

  &:hover {
    transform: scale(1.01); 
    opacity: 1;
    color: white;
    background: #A9A9A9;
  }
  
 `;

export const BotonD = styled.button`
background: #ECECEC;
border: 1px solid #D1D1D1;
color: black;
margin: 10px;
padding: 20px;
width: 100%;
cursor: pointer;
display: inline;
font-size: 22px;
font-weight: 900;
transition: 1s;
border-top-right-radius: 60px;
border-bottom-right-radius: 60px;

  &:hover {
    transform: scale(1.01); 
    opacity: 1;
    color: white;
    background: #A9A9A9;
  }
  
 `;
