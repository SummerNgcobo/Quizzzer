import React, { useEffect, useState, useRef } from "react";
import styles from "../../styles/scrollword.module.css";

interface ScrollWordProps {
  text?: string; // full text
  color?: string;
  fontSize?: string;
}

export default function ScrollWord({
  text = "Learn UX Faster",
  color = "#513deb",
  fontSize = "8rem",
}: ScrollWordProps) {
  const words = text.split(" "); // ["Learn", "UX", "Faster"]
  const [offset, setOffset] = useState(0);
  const lastScrollY = useRef(0);
  const velocityRef = useRef(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      const scale = window.innerWidth < 768 ? 0.4 : 1;

      // Increase range for stronger movement
      velocityRef.current = Math.max(-80, Math.min(80, delta * 2 * scale));

      setOffset(velocityRef.current);
      lastScrollY.current = currentY;

      cancelAnimationFrame(frameRef.current!);
      const animateBack = () => {
        velocityRef.current *= 0.8;
        if (Math.abs(velocityRef.current) < 0.5) velocityRef.current = 0;
        setOffset(velocityRef.current);
        if (velocityRef.current !== 0)
          frameRef.current = requestAnimationFrame(animateBack);
      };
      frameRef.current = requestAnimationFrame(animateBack);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frameRef.current!);
    };
  }, []);

return (
  <span
    style={{
      fontSize,
      fontWeight: 800,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem",
      marginTop: "5rem",
      marginBottom: "5rem",
    }}
  >
    {words.map((word, i) => {
      if (i === words.length - 1) {
        // Animate the last word
        return (
          <span
            key={i}
            className={styles.scrollWord}
            style={{ transform: `translateY(${offset}px)`, color }}
          >
            {word}
          </span>
        );
      } else {
        // Static words
        return (
          <span key={i} style={{ color: "#CCCCCC" }}>
            {word}
          </span>
        );
      }
    })}
  </span>
);
}