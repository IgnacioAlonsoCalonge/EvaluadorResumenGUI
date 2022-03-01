import Card from './ComponentsResumen/Card';
import './Resumenes.css';
import foto from "./Img/websiteimg.jpg"
import foto2 from "./Img/oficina.jpg"
import foto3 from "./Img/imagenhola.png"
import foto4 from "./Img/empresas.jpg"

import Card2 from './ComponentsResumen/Card2';
import Primerabarra from "./ComponentsResumen/Primerabarra"
import foto5 from "./Img/felicidad.jpg"
import foto6 from "./Img/amigos.jpg"
import foto7 from "./Img/viajar.jpg"
import foto8 from "./Img/plandenegocio.jpg"

function Resumenes() {
  return (
    <div className="resum">
      <Primerabarra/>
      <div className='resumenesflex'>
      <Card foto1={foto} title="Organización de equipo" descripcion = "Orientación sobre la gestión de grupos en el ambiente empresarial"/>
      <Card foto1={foto2} title = "Economía II" descripcion="Desarrollamos los temas de macroeconomía y microeconomía"/>
      <Card foto1={foto3} title = "Técnicas básicas" descripcion="Iniciación a las técnicas de estudio para aprobar"/>
      <Card foto1={foto4} title = "Planificación estratégica" descripcion="Cómo definir una estrategia a partir de una idea"/>
      </div>

      <div className='resumenesflex'>
      <Card2 foto1={foto5} title="Buscando la felicidad" descripcion = "Hablamos de los distintos enfoques que tiene la felicidad y como seguirla"/>
      <Card2 foto1={foto6} title = "El arte de hacer amigos" descripcion="Consejos sobre como establecer relaciones personales sanas"/>
      <Card2 foto1={foto7} title = "Perdiéndo el miedo a viajar" descripcion="Experiencias personales y como perdí el miedo a viajar"/>
      <Card2 foto1={foto8} title = "Plan de negocio" descripcion="Metodología para la realización de un plan de negocio"/>
      </div>

    </div>
  );
}

export default Resumenes;