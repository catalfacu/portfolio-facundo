import React, {useRef} from 'react';
import {useForm} from 'react-hook-form';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';
import data from '../Helpers/Data';
const SERVICE_ID = import.meta.env.VITE_REACT_APP_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;


function Contact() {
const socialMedia = data[0].socialMedia;
const { register,handleSubmit,formState: {errors} ,watch } = useForm();
const form = useRef();

const onSubmit = handleSubmit((data,e)=> {
  console.log(data);
  e.preventDefault();
  emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,form.current,PUBLIC_KEY)
  .then((result)=>{
    console.log(result.text);
  }, (error)=> {
    console.log(error.text);
  });
});


  return (
    <div className={styles.container}>
      <h1>Comunicate Conmigo!</h1>

      <main className={styles.contact_container}>
        <div className={styles.form_container}>
          <form className={styles.form} onSubmit={onSubmit} ref={form}>
            <section className={styles.field}>
              <label htmlFor="name">Nombre</label>
              <input
              name="user_name" 
              type="text"
              { ...register("user_name", {
                required: {
                  value: true,
                  message: "Su nombre es requerido"
                },
                minLength: {
                  value: 2,
                  message: "El nombre debe tener mas de 2 caracteres"
                }
              })}
              />

              {
                errors.user_name && <span>{errors.user_name.message}</span>
              }

            </section>

            <section className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
              name="email" 
              type="text"
              { ...register("email", {
                required:{
                  value: true,
                  message: "Su email es requerido"
                },
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9·-]+\.[a-z]{2,4}$/,
                  message: "Email no valido"
                }
              })}
              />
              {
                errors.email && <span>{errors.email.message}</span>
              }
            </section>

            <section className={styles.field}>
              <label htmlFor="message">Mensaje</label>
              <textarea name="message" id="message" cols="40" rows="10"
              { ...register("message", {
                required: {
                  value: true,
                  message: "Un mensaje es necesario"
                },
                minLength: {
                  value: 10,
                  message: "El mensaje debe tener minimo 10 caracteres"
                }
              })}
              />
              {
                errors.message && <span>{errors.message.message}</span>
              }
            </section>

            <button>Enviar</button>
          </form>
        </div>

        <div className={styles.other_forms}>
          <h2>Mis Redes Sociales</h2>
          <div className={styles.social_container}>
            {socialMedia ? (
              socialMedia.map((el, index) => {
                return (
                  <article key={index} className={styles.social}>
                    <a href={el.link} target='blank'>
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
            <h5>Agenda Una Reunion!</h5>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact