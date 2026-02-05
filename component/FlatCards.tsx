/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={{ color: 'white' }}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={{ color: 'white' }}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={{ color: 'white' }}>Blue</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
  },
  card: {
    height: 100,
    borderRadius: 5,
    margin: 2,
    padding: 4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'green',
  },
  cardThree: {
    backgroundColor: 'blue',
  },
});

export default FlatCards;
