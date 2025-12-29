import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls the window to the top with a smooth, modern animation whenever the pathname changes.
 * Uses a custom easing function for a subtle, polished scrolling experience.
 *
 * @return {null} Returns null as this component does not render anything.
 */

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use requestAnimationFrame for smooth, controlled scrolling
    const duration = 400; // Shorter duration for subtlety (400ms)
    const start = window.scrollY;
    const startTime = performance.now();

    // Easing function for smooth deceleration (ease-out cubic)
    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    };

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      window.scrollTo(0, start * (1 - easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    // Small delay to ensure DOM is ready
    requestAnimationFrame(() => {
      requestAnimationFrame(animateScroll);
    });
  }, [pathname]);

  return null;
}
