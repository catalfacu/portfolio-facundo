import React from 'react'
import styles from './AboutMe.module.css'

function AboutMe() {

  return (
    <div className={styles.container}>
      <h1>Sobre Mi!</h1>
      <div className={styles.aboutContainer}>
         <article className={styles.texts}>
          <section className={styles.text}>
          <h2>¿Quien soy?</h2>
          <p>Holaa!!👋🏽. Me llamo Facundo Nicolas Cataldo, Soy de la Provincia de Mendoza, Argentina🧉 y tengo 24 años.</p>
          </section>

          <section className={styles.text}>
          <h2>¿Como llegue aqui?</h2>
          <p>Siempre me gustó la tecnología y el mundo tech en general🧑🏽‍💻, ya desde niño siempre quería esta informado de lo último que iba saliendo. Ya de grande por una u otra situacion nunca podía comenzar a estudiar lo que realmente me gusta😢😔. Hasta que un día cansado de los trabajos explotadores y mal remunerados me decidí a apostar todo por un futuro mejor para mi haciendo lo que me gusta, PROGRAMAR!💻💪🏽. </p>
          </section>

          <section className={styles.text}>
          <h2>¿Que hago en mi día a día?</h2>
          <p>Generalmente me tomo una buena parte de mi día desarrollando y aprendiendo nuevas tecnologías🤓 pero me gusta tomarme tiempo para mi y hacer ejercicio🏋🏽, tocar la guitarra🎸 o simplemente jugar videojuegos🎮💛.</p>
          </section>
          <span>Nota: pasa el mouse por cada titulo para saber más!😉.</span>
        </article>
      
        <img
          src="https://res.cloudinary.com/dmgkhl6ys/image/upload/v1693009925/portfolio/Dise%C3%B1o_sin_t%C3%ADtulo_xiqvpx.png"
          alt="foto-facu"
          className={styles.photo}
        />
      </div>
       
    </div>
  );
}

export default AboutMe