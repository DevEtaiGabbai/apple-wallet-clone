'use client'
import { useEffect } from "react";

const useIntersectionObserver = (setBgColor, sections) => {
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = sections.find(section => section.id === entry.target.id);
          if (section) {
            setBgColor(section.bgColor);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    });

    sections.forEach(section => {
      const target = document.getElementById(section.id);
      if (target) {
        observer.observe(target);
      }
    });

    return () => {
      sections.forEach(section => {
        const target = document.getElementById(section.id);
        if (target) {
          observer.unobserve(target);
        }
      });
    };
  }, [setBgColor, sections]);
};

export default useIntersectionObserver;
