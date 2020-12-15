import pokeapi from '../api/pokeapi';

const searchAllPokemon = () => {
  return pokeapi.get('/pokemon', { params: { limit: 50 } });
};

const searchPokemonByType = (type) => {
  return pokeapi.get(`/type/${type}`);
};

const searchPokemonByName = (name) => {
  return pokeapi.get(`/pokemon/${name}`);
};

const formatPokemonTypeData = (data) => {
  const pokemons = data.pokemon;
  const formattedPokemonList = [];
  pokemons.forEach(({ pokemon }) => formattedPokemonList.push(pokemon));
  return formattedPokemonList;
};

export const getPokemons = (term) => {
  if (term == '') {
    return searchAllPokemon().then((response) => {
      return response.data.results;
    });
  }

  return searchPokemonByName(term).then(
    (response) => {
      if (response.data.forms !== []) {
        return response.data.forms;
      }
    },
    // Si aucun pokemon n'est trouvé en cherchant par nom, on cherche par type
    () => {
      return searchPokemonByType(term).then((typeResponse) => {
        return formatPokemonTypeData(typeResponse.data);
      });
    }
  );
};

export const findPokemonByName = (name) => {
  return pokeapi.get(`/pokemon/${name}`);
};

export const findPokemonSpeciesByName = (name) => {
  return pokeapi.get(`/pokemon-species/${name}`);
};
