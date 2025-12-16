import React, { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
  startOnVisible?: boolean;
}

const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = "",
  startOnVisible = true,
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!startOnVisible) {
      animateCount();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated, startOnVisible]);

  const animateCount = () => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = end * easeOutQuart;

      setCount(currentCount);

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  };

  const formatNumber = (num: number) => {
    return num.toFixed(decimals);
  };

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
};

export default CountUp;
