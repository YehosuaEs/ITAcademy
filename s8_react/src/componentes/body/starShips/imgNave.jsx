import axios from "axios";
import react, {Fragment, useEffect} from "react";
import { useState } from "react/cjs/react.production.min";
import {Bloque, Lista, Cuerpo, ImgShip} from "./styleStarShips"


function  ImgNave() {
   /* const [imgShip, setImgShip] = useState([]);   */
 

   useEffect(() => {
        axios.get('https://starwars-visualguide.com/assets/img/starships/5.jpg')
        .then(res => {
        })
     }, [])  
/* 
    const imagen = async () => {
        const data = await fetch ('hhttps://swapi.dev/api/starships/')
        const img = await data.json()
        console.log(img.result[0])
        setImgShip(img)

    } */

    /* const imageUrl = "https://starwars-visualguide.com/assets/img/starships/5.jpg";

    const fetchImage = async () => {
        const res = await fetch(imageUrl);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImgShip(imageObjectURL);
      };
    
      useEffect(() => {
        fetchImage();
      }, []);
     */
    
    return (
        <Fragment>

           
            <Cuerpo estilo={"bgNave"}>
            
                <Bloque estilo={"bloqueNave"}>
                <ImgShip src="https://starwars-visualguide.com/assets/img/starships/10.jpg"></ImgShip>
                    <Bloque estilo={"descripcionNave"}>
                        
                        <Lista estilo={"naveName"}></Lista>
                        <Lista >Model: </Lista>
                        <Lista >Manufacturer: </Lista>
                        <Lista >Atmosphering Speed: </Lista>
                        <Lista >Crew: </Lista>
                        <Lista >Passengers: </Lista>
                        <Lista >Cargo Capacity: </Lista>
                        <Lista >Hyperdrive Rating: </Lista>
                        <Lista >Starship Class: </Lista>
                    </Bloque>
                </Bloque>

            </Cuerpo>

        </Fragment>
    )
};

export default ImgNave;


