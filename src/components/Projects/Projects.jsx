import React from 'react'
import styles from './Projects.module.css';
import data from '../Helpers/Data';

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
                <div className={styles.name_photo}>
                <h2>{el.name}</h2>
                <img src={el.img} alt={el.name} />
                </div>
                <div className={styles.project_description}>
                  <p>{el.description}</p>
                </div>
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