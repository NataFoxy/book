import React from 'react';
import style from './FlowerCard.module.css';

interface Flower {
  color: string;
  title: string;
  family: string;
  price: number;
}

interface Props {
  flower: Flower;
}

export default function FlowerCard({ flower }: Props): JSX.Element {
  const { color, title, family, price } = flower;

  return (
    <div className={style.card}>
      <h2 className={style.header}>{title}</h2>
      <div style={{ backgroundColor: color }}>{color}</div>
      <div>family of: {family}</div>
      <div>Price: {price} Euro</div>
    </div>
  );
}

