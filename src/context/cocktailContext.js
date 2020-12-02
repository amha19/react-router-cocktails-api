import React, { useContext, useEffect, useReducer } from 'react';

import { fetchData } from '../utils/utils';
import { reducer } from './reducer';

const AppContext = React.createContext({
  dispatch: () => {},
  isLoading: true,
  drinks: [],
  name: '',
});

const initialState = {
  isLoading: true,
  drinks: [],
  name: '',
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchData().then((drinks) =>
      dispatch({ type: 'SET_DRINKS', payload: drinks })
    );
  }, []);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
