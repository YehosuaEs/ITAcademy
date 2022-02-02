import react, {Fragment, useEffect, useState} from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import {Bloque, Lista, Cuerpo, ImgShip} from "./styleStarShips"


function Nave ()  {
    const location = useLocation();
    const params = useParams();
    const UrlImg = "https://starwars-visualguide.com/assets/img/starships"
    
    return(
        <Fragment>

            <Cuerpo estilo={"bgNave"}>
                <Bloque estilo={"bloqueNave"}>
                    <ImgShip src={`${UrlImg}/${params.index}.jpg`}></ImgShip>
                    <Bloque estilo={"descripcionNave"}>
                        <Lista estilo={"naveName"}>{location.state.name}</Lista>
                        <Lista >Model: {location.state.model}</Lista>
                        <Lista >Manufacturer: {location.state.manufacturer}</Lista>
                        <Lista >Atmosphering Speed: {location.state.max_atmosphering_speed}</Lista>
                        <Lista >Crew: {location.state.crew}</Lista>
                        <Lista >Passengers: {location.state.passengers}</Lista>
                        <Lista >Cargo Capacity: {location.state.cargo_capacity}</Lista>
                        <Lista >Hyperdrive Rating: {location.state.hyperdrive_rating}</Lista>
                        <Lista >Starship Class: {location.state.starship_class}</Lista> 
                    </Bloque>
                </Bloque>
            </Cuerpo>
        </Fragment>
    )
};

export default Nave;

