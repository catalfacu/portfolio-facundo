import React, {useRef} from 'react';
import {useForm} from 'react-hook-form';
import toast, {Toaster} from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';
import data from '../Helpers/Data';


function Contact() {
const socialMedia = data[0].socialMedia;
const { register,handleSubmit,formState: {errors},reset } = useForm();
const form = useRef();

const onSubmit = handleSubmit((data,e)=> {
  console.log(data);
  e.preventDefault();
  emailjs.sendForm("service_5u83jdh","template_k4qsxwa",form.current,"aXLbnFlE_pO3SacXk")
  .then((result)=>{
    toast.success(`${result.text}: Mensaje enviado con exito👍🏽`, {
      position: "top-right",
    });
    reset();
  }, (error)=> {
    toast.error(`${error.text}: Algo salio mal😢`,{
      position:'top-right'
    });
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
                placeholder="Ingresa tu nombre..."
                name="user_name"
                type="text"
                {...register("user_name", {
                  required: {
                    value: true,
                    message: "Su nombre es requerido",
                  },
                  minLength: {
                    value: 2,
                    message: "El nombre debe tener mas de 2 caracteres",
                  },
                })}
              />

              {errors.user_name && <span>{errors.user_name.message}</span>}
            </section>

            <section className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                placeholder="Ingresa un email..."
                name="email"
                type="text"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Su email es requerido",
                  },
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9·-]+\.[a-z]{2,4}$/,
                    message: "Email no valido",
                  },
                })}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </section>

            <section className={styles.field}>
              <label htmlFor="message">Mensaje</label>
              <textarea
                placeholder='Deja tu mensaje...'
                name="message"
                id="message"
                cols="40"
                rows="5"
                {...register("message", {
                  required: {
                    value: true,
                    message: "Un mensaje es necesario",
                  },
                  minLength: {
                    value: 10,
                    message: "El mensaje debe tener minimo 10 caracteres",
                  },
                })}
              />
              {errors.message && <span>{errors.message.message}</span>}
            </section>

            <button>Enviar</button>
            <Toaster toastOptions={{success:{
              style:{
                border: "4px solid green",
                padding: "20px"
              }
            },error:{
              style: {
                border: "4px solid red",
                padding: "20px"
              }
            }}}/>
          </form>
        </div>

        <div className={styles.other_forms}>
          <h2>Mis Redes Sociales</h2>
          <div className={styles.social_container}>
            {socialMedia ? (
              socialMedia.map((el, index) => {
                return (
                  <article key={index} className={styles.social}>
                    <a href={el.link} target="blank">
                      <img src={el.img} alt={el.name} />
                    </a>
                  </article>
                );
              })
            ) : (
              <span>Nada aqui!</span>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}

export default Contact