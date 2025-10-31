import { useEffect, useState } from "react";
import "./HeroSlide.css";

const slides = [
  {
    title: "Where Style Meets Innovation",
    desc: "Discover premium products crafted for modern living",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    title: "Experience Shopping Redefined",
    desc: "Curated luxury essentials for every day",
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
  },
  {
    title: "Future Ready. You Ready?",
    desc: "Elevate your lifestyle with next-gen essentials",
    img: "https://images.unsplash.com/photo-1512446816042-444d6412678a"
  }
];

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setI(prev => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-wrap">
      {slides.map((s, idx) => (
        <div className={`hero-slide ${idx === i ? "active" : ""}`} key={idx}>
          <img src={s.img} alt={s.title} />

          <div className="hero-content">
            <h1>{s.title}</h1>
            <p>{s.desc}</p>
            <button className="hero-btn">Explore Collection</button>
          </div>
        </div>
      ))}

      <div className="hero-dots">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`dot ${idx === i ? "active" : ""}`}
            onClick={() => setI(idx)}
          />
        ))}
      </div>
    </section>
  );
}
