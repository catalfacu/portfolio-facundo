import React from 'react';
import styles from './Techs.module.css';
import data from '../Helpers/Data';

function Techs() {

const techs = data[0].techs;

  return (
    <div className={styles.container}>
      <h1>My Stack Tecnologico</h1>
      <div className={styles.Techs}>
        {
          techs 
          ? techs.map((el,index)=> {
            return(
              <article key={index} className={styles.tech}>
                <img src={el.img} alt={el.nombre} />
                <h2>{el.nombre}</h2>
              </article>
            )
          })
          : <span>No hay nada aqui</span>
        }
      </div>
    </div>
  )
}

export default Techs