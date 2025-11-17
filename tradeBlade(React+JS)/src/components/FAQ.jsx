import { useState } from "react";
import styles from "../styles/FAQ.module.css";

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faq = [
    {
      q: "What is TradeBlade?",
      a: `TradeBlade is a team of experienced traders. The platform is an authorized official broker of Binance and provides users with advantages such as faster API synchronization and the ability to create a Binance account through TradeBlade in one click.`,
    },
    {
      q: "What does TradeBlade offer to investors?",
      a: `TradeBlade provides investors with access to professional automated and semi-automated trading strategies, real-time deal copying, detailed performance analytics, and flexible subscription plans for both short-term and long-term trading goals.`,
    },
    {
      q: "Do I need to transfer my funds to TradeBlade?",
      a: `No. Your funds remain securely stored on your personal Binance account. TradeBlade works through Binance API keys and never asks you to transfer money to the platform.`,
    },
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className="container">
        <h2 className={styles.title}>Frequently Asked Questions</h2>

        <div className={styles.list}>
          {faq.map((item, i) => (
            <div
              key={i}
              className={`${styles.item} ${
                openIndex === i ? styles.active : ""
              }`}
            >
              <button className={styles.question} onClick={() => toggle(i)}>
                {item.q}
                <span
                  className={`${styles.arrow} ${
                    openIndex === i ? styles.arrowOpen : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {openIndex === i && <div className={styles.answer}>{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
