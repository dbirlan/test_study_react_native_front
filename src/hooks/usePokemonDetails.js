import { useState } from 'react';
import pokeapi from '../api/pokeapi';
import refactorColors from '../utils/refactorColors';

export default () => {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  const findPokemonDetailsByName = async (name) => {
    try {
      const response = await pokeapi.get(`/pokemon/${name}`);
      const responseSpecies = await pokeapi.get(`/pokemon-species/${name}`);
      setPokemonDetails({
        height: response.data.height,
        weight: response.data.weight,
        stats: response.data.stats,
        types: response.data.types,
        imageURL: response.data.sprites.front_default,
        color: refactorColors(responseSpecies.data.color.name),
        pokedexNumber: responseSpecies.data.pokedex_numbers[0].entry_number,
      });
    } catch (error) {}
  };

  return [pokemonDetails, findPokemonDetailsByName];
};
