import styles from "../styles/Numbers.module.css";

function Numbers() {
  return (
    <section id="numbers" className={styles.numbersSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Numbers</h2>
          <p className={styles.sub}>September 2022</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.item}>
            <p className={styles.label}>
              Trading <br /> Profit
            </p>
            <p className={styles.value}>2756%</p>
          </div>

          <div className={styles.item}>
            <p className={styles.label}>Futures & Spot Deals</p>
            <p className={styles.value}>67</p>
          </div>

          <div className={styles.item}>
            <p className={styles.label}>Subscribers’ Profit</p>
            <p className={styles.value}>375000</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Numbers;
