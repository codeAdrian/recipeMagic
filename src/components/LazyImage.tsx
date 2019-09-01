import React from 'react';
import { useInView } from 'react-intersection-observer';

export const LazyImage = (props: any) => {
  const [ref, inView] = useInView({ threshold: 0, triggerOnce: true });

  return (
    <div className="media__wrapper" ref={ref}>
      {inView && <img {...props} />}
    </div>
  );
};
