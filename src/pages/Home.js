import React, { useEffect } from 'react';

import SearchForm from '../components/search/SearchForm';
import CocktailList from '../components/cocktail/CocktailList';
import { useGlobalContext } from '../context/cocktailContext';

const Home = () => {
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    dispatch({ type: 'RESET' });
  }, [dispatch]);

  return (
    <div>
      <SearchForm />
      <CocktailList />
    </div>
  );
};

export default Home;
