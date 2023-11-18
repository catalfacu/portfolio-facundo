import React from 'react';
import styles from './NavBar.module.css';
import {NavLink} from 'react-router-dom';
//import {AlignJustify} from 'lucide-react';
import { Download } from 'lucide-react';
import { User } from 'lucide-react';
import { LibraryBig } from 'lucide-react';
import { Wrench } from 'lucide-react';
import { AppWindow } from 'lucide-react';
import { MailPlus } from 'lucide-react';

function navBar() {
  const rutaArchivo = "/Facundo-Cataldo-CV.pdf";
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <button className={styles.button_menu}>
          {/* <AlignJustify size={30} color="#7741c8" strokeWidth={2} /> */}
        </button>
        <NavLink
          to="/aboutme"
          title="Sobre Mi!🧑🏽‍💻"
          className={({ isActive, isPending }) =>
            isPending ? styles.pending : isActive ? styles.active : ""
          }
        >
          <User size={30} strokeWidth={2} />
        </NavLink>
        <NavLink
          to="/studies"
          title="Estudios👨🏽‍🎓"
          className={({ isActive, isPending }) =>
            isPending ? styles.pending : isActive ? styles.active : ""
          }
        >
          <LibraryBig size={30} strokeWidth={2} />
        </NavLink>
        <NavLink
          to="/techs"
          title="Stack Tecnologico⚙️"
          className={({ isActive, isPending }) =>
            isPending ? styles.pending : isActive ? styles.active : ""
          }
        >
          <Wrench size={30} strokeWidth={2} />
        </NavLink>
        <NavLink
          to="/projects"
          title="Proyectos📚"
          className={({ isActive, isPending }) =>
            isPending ? styles.pending : isActive ? styles.active : ""
          }
        >
          <AppWindow size={30} strokeWidth={2} />
        </NavLink>
        <NavLink
          to="/contact"
          title="Contacto📩"
          className={({ isActive, isPending }) =>
            isPending ? styles.pending : isActive ? styles.active : ""
          }
        >
          <MailPlus size={30} strokeWidth={2} />
        </NavLink>
        <a
          className={styles.button_menu}
          title="Descarga mi CV"
          href={rutaArchivo}
          download="Facundo-Cataldo-CV.pdf"
        >
          <Download size={35} color="#7741c8" strokeWidth={2} />
        </a>
      </nav>
    </div>
  );
}

export default navBar