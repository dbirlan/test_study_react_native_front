import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import PokemonCard from '../components/PokemonCard';

const FavoritesScreen = ({ navigation }) => {
  var [favoritePokemons, setFavoritePokemons] = useState([]);
  useEffect(() => {
    AsyncStorage.getAllKeys().then((response) => {
      setFavoritePokemons(response);
    });
    navigation = navigation;
  }, []);

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={favoritePokemons}
        keyExtractor={(pokemon) => pokemon}
        renderItem={({ item }) => {
          return <PokemonCard name={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

// FavoritesScreen.navigationOptions = {
//   headerTitle: 'Favorite Pokemons',
//   headerLeft: () => {
//     return null;
//   },
// };

export default FavoritesScreen;
