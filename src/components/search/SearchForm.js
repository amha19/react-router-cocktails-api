import React from 'react';

import { useGlobalContext } from '../../context/cocktailContext';

import './SearchForm.css';

const SearchForm = () => {
  const { name, dispatch } = useGlobalContext();

  return (
    <section className="search">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            placeholder="e.g. adam"
            id="name"
            value={name}
            onChange={(e) =>
              dispatch({ type: 'FILTER_NAME', payload: e.target.value })
            }
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
