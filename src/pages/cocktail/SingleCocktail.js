import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import './SingleCocktail.css';
import { fetchData } from '../../utils/utils';
import Loading from '../../components/loading/Loading';
import Error from '../error/Error';

const SingleCocktail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetchData(url).then((data) => {
      if (!data) {
        setError(true);
        return;
      }
      const { drinks } = data;
      setDrinks(drinks[0]);
      setIsLoading(false);
    });
  }, [id]);

  if (error) return <Error />;
  if (isLoading) return <Loading />;

  const {
    strDrink,
    strDrinkThumb,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
  } = drinks;

  let ingredients = [];
  for (let i in drinks) {
    if (i.includes('strIngredient') && drinks[i] !== null)
      ingredients.push(drinks[i]);
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
