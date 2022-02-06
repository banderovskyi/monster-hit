import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAttackSpeed } from './heroSlice';

export const Hero = ({ isHit, setIsHit }) => {
  const heroSpeed = useSelector(selectAttackSpeed);

  useEffect(() => {
    if (isHit) {
      setTimeout(() => {
        setIsHit(true);
      }, heroSpeed);
    }
  }, [isHit]);

  return <div className="hero"></div>;
};
