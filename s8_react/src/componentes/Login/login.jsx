import React, { Fragment, useState, useEffect } from "react";
import { LoginBody, Cuerpo, Formulario, Boton, ContenidoLogIn, Texto  } from "./styleLogin";
import DisneyStarWars from "./DisneyStarWars.png"
import { useNavigate } from "react-router-dom";


/*---- Get del la data del Login almacenda en el LocalStorage y se tiene que poner en el useState
de  detallesLogin para iniciarlizar con esa infomarción en lugar de estar vacia cada que se reinicié el browser---- */
const getDataLoginAlmacenado = () => {
    const LoginAlmacenado = localStorage.getItem('Detalles de Login');
    if (!LoginAlmacenado){
        return {
            email: '', password: '',
        }} else {
    return JSON.parse(LoginAlmacenado);
    }
}

/* --------------- Function de Login ------------ */
function LoginForm ({/* authenticate,  */ Login, error } )  {
    const navigate = useNavigate();
    const [detallesLogin, setDetallesLogin] = useState(getDataLoginAlmacenado)

    const handleClick = (e) => {
        e.preventDefault();
        /* authenticate() */
        navigate ("/"); 
        Login(detallesLogin);
        
    };

    //Almacenando la data del objeto detallesLogin (email & password) en el LocalStorage
    useEffect(() => {
        const detallesLogin_string = JSON.stringify(detallesLogin)
        window.localStorage.setItem("Detalles de Login", detallesLogin_string);
    }, [detallesLogin]);
      

    return (
        <Fragment> 

            <Cuerpo>
                <Formulario>
                    <LoginBody  onSubmit={handleClick} >
                            <div> 
                                <img 
                                    src={DisneyStarWars}  
                                    style={{width:'18vmax'}} 
                                    alt="Disney - Star Wars Logo">
                                </img>
                            </div>

                            <Texto>SIGN IN</Texto>
                            {(error != "" ) ? (<Texto estilo={"AlertEmail"}>{error}</Texto>) : ""}
                            <div>
                                <ContenidoLogIn 
                                    type="email" 
                                    name="email"
                                    id="email"
                                    placeholder="Enter email"
                                    onChange={e => setDetallesLogin({...detallesLogin, email: e.target.value})} 
                                    value={detallesLogin.email}
                                />
                            </div>
                            <div >
                                <ContenidoLogIn 
                                    type="password"  
                                    name= "password"
                                    id="password"
                                    placeholder="Enter password"
                                    onChange={e => setDetallesLogin({...detallesLogin, password: e.target.value})} 
                                    value={detallesLogin.password}
                                />
                            </div>
                            <div>
                                <ContenidoLogIn type="submit" value="Sign In" estilo={"BotonSignIn"} /* onClick={handleClick} *//>
                            </div>
                            
                            <Texto estilo={"NewAccount"}>Create an Account</Texto>

                    </LoginBody> 
                </Formulario>
            </Cuerpo>
 
        </Fragment>
    ) 
}

export default LoginForm;
