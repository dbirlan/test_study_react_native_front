import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PokemonStats from '../components/PokemonStats';
import { findPokemonSpeciesByName } from '../services/pokemonService';
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
  const [flavorText, setFlavorText] = useState('');

  useEffect(() => {
    findPokemonSpeciesByName(name).then((response) => {
      var flavorEntries = response.data.flavor_text_entries;
      for(let entry of flavorEntries) {
        console.log(entry);
        if(entry.language.name == "en") {
          setFlavorText(entry.flavor_text);
          break;
        }
      }
    });
  }, []);

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    titleContainer: {
      flexDirection: 'row',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      borderBottomColor: color,
      borderBottomWidth: 2,
      textAlign: 'right',
    },
    subtitle: {
      fontSize: 18,
      color: 'grey',
      textAlign: 'right',
    },
    types: {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    image: {
      width: 200,
      height: 200,
      backgroundColor: color,
      borderRadius: 30,
      marginVertical: 10,
    },
    itemType: {
      margin: 5,
      padding: 5,
      borderWidth: 1,
      borderColor: color,
      borderRadius: 8,
    },
    flavorTextStyle: {
      marginLeft: 20,
      alignSelf: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageURL }} style={styles.image} />
      </View>
      <View style={styles.titleContainer}>
        <View>
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
        </View>
        <Text style={styles.flavorTextStyle}>{flavorText}</Text>
      </View>
      <PokemonStats stats={stats} height={height} weight={weight} />
    </View>
  );
};

export default DetailsScreen;
