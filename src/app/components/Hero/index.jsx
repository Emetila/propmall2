import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Secure your future with smart real estate investment choices</h1>
        <p className={styles.heroSubtitle}>We help you identify and explore growth potentials so you can make your first million from smart investments.</p>
        <button className={styles.heroButton}>Get Started</button>
      </div>
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>105</h2>
          <p className={styles.statLabel}>Property Investments</p>
        </div>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>265+</h2>
          <p className={styles.statLabel}>Investment Portfolios</p>
        </div>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>16</h2>
          <p className={styles.statLabel}>States Covered</p>
        </div>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>2038+</h2>
          <p className={styles.statLabel}>Growing Investors</p>
        </div>
      </div>
    </div>
 


)}

export default Hero;