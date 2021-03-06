import React from 'react';
import { Parallax } from 'react-parallax';

import Logo from '../../common/logo/Logo';
import useScrollPosition from '../../common/use-scroll-position/useScrollPosition';
import Birds from './birds/Birds';

const Intro = () => {
  const { y: scrollPositionY } = useScrollPosition();

  return (
    <Parallax
      bgImage={require('../../assets/images/backgrounds/bg-1.jpg')}
      strength={500}
    >
      <div
        id="menuTitleParallax"
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ opacity: Math.max(0, 1 - scrollPositionY / 220) }}
      >
        <Logo className="text-white text-shadow-dark" />
      </div>
      <Birds />
    </Parallax>
  );
};

export default Intro;
