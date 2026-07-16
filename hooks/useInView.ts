import { useState, useEffect, useRef } from 'react';

export function useInView(options = { threshold: 0.1, rootMargin: '0px' }) {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        // Once it's in view, we can unobserve if we only want it to trigger once
        if (currentRef) observer.unobserve(currentRef);
      }
    }, options);

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold, options.rootMargin]);

  return { ref, isInView };
}
