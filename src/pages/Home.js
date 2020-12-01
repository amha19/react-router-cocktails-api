import React from 'react';

import SearchForm from '../components/search/SearchForm';
import CocktailList from '../components/cocktail/CocktailList';

const Home = () => {
  return (
    <div>
      <SearchForm />
      <CocktailList />
    </div>
  );
};

export default Home;
