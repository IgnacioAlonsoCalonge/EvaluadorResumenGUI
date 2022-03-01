import Card from '../ComponentsResumen/Card';
import foto from "../Img/websiteimg.jpg"
import foto2 from "../Img/oficina.jpg"
import foto3 from "../Img/imagenhola.png"
import foto4 from "../Img/empresas.jpg"

import Card2 from '../ComponentsResumen/Card2';
import foto5 from "../Img/felicidad.jpg"
import foto6 from "../Img/amigos.jpg"
import foto7 from "../Img/viajar.jpg"
import foto8 from "../Img/plandenegocio.jpg"

function Evaluaciones() {
  return (
    <div className="resum"> 

        <h1>¡Hola, tienes los siguientes resúmenes a evaluar¡</h1>

      <div className='resumenesflex'>
      <Card foto1={foto} title="Organización de equipo" descripcion = "Orientación sobre la gestión de grupos en el ambiente empresarial"/>
      <Card foto1={foto2} title = "Economía II" descripcion="Desarrollamos los temas de macroeconomía y microeconomía"/>
      <Card foto1={foto3} title = "Técnicas básicas" descripcion="Iniciación a las técnicas de estudio para aprobar"/>
      <Card foto1={foto4} title = "Planificación estratégica" descripcion="Cómo definir una estrategia a partir de una idea"/>
      </div>
    </div>
  );
}

export default Evaluaciones;