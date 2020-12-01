import React from 'react';
// import { useGlobalContext } from '../context'

import './SearchForm.css';

const SearchForm = () => {
  return (
    <section className="search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            onChange={() => console.log('find cocktail')}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
