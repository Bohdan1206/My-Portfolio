import styles from "../styles/Footer.module.css";
import logo from "../assets/logo.png";

function Footer() {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    window.scrollTo({
      top: section.offsetTop - 40,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.navBlock}>
            <div className={styles.navTitle}>Quick Navigation</div>

            <ul className={styles.navList}>
              <li onClick={() => scrollTo("numbers")}>Numbers</li>
              <li onClick={() => scrollTo("deals")}>Online Deals</li>
              <li onClick={() => scrollTo("about")}>About Company</li>
              <li onClick={() => scrollTo("pricing")}>Pricing</li>
              <li onClick={() => scrollTo("faq")}>FAQ</li>
            </ul>
            <span></span>
          </div>

          <div className={styles.bottom}>
            <img src={logo} alt="TradeBlade" className={styles.logo} />
            <p className={styles.copy}>
              © 2022 TradeBlade. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
