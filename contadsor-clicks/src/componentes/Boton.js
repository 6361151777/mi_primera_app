import React from "react";
import '../css/Boton.css';

function Boton({texto, esBottonClick, manejarClick}){
    return(
        <button className={esBottonClick ? "boton-click" : "boton-reiniciar"}
        onClick={manejarClick}>
            {texto}
        </button> 
    )
}
export default Boton;
