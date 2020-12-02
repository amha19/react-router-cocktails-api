import React from 'react';

import './CocktailList.css';
import { useGlobalContext } from '../../context/cocktailContext';
import Loading from '../../components/loading/Loading';
import Cocktail from './singleCockail/Cocktail';

const CocktailList = () => {
  const { isLoading, drinks, name } = useGlobalContext();

  if (isLoading) return <Loading />;

  const filteredDrinks = [...drinks].filter((drink) => {
    return drink.strDrink.toLowerCase().indexOf(name.toLowerCase()) !== -1;
  });

  return (
    <section className="section">
      <header className="section-title">Cocktails</header>
      {filteredDrinks.length > 0 ? (
        <main className="cocktails-center">
          {filteredDrinks.map((drink, index) => {
            return <Cocktail key={index} {...drink} />;
          })}
        </main>
      ) : (
        <p className="section-title empty">no cocktail matches your search</p>
      )}
    </section>
  );
};

export default CocktailList;
