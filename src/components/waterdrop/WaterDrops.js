import React from 'react';
import styles from "./WaterDrops.module.css";

const WaterDrops = () => {
  return (
    <div className={styles['water-drops']}>
      {[...Array(50)].map((_, index) => (
        <div key={index} className={styles.drop} style={{
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 3 + 2}s`,
          animationDelay: `${Math.random() * 2}s`
        }}></div>
      ))}
    </div>
  );
};

export default WaterDrops;