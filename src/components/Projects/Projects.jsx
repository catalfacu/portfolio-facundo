import React from 'react'
import styles from './Projects.module.css';
import data from '../Helpers/Data';
import { Link, Github } from 'lucide-react';

function Projects() {
const projects = data[0].projects;

  return (
    <div className={styles.container}>
        <h1>Mis Proyectos!</h1>

      <div className={styles.projects_container}>
        {projects ? (
          projects.map((el, index) => {
            return (
              <article className={styles.project} key={index}>

                <section className={styles.photoAndLinks}>
                  <img src={el.img} alt={el.name} />
                  <div className={styles.links}>
                    <a href={el.link}>
                      <Link size={60} strokeWidth={2} />
                    </a>
                    <a href={el.gitHub}>
                      <Github size={60} strokeWidth={2} />
                    </a>
                  </div>
                </section>

                <h2>{el.name}</h2>

                <section className={styles.usedTechs}>
                  <h3>Tecnologías Utilizadas: </h3>
                  <div className={styles.techsLogos}>
                    {el.techs?.map((tech, index)=>(
                      <img src={tech} alt="icono" key={index}/>
                    ))}
                  </div>
                </section>
              </article>
            );
          })
        ) : (
          <span>No hay projectos!</span>
        )}
      </div>
    </div>
  );
}

export default Projects