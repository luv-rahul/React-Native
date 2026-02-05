import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Taj Mahal</Text>
          <Text style={styles.cardLabel}>Agra, India - 250 Km away</Text>
          <Text style={styles.cardDescription}>
            The Taj Mahal is an ivory-white marble mausoleum on the right bank
            of the river Yamuna in Agra, Uttar Pradesh, India.
          </Text>
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
  card: {
    padding: 5,
    margin: 5,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: 'black',
  },
  cardImage: {
    height: 200,
    borderRadius: 5,
  },
  cardBody: {
    paddingHorizontal: 5,
    marginVertical: 2,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardLabel: {
    fontSize: 16,
    color: 'green',
  },
  cardDescription: {
    color: 'gray',
    textAlign: 'justify',
  },
});

export default FancyCard;
