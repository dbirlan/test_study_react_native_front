import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Fab from '../components/ui/Fab';
import SearchBar from '../components/SearchBar';
import PokemonList from '../components/PokemonList';
import { getPokemons } from '../services/pokemonService';
import { withNavigation } from 'react-navigation';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [searchPokemons, setSearchPokemons] = useState(false);
  const [pokemonsList, setPokemonsList] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    console.log(getPokemons(term));
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
        <PokemonList pokemons={pokemonsList} />
      ) : null}
      <Fab onPress={() => navigation.navigate('Favorites')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withNavigation(SearchScreen);
