import styles from "../styles/Hero.module.css";
import heroImg from "../assets/heroImg.png";

function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.text}>
            <h1>Instantly copy trades from pro traders</h1>
            <p>
              Start automatically copying trades from a successful team of
              professional traders.
            </p>

            <form className={styles.form}>
              <input
                type="email"
                placeholder="Your e-mail"
                className={styles.input}
              />
              <button className={styles.btn}>START</button>
            </form>
            <p>5 days of free access</p>
          </div>

          <div className={styles.imageWrap}>
            <img src={heroImg} alt="heroImg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
