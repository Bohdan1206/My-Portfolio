import { useState } from "react";
import Burger from "./Burger";
import styles from "../styles/Header.module.css";
import logo from "../assets/logo.png";

function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    window.scrollTo({
      top: el.offsetTop - 40,
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.inner}>
            <div className={styles.logo}>
              <span className={styles.logo}>
                <img src={logo} alt="logo" />
              </span>
            </div>

            <nav className={styles.nav}>
              <a onClick={() => scrollTo("numbers")}>Numbers</a>
              <a onClick={() => scrollTo("deals")}>Online Deals</a>
              <a onClick={() => scrollTo("about")}>About the Company</a>
              <a onClick={() => scrollTo("pricing")}>Pricing</a>
              <a onClick={() => scrollTo("faq")}>FAQ</a>
            </nav>

            <div className={styles.headerButton}>
              <button className={styles.loginButton}>Login</button>
              <button className={styles.registerButton}>Sign Up</button>
            </div>

            <button className={styles.burger} onClick={() => setOpen(true)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <Burger
        isOpen={open}
        closeMenu={() => setOpen(false)}
        scrollTo={scrollTo}
      />
    </>
  );
}

export default Header;
