import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { capitalize } from 'lodash';

const DetailsScreen = ({ navigation }) => {
  const name = navigation.getParam('name');
  const height = navigation.getParam('height');
  const weight = navigation.getParam('weight');
  const stats = navigation.getParam('stats');
  const types = navigation.getParam('types');
  const imageFrontURL = navigation.getParam('imageFrontURL');
  const pokedexNumber = navigation.getParam('pokedexNumber');
  const color = navigation.getParam('color');

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageFrontURL }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <Text>{capitalize(name)}</Text>
      <Text>#{pokedexNumber}</Text>
      <Text>height: {Math.round(height) / 10} m</Text>
      <Text>weight: {Math.round(weight) / 10} kg</Text>
      <Text>stats: {JSON.stringify(stats)}</Text>
      <Text>types: {JSON.stringify(types)}</Text>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
  },
});

export default DetailsScreen;
