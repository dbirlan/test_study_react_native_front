import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import PokemonDetails from './PokemonDetails';

const PokemonList = ({ results, navigation }) => {
  if (typeof results.pokemon == 'undefined') {
    var pokemonlist = (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={results.results}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
              <PokemonDetails result={item} />
            </TouchableOpacity>
          );
        }}
      />
    );
  } else {
    var { pokemon } = results;
    var pokemonlist = (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={pokemon}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <PokemonDetails result={item.pokemon} />
            </TouchableOpacity>
          );
        }}
      />
    );
  }

  return <View>{pokemonlist}</View>;
};

const styles = StyleSheet.create({});

export default withNavigation(PokemonList);
