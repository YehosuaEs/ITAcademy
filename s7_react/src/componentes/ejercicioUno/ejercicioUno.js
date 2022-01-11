import React from 'react';
import { useState, useEffect } from "react";
import { Bloque, OpcionesBox, Opcion, OpcionesPrecio, Total } from './styledEjercicioUno';


function EjercicioUno() {

  const [checkedWeb, setCheckedWeb] = useState(false);
  const handleClickWeb = () =>  {
      setCheckedWeb (!checkedWeb)
  };
  const [checkedSeo, setCheckedSeo] = useState(false);
  const handleClickSeo  = () => {
    setCheckedSeo(!checkedSeo)
  };
  const [checkedAds, setCheckedAds] = useState(false);
  const handleClickAds = () => {
    setCheckedAds(!checkedAds)
  };

  const[precio, setPrecio] = useState(0);
    
  useEffect(() => {
      const precioWeb = checkedWeb ? 500 : 0;
      const precioSeo = checkedSeo ? 300 : 0;    
      const precioAds = checkedAds ? 200 : 0;
      setPrecio(precioWeb + precioSeo + precioAds)
  }, [checkedWeb, checkedSeo, checkedAds]);

  return (

    <Bloque>
        <h3> ¿Qué quieres comprar? </h3>

        <OpcionesBox>

          <Opcion>
            <input 
              type="checkbox" 
              id="web" 
              name="precio" 
              checked={checkedWeb}
              onChange={handleClickWeb}
            />
            <OpcionesPrecio htmlFor="web"> Una página web = 500€</OpcionesPrecio>
          </Opcion>

          <Opcion>
            <input 
              type="checkbox" 
              id="seo" 
              name="precio"
              checked={checkedSeo}
              onChange={handleClickSeo}
            />
            <OpcionesPrecio htmlFor="seo"> Un campaña SEO = 300€</OpcionesPrecio>
          </Opcion>

          <Opcion>
            <input 
              type="checkbox" 
              id="ads" 
              name="precio"
              checked={checkedAds}
              onChange={handleClickAds}           
            />
            <OpcionesPrecio htmlFor="ads"> Una campaña de Google Ads = 200€</OpcionesPrecio>
          </Opcion>

        </OpcionesBox>

          <Total>
            Precio Total = {precio}
          </Total>

      </Bloque>

  )
};

export default EjercicioUno;
