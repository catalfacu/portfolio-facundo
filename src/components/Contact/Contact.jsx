import React from 'react';
import styles from './Contact.module.css';
import data from '../Helpers/Data';

function Contact() {

const socialMedia = data[0].socialMedia;

  return (
    <div className={styles.container}>
      <h1 className>Comunicate Conmigo!</h1>
      <div className={styles.form_container}>
        <form action="submit" className={styles.form}>
          <label htmlFor="name">Nombre</label>
          <input type="text" />
          <label htmlFor="email">Email</label>
          <input type="text" />
          <label htmlFor="message">Mensaje</label>
          <textarea type="text" />
        </form>
      </div>

      <div className={styles.other_forms}>
        <h2>Mis Redes Sociales</h2>
        <div className={styles.social_container}>
          {socialMedia ? (
            socialMedia.map((el, index) => {
              return (
                <article key={index} className={styles.social}>
                  <a href={el.link}>
                    <img src={el.img} alt={el.name} />
                  </a>
                  <h5>{el.name}</h5>
                </article>
              );
            })
          ) : (
            <span>Nada aqui!</span>
          )}
        </div>

        <div className={styles.calendar}>
          <a
            href="https://calendly.com/cataldof21/entrevista-reunion"
            target="blank"
          >
            <img
              src="https://res.cloudinary.com/dmgkhl6ys/image/upload/v1693454072/portfolio/g-calendar_gsupfp.png"
              alt="calendar-logo"
            />
          </a>
          <h2>Agenda Una Reunion!</h2>
        </div>
      </div>
    </div>
  );
}

export default Contact