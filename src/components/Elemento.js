
import React, {Component, useState} from 'react';
import Periodica from './Periodica';
import './Elemento.css';
import Configuracion from './Configuracion';

let numero
function MostrarConfiguracion(params) {
   return( 
   <Configuracion/>
    );
}

//pantalla popup
const Elemento = (mensaje) => {
    
   
    return (
        <>           
        <div className="popup-box"  >
       
       <div className="box" >
           <p><b><h1 className="h1">Propiedades {mensaje.nuneroAtomico}</h1> </b> </p>
           
           <button className= "buttonRegistrar" >Boton</button> <br/><br/>
           <button color="secoundary" variant='contained'  >Presentación</button> <br/><br/>
           
           {/*<b><span className="close-icon" onClick={mensaje.handleClose}>x</span></b>*/}
          
           <iframe src="https://www.youtube.com/embed/2jyxYUQXKBQ"></iframe>
       </div>
   </div>
        </>
    );
}

export default Elemento;