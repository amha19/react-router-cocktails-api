const fetchData = async () => {
  const response = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
  );
  const data = await response.json();
  const { drinks } = data;
  return drinks;
};

export { fetchData };
