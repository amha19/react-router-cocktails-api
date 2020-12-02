export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DRINKS':
      return {
        ...state,
        isLoading: false,
        drinks: action.payload,
      };
    case 'FILTER_NAME':
      return {
        ...state,
        name: action.payload,
      };
    case 'RESET':
      return {
        ...state,
        name: '',
      };
    default:
      throw new Error('No action type found!');
  }
};
