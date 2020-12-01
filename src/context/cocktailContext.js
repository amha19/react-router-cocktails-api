import React, { useContext, useReducer } from 'react';

const AppContext = React.createContext();

const initialState = {
  isLoading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'value':
      return state;
    default:
      throw new Error('No action type found!');
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
