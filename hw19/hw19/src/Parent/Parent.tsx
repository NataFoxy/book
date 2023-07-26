import React from 'react';
import FlowerCard from '../FlowerCard/FlowerCard';

export default function Parent(): JSX.Element {
  const flower = {
    color: 'white',
    title: 'Lily of the valley',
    family: 'asparagus',
    price: 4,
  };
  return (
    <div>
      <FlowerCard flower={flower} />
    </div>
  );
}

