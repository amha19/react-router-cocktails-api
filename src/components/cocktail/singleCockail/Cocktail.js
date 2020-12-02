import React from 'react';
import { Link } from 'react-router-dom';

import './Cocktail.css';

const Cocktail = (props) => {
  const { idDrink, strDrinkThumb, strDrink, strGlass, strAlcoholic } = props;

  return (
    <section className="cocktail">
      <main>
        <img src={strDrinkThumb} alt={strDrink} />
      </main>
      <footer className="cocktail-footer">
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>{strAlcoholic}</p>
        <Link to={`/cocktail/${idDrink}`} className="btn btn-primary">
          details
        </Link>
      </footer>
    </section>
  );
};

export default Cocktail;
