import styled from "styled-components";

 /* ---------NAV Contenedor de los botones -------- */
export const Nav = styled.nav`
display: flex;
widht: calc (100% -10px);
margin: 10px;
`;

/* ---------- BOTONES --------- */
export const BotonI = styled.button`
background: dodgerblue;
border: 1px solid dodgerblue;
opacity: 0.99;
color: white;
margin: 10px;
padding: 20px;
width: 100%;
cursor: pointer;
display: inline;
font-size: 26px;
font-weight: 900;
transition: 0.9s;
border-top-left-radius: 60px;
border-bottom-left-radius: 60px;

  &:hover {
    border: dodgerblue;
    color: white;
    background: rgb(147, 197, 253, 0.5);
  }
  
`;

export const BotonD = styled.button`
background: dodgerblue;
border: 1px solid dodgerblue;
opacity: 0.99;
color: white;
margin: 10px;
padding: 20px;
width: 100%;
cursor: pointer;
display: inline;
font-size: 26px;
font-weight: 900;
transition: 0.9s;
border-top-right-radius: 60px;
border-bottom-right-radius: 60px;

  &:hover {
    border: dodgerblue;
    color: white;
    background: rgb(147, 197, 253, 0.5);
  }
  
`;

/* ------------------------------------ */
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
