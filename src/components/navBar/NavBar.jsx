import React from 'react';
import styles from './NavBar.module.css';
import {NavLink} from 'react-router-dom';
import {AlignJustify} from 'lucide-react';
import { Download } from 'lucide-react';

function navBar() {
  return (
    <div className={styles.container}>
      <button className={styles.button_menu}>
      <AlignJustify size={30} color="#7741c8" strokeWidth={3} />
      </button>
      <nav className={styles.navbar}>
        <NavLink to="/aboutme">Sobre mi</NavLink>
        <NavLink to="/studies">Estudios</NavLink>
        <NavLink to="/techs">Tecnologías</NavLink>
        <NavLink to="/projects">Proyectos</NavLink>
        <NavLink to="/contact">Contacto</NavLink>
        <button className={styles.button_menu}>
          <Download size={35} color='#7741c8' strokeWidth={3}/>
        </button>
      </nav>
    </div>
  )
}

export default navBar