import React from 'react'
import styles from './AboutMe.module.css'
import data from '../Helpers/Data';

function AboutMe() {
  return (
    <div className={styles.container}>
      <h1>About Me</h1>
      {
        data
        ? data.map((el,index)=>{
          return(
            <div className={styles.text} key={index}>
              <span>
                {el.text}
              </span>
            </div>
          )
        })
        : <span>No hay texto</span>
      }
    <div className={styles.picture}>
      <img src="https://res.cloudinary.com/dmgkhl6ys/image/upload/v1693009925/portfolio/Dise%C3%B1o_sin_t%C3%ADtulo_xiqvpx.png" alt="foto-facu" />
    </div>
      
    </div>
  )
}

export default AboutMe