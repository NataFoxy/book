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
      <div className={style.info}>
        <img
          src="https://live.staticflickr.com/65535/49842111702_ac23230a2d_b.jpg"
          alt="lily of the valley"
          width={300}
        />
      </div>

      <div className={style.info} style={{ backgroundColor: color }}>
        {color}
      </div>
      <div className={style.info}>family of: {family}</div>
      <div className={style.info}>Price: {price} Euro</div>
    </div>
  );
}

