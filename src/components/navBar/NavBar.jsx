import React from 'react';
import styles from './NavBar.module.css';
import {NavLink} from 'react-router-dom'; 

function navBar() {
  return (
    <div className={styles.container}>
      <button>Menu</button>
      <nav className={styles.navbar}>
        <NavLink to="/aboutme">Sobre mi</NavLink>
        <NavLink to="/studies">Estudios</NavLink>
        <NavLink to="/techs">Tecnologías</NavLink>
        <NavLink to="/projects">Proyectos</NavLink>
        <NavLink to="/contact">Contacto</NavLink>
        <button>Descarga mi CV</button>
      </nav>
    </div>
  )
}

export default navBar