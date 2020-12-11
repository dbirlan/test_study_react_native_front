import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import useSpecies from '../hooks/useSpecies';
import useDetails from '../hooks/useDetails';

const PokemonDetails = ({ result }) => {
  const [pokemonSpecies, findSpeciesByName] = useSpecies();
  const [pokemonDetails, findDetailsByName] = useDetails();
  const { name } = result;

  useEffect(() => {
    findDetailsByName(name);
    findSpeciesByName(name);
  }, []);

  var color = pokemonSpecies.name;

  if (!pokemonDetails) {
    return null;
  }

  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 15,
      marginVertical: 8,
      borderRadius: 10,
      backgroundColor: color,
    },
    image: {
      height: 200,
      width: 200,
      marginBottom: 5,
      marginRight: 10,
      alignSelf: 'flex-end',
    },
    name: {
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Image
        source={{
          uri: pokemonDetails.sprites.front_default,
        }}
        style={styles.image}
      />
    </View>
  );
};

export default PokemonDetails;
