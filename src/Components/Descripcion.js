import React from "react";
import '../App.css';

import Title from "./Title";

export default function Descripcion (props) {


	return (

        <div className = "descripcion">

            <Title/>
            <p>¡Bienvenido a Resumenes.es! la página donde podrás disponer de una gran 
                cantidad de resumenes de diferentes
                obras. 
            </p>

            <p>
                Para ello contamos con grandes profesionales encargados de plasmar las ideas principales
                para que no pierdas tu tiempo.
            </p>
            
            <button>
                Resumenes
            </button>
                
            
            
        </div>

    );
	
}