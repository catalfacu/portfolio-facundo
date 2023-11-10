import React from 'react'
import data from '../Helpers/Data'
import styles from './Studies.module.css';

function Studies() {
const studies = data[0].estudios;

  return (
    <div className={styles.container}>
      <h1>Estudios</h1>
      {
        studies
        ? studies.map((el,index)=>{
          return(
            <div key={index} className={styles.cards}>
              <h2>{el.nombreInstitucion}</h2>
              <h3>{el.Titulo}</h3>
              <h4>{el.Duracion}</h4>
              <p>{el.Descripcion}</p>
            </div>
          )
        })
        : <span>NO HAY NADA</span>
      }
    </div>
  )
}

export default Studies