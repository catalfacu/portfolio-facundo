import React from 'react'
import styles from "./Landing.module.css";
import { BigHead } from '@bigheads/core'
import { useNavigate } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate();
const handleNavigate = () => {
    navigate("/aboutme");
}

  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <h1>Facundo Nicolas Cataldo</h1>
        <h2>
          Fullstack developer || Javascript || React || Node || Express ||
          PostgreSQL || Sequelize
        </h2>
        <button onClick={handleNavigate}>Comencemos!</button>
      </div>

      <div className={styles.avatar}>
        <BigHead
          accessory="roundGlasses"
          body="chest"
          circleColor="blue"
          clothing="shirt"
          clothingColor="black"
          eyebrows="raised"
          eyes="normal"
          faceMask={false}
          faceMaskColor="red"
          facialHair="none3"
          graphic="react"
          hair="buzz"
          hairColor="black"
          hat="none"
          hatColor="green"
          lashes={false}
          lipColor="purple"
          mouth="grin"
          skinTone="brown"
        />
      </div>

      <div className={styles.frases}>
        <p>
          "No necesitas ser un genio para escribir código,
          <br /> solo necesitas ser apasionado." <br />- Ralph Johnson
        </p>
      </div>
      
    </div>
  );
}

export default Landing