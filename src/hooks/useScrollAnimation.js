import { useEffect } from 'react';
import { useInView, useAnimation } from 'framer-motion';
import { useRef } from 'react';

const useScrollAnimation = (threshold = 0.2) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  
  return [ref, controls];
};

export default useScrollAnimation;