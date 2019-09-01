import React, { useLayoutEffect } from 'react';
import anime from 'animejs';

export const About = () => {
  const fadeIn = () => {
    const fadeIn = anime.timeline();
    fadeIn.add({
      targets: '.main',
      opacity: [0, 1],
      duration: 500,
      easing: 'easeInQuad'
    });
  };

  useLayoutEffect(() => {
    fadeIn();
  }, []);

  return <React.Fragment>About page</React.Fragment>;
};
