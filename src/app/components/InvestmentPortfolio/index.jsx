// src/components/InvestmentPortfolio.js
import React from 'react';
import styles from './InvestmentPortfolio.module.css';
import houseImage from '../../assets/images/house.svg'; 
import swiftReturnsImage from '../../assets/images/swift-returns.svg';
import strategicInvestmentsImage from '../../assets/images/strategic-investments.svg';
import legacyInvestmentsImage from '../../assets/images/legacy-investments.svg';


const InvestmentPortfolio = () => {
  return (
    <div className={styles.portfolioSection}>
      <div className={styles.portfolioContent}>
        <div className={styles.portfolioLeft}>
          <img src={houseImage} alt="House" className={styles.houseImage} />
          <div className={styles.propertyDetails}>
            <p className={styles.initialValuation}>$250,000<br/>Initial Valuation</p>
            <div className={styles.appreciationRate}>
              <span>149.2%</span><br/>Appreciation Rate
            </div>
            <p className={styles.currentValuation}>$623,000<br/>Current Valuation</p>
            <p className={styles.monthlyReturns}>$1,500<br/>Monthly Returns</p>
          </div>
        </div>
        <div className={styles.portfolioRight}>
          <p className={styles.financialGoals}>A portfolio to match your financial goals. We are here to guide you all the way!</p>
        </div>
      </div>

      <div className={styles.portfolioOptions}>
        <h2 className={styles.portfolioTitle}>Explore our investment portfolio and start your dream life</h2>
        <div className={styles.portfolioCards}>
          <div className={styles.card}>
            <h3>Swift Returns</h3>
            <img src={swiftReturnsImage} alt="Swift Returns" />
            <p>Perfect for investors with short term goals with high yield in 6 months.</p>
            <button>Explore portfolio</button>
          </div>

          <div className={styles.card}>
            <h3>Strategic Investments</h3>
            <img src={strategicInvestmentsImage} alt="strategic Investments" />
            <p>Medium term investments suitable for moderate returns in less than 3 years.</p>
            <button>Explore portfolio</button>
          </div>

          <div className={styles.card}>
            <h3>Legacy Investments</h3>
            <img src={legacyInvestmentsImage} alt="Legacy Investments" />
            <p>Invest now to build wealth for 5 to 10 years.</p>
            <button>Explore portfolio</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPortfolio;
