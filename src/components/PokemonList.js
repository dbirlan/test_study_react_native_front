import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons, onCardPress }) => {
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.name}
        renderItem={({ item }) => {
          return <PokemonCard name={item.name} onCardPress={onCardPress} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default PokemonList;
