import styledComponents from "styled-components";
import fondoHome from "./fondoHome.png"


export const Cuerpo = styledComponents.div`
    background-image: url(${fondoHome});
    min-height: 620px;
    background-size: cover;


`;


export const Welcome = styledComponents.div`
    color: #949494;
    font-size: 28px;
    max-width: 35%;
    text-align: center;
    margin: auto;
    padding-top: 100px;

`;