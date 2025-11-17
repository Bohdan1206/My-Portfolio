import Promo from "./Promo";
import styles from "../styles/About.module.css";
import PromoSection from "./PromoSection";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.text}>
            <h1 className={styles.title}>ABOUT THE COMPANY</h1>
            <p className={styles.text}>
              We are an experienced team for whom trading is a profession.
              TradeBlade is an authorized official broker of the Binance
              exchange. <br /> <br /> It provides users with many advantages,
              such as higher API synchronization speed and the ability to create
              a Binance account through the TradeBlade platform in just one
              click.
            </p>
          </div>

          <div className={styles.promoDesktop}>
            <Promo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
