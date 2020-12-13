import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Fab = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.fab}>
      <MaterialIcons name="favorite" size={40} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    width: 80,
    height: 80,
    backgroundColor: 'pink',
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Fab;
