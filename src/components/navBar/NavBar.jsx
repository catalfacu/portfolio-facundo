import React from 'react';
import styles from './NavBar.module.css';
import { Download } from 'lucide-react';
import { User } from 'lucide-react';
import { LibraryBig } from 'lucide-react';
import { Wrench } from 'lucide-react';
import { AppWindow } from 'lucide-react';
import { MailPlus } from 'lucide-react';
import { Home } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

function navBar() {
  const rutaArchivo = "/Facundo-Cataldo-CV.pdf";
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        
        <ScrollLink 
          to='landingPage'
          smooth={true}
          duration={500}
        >
          <Home size={30} strokeWidth={2} />
        </ScrollLink>

        <ScrollLink
          to='aboutMe'
          smooth={true}
          duration={500}
        >
          <User size={30} strokeWidth={2} />
        </ScrollLink>

        <ScrollLink
          to='studies'
          smooth={true}
          duration={500}
        >
        <LibraryBig size={30} strokeWidth={2} />
        </ScrollLink>

        <ScrollLink
          to='techs'
          smooth={true}
          duration={500}
        >
          <Wrench size={30} strokeWidth={2} />
        </ScrollLink>

        <ScrollLink
          to='projects'
          smooth={true}
          duration={500}
        >
          <AppWindow size={30} strokeWidth={2} />
        </ScrollLink>

        <ScrollLink 
          to='contact'
          smooth={true}
          duration={500}
        >
          <MailPlus size={30} strokeWidth={2} />
        </ScrollLink>
        <a
          className={styles.button_menu}
          title="Descarga mi CV📄"
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