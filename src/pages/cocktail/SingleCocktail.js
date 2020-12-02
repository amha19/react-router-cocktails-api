import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import './SingleCocktail.css';
import { useGlobalContext } from '../../context/cocktailContext';
import { fetchData } from '../../utils/utils';
import Loading from '../../components/loading/Loading';
import Error from '../error/Error';

const SingleCocktail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { drinks, dispatch } = useGlobalContext();

  useEffect(() => {
    fetchData().then((data) => {
      dispatch({ type: 'SET_DRINKS', payload: data });
      setIsLoading(false);
    });
  }, [dispatch]);

  if (isLoading) return <Loading />;

  const drink = drinks.find((d) => d.idDrink === id);
  if (!drink) return <Error />;

  const {
    strDrink,
    strDrinkThumb,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
  } = drink;

  let ingredients = [];
  for (let i in drink) {
    if (i.includes('strIngredient') && drink[i] !== null)
      ingredients.push(drink[i]);
  }

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{strDrink}</h2>
      <div className="drink">
        <img src={strDrinkThumb} alt={strDrink}></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span> {strDrink}
          </p>
          <p>
            <span className="drink-data">category :</span> {strCategory}
          </p>
          <p>
            <span className="drink-data">info :</span> {strAlcoholic}
          </p>
          <p>
            <span className="drink-data">glass :</span> {strGlass}
          </p>
          <p>
            <span className="drink-data">instructons :</span> {strInstructions}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {ingredients.map((ing, index) => {
              return (
                <span key={index} className="ingredient">
                  {index > 0 && ', '}
                  {ing}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
