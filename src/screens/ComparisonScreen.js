import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { findPokemonByName } from '../services/pokemonService';
import PokemonStats from '../components/PokemonStats';

const ComparisonScreen = ({ navigation }) => {
  const [pokemonMap, setPokemonMap] = useState(new Map());
  const pokemonsSelected = navigation.getParam('selectedPokemonNames');

  useEffect(() => {
    for (let pokemon of pokemonsSelected) {
      findPokemonByName(pokemon).then((response) => {
        let pokemonDetails = response.data;
        setPokemonMap(new Map(pokemonMap.set(pokemon, pokemonDetails)));
      });
    }
  }, []);

  const showPokemonMap = () => {
    return [...pokemonMap.keys()].map((pokemonName) => {
      let pokemon = pokemonMap.get(pokemonName);
      return (
        <View key={pokemon.id} style={styles.itemStyle}>
          <Image
            source={{ uri: pokemon.sprites.front_default }}
            style={styles.imageStyle}
          />
          <Text key={pokemonName} style={styles.titleStyle}>
            {pokemonName} #{pokemon.id}
          </Text>
          <PokemonStats
            height={pokemon.height}
            weight={pokemon.weight}
            stats={pokemon.stats}
            key={pokemon.stats}
          />
        </View>
      );
    });
  };

  return (
    <View style={styles.containerStyle}>
      <ScrollView horizontal>{showPokemonMap()}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
  },
  itemStyle: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    alignContent: 'center',
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignSelf: 'center',
  },
  imageStyle: {
    height: 100,
    width: 100,
    alignSelf: 'center',
  },
});

export default ComparisonScreen;
