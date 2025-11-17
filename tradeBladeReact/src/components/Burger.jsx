import styles from "../styles/Burger.module.css";

function Burger({ isOpen, closeMenu, scrollTo }) {
  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
      <button className={styles.close} onClick={closeMenu}>
        ✕
      </button>

      <ul className={styles.links}>
        <li onClick={() => scrollTo("numbers")}>Numbers</li>
        <li onClick={() => scrollTo("deals")}>Online Deals</li>
        <li onClick={() => scrollTo("about")}>About the Company</li>
        <li onClick={() => scrollTo("pricing")}>Pricing</li>
        <li onClick={() => scrollTo("faq")}>FAQ</li>
      </ul>

      <div className={styles.buttons}>
        <button className={styles.primary}>Sign Up</button>
        <button className={styles.secondary}>Login</button>
      </div>
    </div>
  );
}

export default Burger;
