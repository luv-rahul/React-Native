import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>more...</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    paddingHorizontal: 2,
    flexDirection: 'row',
  },
  card: {
    height: 100,
    width: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
  },
  cardElevated: {
    backgroundColor: '#FFA29F',
    // elevation: 20,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'green',
    shadowRadius: 10,
  },
});

export default ElevatedCards;
