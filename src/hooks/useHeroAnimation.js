import { useEffect } from "react";
import gsap from "gsap";

export default function useHeroAnimation() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".hero-badge", {
      opacity: 0,
      y: 30,
      duration: 0.8,
    })
      .from(".hero-title", {
        opacity: 0,
        y: 60,
        duration: 1,
      })
      .from(".hero-description", {
        opacity: 0,
        y: 40,
        duration: 0.8,
      })
      .from(".hero-buttons", {
        opacity: 0,
        y: 30,
        duration: 0.8,
      })
      .from(".hero-stats", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
      });
  }, []);
}