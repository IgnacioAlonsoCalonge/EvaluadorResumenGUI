import React from "react";
import '../App.css';


export default function Segundopanel (props) {

	return (
        
        

        <div className="tercerpaneltexto">

            <h1>¡Recibe los últimos resumenes!</h1>


            <p>Suscribete a las últimas notificaciones para estar
                a la última en contenido y recibir promociones y ofertas
                de nuestro servicio. 
            </p>

            <p>
               Para ello utiliza la dirección de correo electrónico en la que quieras
               recibir dichas notificaciones
            </p>

            <input className="input1" placeholder="Introduce tu correo (ejemplo @gmail)"/>
            
            <button>Suscribirse</button>

        </div>

        
            );
	
}