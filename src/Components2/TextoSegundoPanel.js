import React from "react";
import '../App.css';
import  {useEffect,useRef} from 'react';
import lottie from 'lottie-web';


export default function TextoSegundoPanel (props) {



	return (

        <div className="segundopaneltexto"> 

            <h1>¿Quieres formar parte de nuestra familia?</h1>


            <div className="parrafosegundo">

            <p>Puedes formar parte de nuestra familia presentando tus propios
                resumenes que serán evaluados por nuestro equipo.
            </p>
            <p>¡Serás capaz de ganar dinero gracias a tu aporte¡
            </p>

            <p>Si eres una persona que le gusta la lectura y sabe resumir correctamente
                no lo dudes. Contacta con nosotros.
            </p>

            </div>

            <div className="botones">

            <button className= "botoninfo">Más Información</button>

            </div>
            


        </div>

        
        );
	
}