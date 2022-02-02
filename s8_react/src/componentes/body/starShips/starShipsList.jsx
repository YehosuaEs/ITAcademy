import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import {Bloque, Lista, Cuerpo, BotonNext} from "./styleStarShips"
import {Link} from "react-router-dom";
import { SpinLoad } from "../spinLoad";

 /* function Parent */
const StarShipsList = () => {
/* ------- Set del Array  donde se encuentra el nombre y el modelo y otros ------- */
    const [starShips, setStarShips] = useState([]);
    const [apiPage, setApiPage] = useState (1)
    const [loading, setLoading] = useState(false);
    const [finishList, setFinishList] = useState(false);
/* -------  Obtención de datos desde la API ------- */
    useEffect(() => {
        const NavesList = async () =>  {
            setLoading(true);
            const res = await axios.get(`https://swapi.dev/api/starships/?page=${apiPage}`)
            setLoading(false);
            setStarShips(res.data.results)
            setStarShips((prev)=> [...prev, ...res.data.results]); 

            if (res.data.results.length < 10 ) {
                setFinishList(true)
            }
            setStarShips([...starShips, ...res.data.results])
        }
        NavesList();
    },[apiPage]);
/* --------------  Scroll --------------- */ 
    const Next = () => {
        setApiPage((prevValue) => prevValue  + 1);
        setStarShips(starShips);
    }
/* -------  Div con la lista de naves mapeada ------- */
    const DivShips = () => {
        const ships = starShips.map((item, id) => {
        const index = item.url.replace(/[^0-9]/g,'');
            return(
                <Bloque key={id}>
                    <Link to={`/starShips/${index}`} key={item.name} state={item} style={{textDecoration: 'none'}} >
                        <Lista estilo={"nave"}>{item.name}</Lista>
                        <Lista estilo={'modelo'}>{item.model}</Lista>
                    </Link>
                </Bloque> 
            )
        })

        return(
            [ships]
        )
    };
    
    return (
        <Fragment>
           <Cuerpo > 
               { loading 
               ? <SpinLoad /> 
               : <> 
                    <DivShips/>
                    {
                        ! finishList && (
                        <BotonNext onClick={Next}> Load More Ships </BotonNext>
                        )
                    }
                </>
               }
           </Cuerpo>
        </Fragment>
    )
};

export default StarShipsList;


