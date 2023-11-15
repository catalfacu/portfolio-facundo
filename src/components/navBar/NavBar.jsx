import React from 'react';
import styles from './NavBar.module.css';
import {NavLink} from 'react-router-dom';
import {AlignJustify} from 'lucide-react';
import { Download } from 'lucide-react';
import { User } from 'lucide-react';
import { LibraryBig } from 'lucide-react';
import { Wrench } from 'lucide-react';
import { AppWindow } from 'lucide-react';
import { MailPlus } from 'lucide-react';

function navBar() {
  return (
    <div className={styles.container}>
      <button className={styles.button_menu}>
      <AlignJustify size={30} color="#7741c8" strokeWidth={2} />
      </button>
      <nav className={styles.navbar}>
        <NavLink to="/aboutme">
          <User size={30} strokeWidth={2}/>
        </NavLink>
        <NavLink to="/studies">
          <LibraryBig size={30} strokeWidth={2}/>
        </NavLink>
        <NavLink to="/techs">
          <Wrench size={30} strokeWidth={2}/>
        </NavLink>
        <NavLink to="/projects">
          <AppWindow size={30} strokeWidth={2}/>
        </NavLink>
        <NavLink to="/contact">
          <MailPlus size={30} strokeWidth={2}/>
        </NavLink>
        <button className={styles.button_menu}>
          <Download size={35} color='#7741c8' strokeWidth={2}/>
        </button>
      </nav>
    </div>
  )
}

export default navBar