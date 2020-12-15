import React, { useState, useCallback, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Fab from '../components/ui/Fab';
import SearchBar from '../components/SearchBar';
import PokemonList from '../components/PokemonList';
import { getPokemons } from '../services/pokemonService';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [searchPokemons, setSearchPokemons] = useState(false);
  const [pokemonsList, setPokemonsList] = useState(null);
  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getPokemons(term).then(
      (response) => {
        setPokemonsList(response);
        setErrorMessage(null);
      },
      () => {
        setErrorMessage('Something went wrong');
      }
    );
    setSearchPokemons(false);
  }, [searchPokemons]);

  const selectAndFormatPokemons = (pokemonName) => {
    if (!selectedPokemons.includes(pokemonName)) {
      let addedPokemons = selectedPokemons;
      addedPokemons.push(pokemonName);
      setSelectedPokemons(addedPokemons);
    } else {
      let filteredSelectedPokemons = selectedPokemons.filter((pokemon) => {
        console.log(pokemon);
        return pokemon !== pokemonName;
      });
      setSelectedPokemons(filteredSelectedPokemons);
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => {
          setSearchPokemons(true);
        }}
      />
      <Text>{errorMessage}</Text>
      {pokemonsList && errorMessage === null ? (
        <PokemonList
          pokemons={pokemonsList}
          onCardPress={selectAndFormatPokemons}
        />
      ) : null}
      <Fab
        onPress={() => navigation.navigate('Favorites')}
        rightOffset={20}
        name={'favorite'}
        color={'pink'}
      />
      <Fab
        onPress={() => {
          console.log('io');
          navigation.navigate('Comparison', {
            selectedPokemonNames: selectedPokemons,
          });
        }}
        rightOffset={160}
        name={'compare-arrows'}
        color={'#3f51b5'}
        // disabled={selectedPokemons.length < 2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100,
  },
});

export default SearchScreen;
