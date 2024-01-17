import { useState } from 'react';
import styles from "./Landing.module.css";
import Avatar from '../Helpers/Avatar';

function Landing() {

  const [clicked, setClicked] = useState(false);

  const handleDownload = () => {
    if (!clicked) {
      const downloadLink = document.createElement('a');
      downloadLink.href = '/Facundo-Cataldo-CV.pdf';
      downloadLink.download = 'Facundo-Cataldo-CV.pdf';

      // Añado el enlace al documento
      document.body.appendChild(downloadLink);

      // Simulo un clic en download Link
      downloadLink.click();

      // Marcar que se ha hecho clic
      setClicked(true);

      // Elimino el enlace del documento después de un breve período (por ejemplo, 100 ms)
      setTimeout(() => {
        document.body.removeChild(downloadLink);
      }, 100);

      setClicked(false);
    }
  };


  return (
    <main className={styles.container}>
      <section className={styles.containerTexts}>
        <span className={styles.textsAndAvatar}>
          <div className={styles.avatar}>
            <Avatar />
          </div>
          <h1>Facundo Nicolas Cataldo</h1>
        </span>

        <h2>
          Fullstack developer <hr />| Javascript || React || Node || Express ||
          PostgreSQL || Sequelize |
        </h2>
      </section>

      <section className={styles.buttonDownload}>
        <button id="downloadButton" onClick={handleDownload}>
          Descarga mi CV!
        </button>
      </section>
      <p>Scrollea para saber mas!😉👍🏽</p>
    </main>
  );

  }
export default Landing