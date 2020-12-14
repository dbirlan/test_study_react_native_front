import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { MaterialIcons } from '@expo/vector-icons';

const FavPokemonIcon = ({ name }) => {
  const [storedValue, setStoredValue] = useState(false);

  const toggleFavorite = async () => {
    if (!storedValue) {
      try {
        setStoredValue(true);
        await AsyncStorage.setItem('FAV' + name, JSON.stringify(true));
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        setStoredValue(false);
        await AsyncStorage.removeItem('FAV' + name);
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    AsyncStorage.getItem(name).then((response) => {
      if (JSON.parse(response)) {
        setStoredValue(response);
        toggleFavorite();
      }
    });
  }, []);

  return (
    <TouchableOpacity
      onPress={() => {
        toggleFavorite();
      }}
    >
      {storedValue ? (
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
