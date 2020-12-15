import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Fab = ({ onPress, name, rightOffset, color, disabled }) => {
  const styles = StyleSheet.create({
    fab: {
      width: 80,
      height: 80,
      backgroundColor: color,
      position: 'absolute',
      bottom: 20,
      right: rightOffset,
      borderRadius: 40,
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return (
    <TouchableOpacity onPress={onPress} style={styles.fab} disabled={disabled}>
      <MaterialIcons name={name} size={40} color="black" />
    </TouchableOpacity>
  );
};

export default Fab;
