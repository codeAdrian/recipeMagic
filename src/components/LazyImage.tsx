import React from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export const LazyImage = ({ src, alt, className }: Props) => {
  const [ref, inView] = useInView({ threshold: 0, triggerOnce: true });

  return (
    <div className="media__wrapper" ref={ref}>
      {inView && <img src={src} alt={alt} className={className} />}
    </div>
  );
};
