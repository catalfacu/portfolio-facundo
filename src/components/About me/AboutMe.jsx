import React from 'react'
import styles from './AboutMe.module.css'
import data from '../Helpers/Data';

function AboutMe() {

const text = data[0].text;
  return (
    <div className={styles.container}>
      <h1>Sobre Mi!</h1>
      <div className={styles.pictureAndText}>
        <p className={styles.text}>{text}</p>
        <img
          src="https://res.cloudinary.com/dmgkhl6ys/image/upload/v1693009925/portfolio/Dise%C3%B1o_sin_t%C3%ADtulo_xiqvpx.png"
          alt="foto-facu"
        />
      </div>
    </div>
  );
}

export default AboutMe