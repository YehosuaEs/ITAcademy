import react, {Fragment, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function Nave ()  {

   //console.log(useParams());  
    const {index} = useParams();
    /* console.log(index);  */

    const [nave, setNave] = useState([]);

    useEffect (() => {
         axios.get(`https://swapi.dev/api/starships/`)
        .then(res => {
            setNave(res.data.results[index].manufacturer)
           console.log(res.data.results[index].manufacturer)  
        })
    },[]);
 
    return(
        <Fragment>
            <div>
                {nave}
            </div>

        </Fragment>
        
        
    )
};

export default Nave;