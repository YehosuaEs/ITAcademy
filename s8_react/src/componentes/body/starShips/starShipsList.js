import react, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import {Bloque, Lista, Cuerpo} from "./styleStarShips"
import {Link} from "react-router-dom";


 
function StarShipsList() {
    /* ------- SET del Array donde se encuentra el nombre y el modelo ------- */
    const [starShip, setStarShip] = useState([]);

    /* -------  Obtención de datos desde la API ------- */
    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/')
            .then(res => {
                setStarShip(res.data.results)
               /*  console.log(res.data.results)   */
            })
    },[]);
    /* ------- Metodo MAP del array donde se encuentra la info name y modelo */
   /*  const NavesList = () => {
        return starShip.map (item, index => (
                <h4 key={index}>{item.name}</h4>
        ));
    }; */
    {/*  <NavesList/> */}

    return (

        <Fragment>
           <Cuerpo>
           {
                starShip.map ((item, index) => (

                    <Bloque key={index}>
                        <Link to={`/starShips/${index} `}>
                            <Lista estilo={"nave"} >{item.name}</Lista>
                            <Lista estilo={'modelo'}>{item.model}</Lista>
                        </Link>
                    </Bloque>   
                ))
            }
           </Cuerpo>
           
        </Fragment>
    )
};

export default StarShipsList;