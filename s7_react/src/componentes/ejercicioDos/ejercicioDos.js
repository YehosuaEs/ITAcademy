import React from 'react';
import { useState, useEffect } from "react";
import { Bloque, OpcionesBox, Opciones, OpcionLabel , Total, Panell, Input, Boton } from './styledEjercicioDos';
import {useLocalStorage} from '../../hooks/UseLocalStorage';

function EjercicioDosyTres() {
  /* --------Set y Handle WEB ---------------*/
  /* const [checkedWeb, setCheckedWeb] = useState(false); */
  const [checkedWeb, setCheckedWeb] = useLocalStorage('checkWeb',false);
  const handleClickWeb = () =>  {setCheckedWeb (!checkedWeb)};
  /* --------Set y Handle Paginas e Idiomas---------- */
  /* const [datos, setDatos ] = useState({
    paginas:0, 
    idiomas:0
  });
  const handleInputChange = (event) => {
      setDatos({
        ...datos,
        [event.target.name] : event.target.value 
      })
  }; */
  /* ---------Set y Handle Inputs Pag & Idiomas------------ */
  /* const [dataPag, setDataPag]= useState(0)  */ 
  const [dataPag, setDataPag]= useLocalStorage('numPag',0)  
  const handleInputPaginas = (e) => {
    const num = e.target.value;
      if (num === ""){
        setDataPag(0);
      }  else {
        setDataPag(num)
      } 
      const parsedNum = parseInt(num, 10);
      if (isNaN(parsedNum)) {
        return;
      }
      setDataPag(parsedNum);
  };

  /* const [dataIdiomas, setDataIdiomas]= useState(0) */
  const [dataIdiomas, setDataIdiomas]= useLocalStorage('numIdiomas',0)
  const handleInputIdioma = (e) => {
    const num = e.target.value;
      if (num === ""){
      setDataIdiomas(0);
      }  else {
      setDataIdiomas(num)
      } 
    const parsedNum = parseInt(num, 10);

    if (isNaN(parsedNum)) {
      return;
    }
    setDataIdiomas(parsedNum);
  };

  /* -------Handle + y - Paginas  ------------*/
  const handleBotonMasP = () => {  
      setDataPag(dataPag + 1) 
  };
  const handleBotonMenosP = () => {
    dataPag > 0 
      ? setDataPag(dataPag - 1)
      : alert("ATENCION: el numero no puede ser negativo")  
  };

  /* -------Handle + y - Idiomas  ------------*/
  const handleBotonMasI = () => {
      setDataIdiomas(dataIdiomas + 1) 
  };
  const handleBotonMenosI = () => {
    dataIdiomas > 0
      ? setDataIdiomas(dataIdiomas - 1)
      : alert("ATENCION: el numero no puede ser negativo")
  };

  /* -------Set y Handle SEO ------------*/
  /* const [checkedSeo, setCheckedSeo] = useState(false); */
  const [checkedSeo, setCheckedSeo] = useLocalStorage('checkSeo',false);
  const handleClickSeo  = () => {setCheckedSeo(!checkedSeo)};
  /* -----Set y Handle ADS ---------*/
  /* const [checkedAds, setCheckedAds] = useState(false); */
  const [checkedAds, setCheckedAds] = useLocalStorage('checkAds',false);
  const handleClickAds = () => {setCheckedAds(!checkedAds)};

  /* Set y UseEffect Total */
  const[precio, setPrecio] = useState(0);

  const precioPaginas = dataPag * 30;
  const precioIdiomas = dataIdiomas * 30; 
  
  const[savePanell, SetSavePanell]= useState({}); 
 
  useEffect(() => {
    const precioWeb = checkedWeb ? 500 : 0;
    const precioSeo = checkedSeo ? 300 : 0;    
    const precioAds = checkedAds ? 200 : 0;
    precioWeb === 500
        ? setPrecio(precioWeb + precioSeo + precioAds + precioPaginas + precioIdiomas)
        : setPrecio(precioWeb + precioSeo + precioAds)
    
        SetSavePanell({checkedWeb, dataIdiomas, dataPag, checkedSeo, checkedAds, precio}) 

    }, [checkedWeb, checkedSeo, checkedAds, precioPaginas, precioIdiomas, dataIdiomas, dataPag, precio]
  );
  
  /* ----------LocalStorage--------- */
 const setItems = () => {
    localStorage.setItem('InfoPanel',JSON.stringify(savePanell))
  }       
 useEffect(() => {
    setItems()
  }) 

  return (
    <Bloque>
        <h3> ¿Qué quieres comprar? </h3>
        <OpcionesBox>
          <Opciones>
            <Input
                id="web" 
                type="checkbox"  
                name="precio" 
                checked={checkedWeb}
                onChange={handleClickWeb}
            />
            <OpcionLabel htmlFor="web"> Una página web = 500€</OpcionLabel>
                <Panell display={checkedWeb ? 'block' : 'none'}>
                    <OpcionLabel estilo={"extrasWeb"} htmlFor="paginas"> Número de páginas</OpcionLabel>
                    <Boton type="button" onClick={handleBotonMenosP}> - </Boton>
                    <Input 
                        estilo={"extrasWeb"}
                        placeholder='0'
                        id="paginas"
                        type="number" 
                        min="0"
                        name="paginas"
                        value={dataPag}
                        onChange={handleInputPaginas} 
                    />
                     <Boton  type="button" onClick={handleBotonMasP} > + </Boton>
                     <Boton className="fa fa-info" estilo={"favInfo"}></Boton>
                   
                    <OpcionLabel estilo={"extrasWeb"} htmlFor="idiomas"> Número de idiomas</OpcionLabel>
                    <Boton type="button" onClick={handleBotonMenosI}> - </Boton>
                    <Input 
                        estilo={"extrasWeb"}
                        placeholder='0'
                        id="idiomas" 
                        type="number" 
                        min="0"
                        name="idiomas"
                        value={dataIdiomas}
                        onChange={handleInputIdioma}
                    />
                    <Boton type="button" onClick={handleBotonMasI}> + </Boton>
                    <Boton className="fa fa-info" estilo={"favInfo"}></Boton>
                </Panell>
          </Opciones>

          <Opciones>
            <Input 
                id="seo" 
                type="checkbox" 
                name="precio"
                checked={checkedSeo}
                onChange={handleClickSeo}
            />
            <OpcionLabel htmlFor="seo"> Un campaña SEO = 300€</OpcionLabel>
          </Opciones>

          <Opciones>
            <Input 
                id="ads"
                type="checkbox" 
                name="precio"
                checked={checkedAds}
                onChange={handleClickAds}           
            />
            <OpcionLabel htmlFor="ads"> Una campaña de Google Ads = 200€</OpcionLabel>
          </Opciones>
        </OpcionesBox>

          <Total>
            Precio Total = {precio}
          </Total>

    </Bloque>
  )
};

export default EjercicioDosyTres;
