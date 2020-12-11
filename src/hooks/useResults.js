import { useState, useEffect } from 'react';
import pokeapi from '../api/pokeapi';

export default () => {
  const [pokemons, setPokemons] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchAllPokemon = async () => {
    try {
      const response = await pokeapi.get('/pokemon');
      setPokemons(response.data);
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
  };

  const searchByType = async (type) => {
    try {
      const response = await pokeapi.get(`/type/${type}`, {
        params: {
          limit: 20,
        },
      });
      setPokemons(response.data);
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    searchAllPokemon();
  }, []);

  return [searchByType, pokemons, errorMessage];
};
