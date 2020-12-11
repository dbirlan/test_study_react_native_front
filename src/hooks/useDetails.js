import { useState } from 'react';
import pokeapi from '../api/pokeapi';

export default () => {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  const findDetailsByName = async (name) => {
    try {
      const response = await pokeapi.get(`/pokemon/${name}`);
      setPokemonDetails(response.data);
    } catch (error) {
      console.log('Erreur :' + error);
    }
  };

  return [pokemonDetails, findDetailsByName];
};
