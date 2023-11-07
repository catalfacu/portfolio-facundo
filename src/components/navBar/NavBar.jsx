import React from 'react';
import styles from './NavBar.module.css';
import {NavLink} from 'react-router-dom'; 



function navBar() {
  return (
    <div className={styles.container}>
      <button>Menu</button>
      <nav className={styles.navbar}>
        <NavLink>Sobre Mi</NavLink>
        <NavLink>Estudios</NavLink>
        <NavLink>Tecnologías</NavLink>
        <NavLink>Contacto</NavLink>
        <NavLink>Descarga mi CV</NavLink>
      </nav>
    </div>
  )
}

export default navBar