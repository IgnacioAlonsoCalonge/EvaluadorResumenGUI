import React from 'react'


const Card2 = (props) => {
  return (
    <div className='cards_2'>
        <div className='cards2'>
        <img src={props.foto1}/>
        </div>
        <h4>{props.title}</h4>
        <p>{props.descripcion}</p>
        <div className='botonescolocados'>
          <button id="boton_resumen">Ver resumen</button>
          <button id="boton_escuchar">Escuchar</button>
        </div>
    </div>
  )
}

export default Card2