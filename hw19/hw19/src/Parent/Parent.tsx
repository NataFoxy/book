import React from 'react';
import FlowerCard from '../FlowerCard/FlowerCard';
import style from './Parent.module.css';

export default function Parent(): JSX.Element {
  const flower = {
    color: 'white',
    title: 'Lily of the valley',
    family: 'asparagus',
    price: 4,
  };

  const flower1 = {
    color: 'red',
    title: 'Rose',
    family: 'rosa',
    price: 8,
  };

  const flower2 = {
    color: 'lavender',
    title: 'Lily',
    family: 'liliaceae',
    price: 12,
  };
  return (
    <div className={style.container}>
      <FlowerCard flower={flower} />
      <FlowerCard flower={flower1} />
      <FlowerCard flower={flower2} />
    </div>
  );
}

