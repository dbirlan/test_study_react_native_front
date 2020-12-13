import React, { useState, useEffect } from 'react';
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import usePokemonDetails from '../hooks/usePokemonDetails';
import { capitalize } from 'lodash';

const PokemonCard = ({ pokemon, navigation }) => {
  const [
    pokemonDetails,
    findDetailsByName,
    pokemonSpecies,
    findSpeciesByName,
  ] = usePokemonDetails();
  const [favoritePokemon, setFavoritePokemon] = useState(false);
  const { name } = pokemon;

  useEffect(() => {
    findDetailsByName(name);
    findSpeciesByName(name);
  }, [name]);

  if (!pokemonDetails || !pokemonSpecies) {
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
      borderColor: pokemonSpecies.color.name,
      borderWidth: 1,
    },
    ImageDetailsContainer: {
      flexDirection: 'row',
    },
    image: {
      height: 150,
      width: 150,
      marginRight: 10,
      borderRadius: 8,
      backgroundColor: pokemonSpecies.color.name,
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
    icon: {
      marginRight: 20,
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
            imageFrontURL: pokemonDetails.sprites.front_default,
            pokedexNumber: pokemonSpecies.pokedex_numbers[0].entry_number,
            color: pokemonSpecies.color.name,
          })
        }
      >
        <View style={styles.ImageDetailsContainer}>
          <Image
            source={{
              uri: pokemonDetails.sprites.front_default,
            }}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.Title}>
              {capitalize(name)} #
              {pokemonSpecies.pokedex_numbers[0].entry_number}
            </Text>
            <FlatList
              style={styles.types}
              showsVerticalScrollIndicator={false}
              data={pokemonDetails.types}
              keyExtractor={(item) => item.type.url}
              renderItem={({ item }) => {
                return <Text>{capitalize(item.type.name)}</Text>;
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setFavoritePokemon(!favoritePokemon);
        }}
      >
        {favoritePokemon ? (
          <MaterialIcons
            name="favorite"
            style={styles.icon}
            size={36}
            color="red"
          />
        ) : (
          <MaterialIcons
            name="favorite-border"
            style={styles.icon}
            size={36}
            color="red"
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default withNavigation(PokemonCard);
