import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectDamage } from '../Hero/heroSlice';
import './Enemy.scss';

export const Enemy = ({ isHit }) => {
  const [health, setHealth] = useState(100);
  const [enemyLevel, setenemyLevel] = useState(1);
  const heroDamage = useSelector(selectDamage);

  const styles = {
    backgroundImage: `url("/resources/enemies/lvl-${enemyLevel}.svg")`,
  };

  const handleClick = () => {
    if (isHit) {
      setHealth((health) => health - heroDamage);
    }
  };

  return (
    <div className="enemy">
      <div className="enemy__body" style={styles} onClick={handleClick}></div>
      <progress className="enemy__health" max="100" min="0" value={health} />
    </div>
  );
};
