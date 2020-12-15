import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const PokemonStats = ({ height, weight, stats }) => {
  return (
    <View style={styles.container}>
      <View style={styles.statContainer}>
        <MaterialIcons
          name="height"
          size={24}
          color="black"
          style={styles.iconStyle}
        />
        <Text>{height / 10} m</Text>
      </View>
      <View style={styles.statContainer}>
        <MaterialCommunityIcons
          name="weight"
          size={24}
          color="black"
          style={styles.iconStyle}
        />
        <Text>{weight / 10} kg</Text>
      </View>
      <View style={styles.statContainer}>
        <AntDesign
          name="heart"
          size={24}
          color="green"
          style={styles.iconStyle}
        />
        <Text>{stats[0].base_stat}</Text>
      </View>
      <View style={styles.statContainer}>
        <MaterialCommunityIcons
          name="sword"
          size={24}
          color="black"
          style={styles.iconStyle}
        />
        <Text>{stats[1].base_stat}</Text>
      </View>
      <View style={styles.statContainer}>
        <MaterialCommunityIcons
          name="shield"
          size={24}
          color="black"
          style={styles.iconStyle}
        />
        <Text>{stats[2].base_stat}</Text>
      </View>
      <View style={styles.statContainer}>
        <MaterialCommunityIcons
          name="sword"
          size={24}
          color="orange"
          style={styles.iconStyle}
        />
        <Text>{stats[3].base_stat}</Text>
      </View>
      <View style={styles.statContainer}>
        <MaterialCommunityIcons
          name="shield"
          size={24}
          color="orange"
          style={styles.iconStyle}
        />
        <Text>{stats[4].base_stat}</Text>
      </View>
      <View style={styles.statContainer}>
        <MaterialCommunityIcons
          name="run-fast"
          size={24}
          color="black"
          style={styles.iconStyle}
        />
        <Text>{stats[5].base_stat}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
  },
  statContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  iconStyle: {
    marginRight: 20,
  },
});
export default PokemonStats;
