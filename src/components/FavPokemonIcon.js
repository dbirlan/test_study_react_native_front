import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { MaterialIcons } from '@expo/vector-icons';

const FavPokemonIcon = ({ name }) => {
  const [favoriteValue, setFavoriteValue] = useState(false);

  const toggleFavorite = async () => {
    if (!favoriteValue) {
      try {
        setFavoriteValue(true);
        await AsyncStorage.setItem(name, JSON.stringify(true));
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        setFavoriteValue(false);
        await AsyncStorage.removeItem(name);
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    AsyncStorage.getItem(name).then((response) => {
      if (JSON.parse(response)) {
        setFavoriteValue(response);
      }
    });
  }, []);

  return (
    <TouchableOpacity
      onPress={() => {
        toggleFavorite();
      }}
    >
      {favoriteValue ? (
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
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 20,
  },
});
export default FavPokemonIcon;
