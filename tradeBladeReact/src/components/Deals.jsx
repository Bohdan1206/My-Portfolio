import { useRef, useEffect } from "react";
import styles from "../styles/Deals.module.css";
import dealsCard from "../assets/DealsCard.png";
import dealsCardLogo from "../assets/DealsCardLogo.png";

function Deals() {
  const items = [
    {
      pair: "NEAR/USDT",
      type: "SPOT · 1 min ago",
      profit: "+58.6206%",
      target: "Target 4",
      date: "Entry date 06.10.2022",
    },
    {
      pair: "BTC/USDT",
      type: "SPOT · 3 min ago",
      profit: "+32.2400%",
      target: "Target 1",
      date: "Entry date 10.09.2022",
    },
    {
      pair: "ETH/USDT",
      type: "SPOT · 5 min ago",
      profit: "+14.1200%",
      target: "Target 2",
      date: "Entry date 01.11.2022",
    },
    {
      pair: "NEAR/USDT",
      type: "SPOT · 8 min ago",
      profit: "+22.4500%",
      target: "Target 3",
      date: "Entry date 03.10.2022",
    },
    {
      pair: "AVAX/USDT",
      type: "SPOT · 12 min ago",
      profit: "+44.8800%",
      target: "Target 5",
      date: "Entry date 20.10.2022",
    },
  ];

  const sliderRef = useRef(null);
  const thumbRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const thumb = thumbRef.current;

    if (!slider || !thumb) return;

    const updateThumb = () => {
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      if (maxScroll <= 0) return;

      const scrollPercent = slider.scrollLeft / maxScroll;

      const trackWidth = 300;
      const thumbWidth = 60;
      const maxMove = trackWidth - thumbWidth;

      thumb.style.transform = `translateX(${scrollPercent * maxMove}px)`;
    };

    slider.addEventListener("scroll", updateThumb);
    updateThumb();

    let isDragging = false;
    let startX = 0;
    let startLeft = 0;

    const handleThumbDown = (e) => {
      isDragging = true;
      startX = e.clientX;
      startLeft = thumb.offsetLeft;
      thumb.classList.add(styles.activeDrag);
    };

    const handleThumbMove = (e) => {
      if (!isDragging) return;

      const dx = e.clientX - startX;

      const trackWidth = 300;
      const thumbWidth = 60;
      const maxMove = trackWidth - thumbWidth;

      let newLeft = startLeft + dx;
      newLeft = Math.max(0, Math.min(maxMove, newLeft));

      thumb.style.transform = `translateX(${newLeft}px)`;

      const scrollPercent = newLeft / maxMove;
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      slider.scrollLeft = scrollPercent * maxScroll;
    };

    const handleThumbUp = () => {
      isDragging = false;
      thumb.classList.remove(styles.activeDrag);
    };

    thumb.addEventListener("mousedown", handleThumbDown);
    window.addEventListener("mousemove", handleThumbMove);
    window.addEventListener("mouseup", handleThumbUp);

    return () => {
      slider.removeEventListener("scroll", updateThumb);
      thumb.removeEventListener("mousedown", handleThumbDown);
      window.removeEventListener("mousemove", handleThumbMove);
      window.removeEventListener("mouseup", handleThumbUp);
    };
  }, []);

  return (
    <section id="deals" className={styles.dealsSection}>
      <div className="container">
        <h2 className={styles.title}>Past Deals</h2>
        <p className={styles.online}>
          <span></span>Online
        </p>

        <div className={styles.slider} ref={sliderRef}>
          {items.map((el, i) => (
            <div className={styles.card} key={i}>
              <img className={styles.logo} src={dealsCard} alt="Card" />
              <img className={styles.logo} src={dealsCardLogo} alt="Card" />

              <div className={styles.pair}>{el.pair}</div>
              <div className={styles.type}>{el.type}</div>

              <div className={styles.label}>Profit</div>
              <div className={styles.value}>{el.profit}</div>

              <div className={styles.footerLeft}>{el.target}</div>
              <div className={styles.footerRight}>{el.date}</div>
            </div>
          ))}
        </div>

        <div className={styles.track}>
          <div className={styles.thumb} ref={thumbRef}></div>
        </div>
      </div>
    </section>
  );
}

export default Deals;
