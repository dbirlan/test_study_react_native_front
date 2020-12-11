import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import PokemonList from '../components/PokemonList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchByType, pokemons, errorMessage] = useResults();

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchByType(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <PokemonList results={pokemons} />
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
