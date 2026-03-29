import { useEffect, useRef } from "react";
import "./MachmaHero.css";
import heroImage from "../assets/machma-expo-2026-main.jpeg";

export default function MachmaHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add("hero--visible");
    }
  }, []);

  return (
    <section className="machma-hero" ref={heroRef}>
      <img
        src={heroImage}
        alt="MachmaHero banner"
        className="hero-img"
      />
    </section>
  );
}