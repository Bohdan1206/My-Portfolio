import { useState } from "react";
import styles from "../styles/Pricing.module.css";

function Pricing() {
  const [activeTab, setActiveTab] = useState("spot");
  const [standardMonths, setStandardMonths] = useState(12);
  const [vipMonths, setVipMonths] = useState(12);

  const prices = {
    standard: 30,
    vip: 75,
  };

  const discounts = {
    12: 0.35,
    6: 0.25,
    3: 0.15,
    1: 0,
  };

  const calcPrice = (type, months) => {
    const base = prices[type] * months;
    const discount = discounts[months];
    const final = Math.round(base * (1 - discount));
    return { final, discount: discount * 100 };
  };

  const standard = calcPrice("standard", standardMonths);
  const vip = calcPrice("vip", vipMonths);

  return (
    <section id="pricing" className={styles.pricing}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={styles.title}>PRICING</h2>

          <div className={styles.tabs}>
            <button
              className={activeTab === "spot" ? styles.active : ""}
              onClick={() => setActiveTab("spot")}
            >
              Spot
            </button>
            <button
              className={activeTab === "futures" ? styles.active : ""}
              onClick={() => setActiveTab("futures")}
            >
              Futures
            </button>
          </div>

          <div className={styles.cards}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>STANDART</h3>

              <ul className={styles.list}>
                <li>✓ Manual trading</li>
                <li>✓ Automatic or semi-automatic trade copying</li>
                <li>✓ Personal dashboard with statistics</li>
                <li>✓ Mid-term trades with portfolio-building levels</li>
              </ul>

              <div className={styles.priceRow}>
                <span className={styles.price}>${standard.final}</span>
                <span className={styles.discount}>-{standard.discount}%</span>

                <select
                  className={styles.select}
                  value={standardMonths}
                  onChange={(e) => setStandardMonths(Number(e.target.value))}
                >
                  <option value="12">12 months</option>
                  <option value="6">6 months</option>
                  <option value="3">3 months</option>
                  <option value="1">1 month</option>
                </select>
              </div>

              <button className={styles.button}>
                Try now
                <span>5 days free trial</span>
              </button>
            </div>

            <div className={`${styles.card} ${styles.vip}`}>
              <h3 className={styles.cardTitle}>VIP</h3>

              <ul className={styles.list}>
                <li>✓ Manual trading</li>
                <li>✓ Automatic or semi-automatic trade copying</li>
                <li>✓ Personal dashboard with statistics</li>
                <li>✓ Short-term, mid-term and investment trades</li>
                <li>✓ Access to the VIP chat</li>
                <li>✓ Our proprietary trading course</li>
              </ul>

              <div className={styles.priceRow}>
                <span className={styles.price}>${vip.final}</span>
                <span className={styles.discount}>-{vip.discount}%</span>

                <select
                  className={styles.select}
                  value={vipMonths}
                  onChange={(e) => setVipMonths(Number(e.target.value))}
                >
                  <option value="12">12 months</option>
                  <option value="6">6 months</option>
                  <option value="3">3 months</option>
                  <option value="1">1 month</option>
                </select>
              </div>

              <button className={styles.button}>
                Try now
                <span>5 days free trial</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
