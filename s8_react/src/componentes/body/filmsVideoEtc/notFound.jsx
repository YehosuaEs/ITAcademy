import { Fragment } from "react";
import {Cuerpo, Welcome } from "../home/styleHome"



export default function NotFound () {


    return (

        <Fragment>
            <Cuerpo>
                <Welcome>
                    <h1>404</h1>
                    <h2> NOT FOUND </h2>
                    <h3>THIS PAGE IS NOT FULLY ARMED AND OPERATIONAL.</h3>
                </Welcome> 
            </Cuerpo>
        </Fragment>


    )

};