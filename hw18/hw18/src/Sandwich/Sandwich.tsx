import React, { useState } from 'react';

function Sandwich(): JSX.Element {
  const [sandwich, setSandwich] = useState<string>('');

  function handleBread() {
    setSandwich(sandwich + 'Bread ');
  }
  function handleSausage() {
    setSandwich(sandwich + 'Sausage ');
  }
  function handleCheese() {
    setSandwich(sandwich + 'Cheese ');
  }

  function handleChange() {
    setSandwich('');
  }

  return (
    <div>
      <h2>Please choose an ingridients for Your Sandwich:</h2>
      <button
        type="button"
        style={{
          backgroundColor: 'white',
          margin: '1rem',
        }}
        onClick={handleBread}
      >
        <img
          src="https://i.pinimg.com/564x/53/df/54/53df54a4054628fad5009dd3c1601cd2.jpg"
          alt="Bread"
          width={100}
        />
        Bread
      </button>
      <button
        type="button"
        style={{ backgroundColor: 'white', margin: '1rem' }}
        onClick={handleSausage}
      >
        <img
          src="https://img.freepik.com/premium-vector/salami-icon-flat-style-smoked-sliced-sausage_136277-268.jpg?w=2000"
          alt="Sausage"
          width={100}
        />
        Sausage
      </button>
      <button
        type="button"
        style={{ backgroundColor: 'white', margin: '1rem' }}
        onClick={handleCheese}
      >
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/001/269/705/small_2x/cheese-on-white.jpg"
          alt="cheese"
          width={100}
        />
        Cheese
      </button>
      <h2>Sandwich: {sandwich}</h2>
      <button type="button" onClick={handleChange}>
        I've changed my mind
      </button>
    </div>
  );
}

export default Sandwich;

