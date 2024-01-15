import React from 'react'
import styles from "./Landing.module.css";
import Avatar from '../Helpers/Avatar';
import { useNavigate } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate();
const handleNavigate = () => {
    navigate("/aboutme");
}

  return (
    <main className={styles.container}>

      <section className={styles.containerTexts}>

        <span className={styles.textsAndAvatar}>
        <h1>Facundo Nicolas Cataldo</h1>
        <div className={styles.avatar}>
        <Avatar/>
        </div>        
        </span>

        <h2>
          Fullstack developer <hr />| Javascript || React || Node || Express ||
          PostgreSQL || Sequelize |
        </h2>
      </section>

      <section className={styles.buttonDownload}>
        <button onClick={handleNavigate}>Comencemos!</button>
      </section>
      
    </main>
  );
}

export default Landing