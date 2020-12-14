import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PokemonStats from '../components/PokemonStats';
import { capitalize } from 'lodash';

const DetailsScreen = ({ navigation }) => {
  const name = navigation.getParam('name');
  const height = navigation.getParam('height');
  const weight = navigation.getParam('weight');
  const stats = navigation.getParam('stats');
  const types = navigation.getParam('types');
  const imageURL = navigation.getParam('imageURL');
  const pokedexNumber = navigation.getParam('pokedexNumber');
  const color = navigation.getParam('color');

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    imageContainer: {
      flexDirection: 'row',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      borderBottomColor: color,
      borderBottomWidth: 2,
    },
    subtitle: {
      fontSize: 18,
      color: 'grey',
    },
    types: {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    itemType: {
      margin: 5,
      padding: 5,
      borderWidth: 1,
      borderColor: color,
      borderRadius: 8,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageURL }} style={{ width: 200, height: 200 }} />
      </View>
      <Text style={styles.title}>{capitalize(name)}</Text>
      <Text style={styles.subtitle}>#{pokedexNumber}</Text>
      <View style={styles.types}>
        {types.map((item) => {
          return (
            <Text style={styles.itemType} key={item.type.name}>
              {capitalize(item.type.name)}
            </Text>
          );
        })}
      </View>
      <PokemonStats stats={stats} height={height} weight={weight} />
    </View>
  );
};

export default DetailsScreen;
