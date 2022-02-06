import React, { useEffect, useState } from 'react';
import { Enemy } from '../Enemy/Enemy';
import { Hero } from '../Hero/Hero';
import './Playground.scss';

const Playground = () => {
  const [isHit, setIsHit] = useState(true);

  const handleClick = () => {
    setIsHit(false);
  };

  console.log(isHit);

  return (
    <div onClick={handleClick} className={`playground ${!isHit ? 'playground--hit' : ''}`}>
      <Enemy isHit={isHit} />
      <Hero setIsHit={setIsHit} isHit={isHit} />
    </div>
  );
};

export default Playground;
