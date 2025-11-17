import styles from "../styles/Promo.module.css";

function Promo() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        Try now and get
        <br />5 days of free access
      </h2>

      <form className={styles.form}>
        <input
          type="email"
          placeholder="YOUR E-MAIL"
          className={styles.input}
        />
        <button className={styles.button}>TRY NOW</button>
      </form>
    </div>
  );
}

export default Promo;
