import { useState } from 'react';
import pokeapi from '../api/pokeapi';

export default () => {
  const [pokemonSpecies, setPokemonSpecies] = useState([]);

  const findSpeciesByName = async (name) => {
    try {
      const response = await pokeapi.get(`/pokemon-species/${name}`);
      setPokemonSpecies(response.data.color);
    } catch (error) {
      console.log('Erreur :' + error);
    }
  };

  return [pokemonSpecies, findSpeciesByName];
};
