import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import PokemonCard from '../components/PokemonCard';
import AsyncStorage from '@react-native-community/async-storage';

const FavoritesScreen = () => {
  var [favoritePokemons, setFavoritePokemons] = useState([]);

  useEffect(() => {
    AsyncStorage.getAllKeys().then((response) => {
      console.log(response);
      setFavoritePokemons(response);
    });
  }, []);

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={favoritePokemons}
        keyExtractor={(pokemon) => pokemon}
        renderItem={({ item }) => {
          return <PokemonCard name={item.substring(3)} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default FavoritesScreen;
