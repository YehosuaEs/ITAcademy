import styled from "styled-components";


export const Bloque = styled.div`
border-radius: 30px;
border: 3px solid #252626;
margin: auto;
margin-top: 60px;
text-align: center;
background-color: #ebeff5;
width: 700px;
font-size: 24px;
padding-top: 10px;
padding-bottom:50px;
`;

export const OpcionesBox = styled.div`
margin-left: 75px;
text-align: left;
`;

export const Opciones =styled.div`
padding 10px;
`;

export const OpcionLabel = styled.label`
cursor: pointer;

    ${props => props.estilo === "extrasWeb" &&`
    padding: 5px;
    margin: 5px;

    `}
`;

export const Panell = styled.form`
margin:20px;
padding: 20px;
border: 3px solid #252626;
border-radius: 20px;
background-color: #f5f7fa;
text-align: center;
resize: initial;
display:  ${props => props.display}

`;

export const Input = styled.input`
border: 2px solid #252626;
margin-right: 10px;
font-size:25px;
font-weight:500;
cursor: pointer;
::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0px;
}
::-webkit-outer-spin-button{
    -webkit-appearance: none;
    margin: 0;
}    

    ${props => props.estilo === 'extrasWeb' && `
        border: 0px solid #f5f7fa;
        width: 60px;
        height: 35px;
        margin: 5px;
        padding: 5px;
        font-weight: 500;
        box-shadow: 2px 5px 5px 0 rgb(209, 209, 209);
    `}
`;

export const Boton = styled.button`
background-color: #e3681b; 
border-radius: 5px;
border: none;
width: 40px;
color: white;
margin-top: 0px;
display: inline-block;
font-size: 25px;
font-weight: 900;
cursor: pointer;
text-align: center;
box-shadow: 2px 2px 2px 2px rgb(209, 209, 209);


    &:hover  {
        border: dodgerblue;
        color: white;
        background: #cd5e18;
        box-shadow: 0 5px 10px 0 rgb(209, 209, 209);
    }


    ${props => props.estilo === 'favInfo' && `
        background-color: white;    
        font-size: 10px;
        border-radius: 50px;
        width: 19px;
        height: 19px;
        margin-left: 5px;
        color: black;
        display: inline;


            &:hover {
                color: white;
                background: gray;
                box-shadow: 0 5px 10px 0 rgb(209, 209, 209);
            }
    `}
`;


/* 

 */

export const Total = styled.div` 
font-weight: 600;
`;
