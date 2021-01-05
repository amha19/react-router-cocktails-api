import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/about/About';
import SingleCocktail from './pages/cocktail/SingleCocktail';
import Error from './pages/error/Error';

import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cocktail/:id" component={SingleCocktail} />
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
