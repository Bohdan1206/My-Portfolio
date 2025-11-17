import Promo from "./Promo";
import styles from "../styles/PromoSection.module.css";

function PromoSection() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <Promo />
      </div>
    </section>
  );
}

export default PromoSection;
