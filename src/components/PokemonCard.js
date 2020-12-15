import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { capitalize } from 'lodash';

import usePokemonDetails from '../hooks/usePokemonDetails';
import FavPokemonIcon from './FavPokemonIcon';

const PokemonCard = ({ name, navigation, onCardPress }) => {
  const [pokemonDetails, findPokemonDetailsByName] = usePokemonDetails();
  const [borderWidth, setBorderWidth] = useState(1);

  useEffect(() => {
    findPokemonDetailsByName(name);
  }, [name]);

  if (!pokemonDetails) {
    return null;
  }

  const styles = {
    container: {
      marginHorizontal: 15,
      marginVertical: 8,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderColor: pokemonDetails.color,
      borderWidth: borderWidth,
    },
    ImageDetailsContainer: {
      flexDirection: 'row',
    },
    image: {
      height: 120,
      width: 120,
      marginRight: 10,
      borderRadius: 5,
      backgroundColor: pokemonDetails.color,
    },
    Title: {
      fontWeight: 'bold',
      fontSize: 16,
      marginTop: 20,
    },
    types: {
      marginLeft: 10,
      marginTop: 5,
    },
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            name,
            height: pokemonDetails.height,
            weight: pokemonDetails.weight,
            stats: pokemonDetails.stats,
            types: pokemonDetails.types,
            imageURL: pokemonDetails.imageURL,
            pokedexNumber: pokemonDetails.pokedexNumber,
            color: pokemonDetails.color,
          })
        }
        onLongPress={() => {
          borderWidth == 1 ? setBorderWidth(5) : setBorderWidth(1);
          onCardPress(name);
        }}
      >
        <View style={styles.ImageDetailsContainer}>
          <Image
            source={{
              uri: pokemonDetails.imageURL,
            }}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.Title}>
              {capitalize(name)} #{pokemonDetails.pokedexNumber}
            </Text>
            <View style={styles.types}>
              {pokemonDetails.types.map((item) => {
                return (
                  <Text key={item.type.name}>{capitalize(item.type.name)}</Text>
                );
              })}
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <FavPokemonIcon name={name} />
    </View>
  );
};

export default withNavigation(PokemonCard);
