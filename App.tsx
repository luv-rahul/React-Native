import React, { JSX } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import FlatList from './component/FlatCards';
import ElevatedCards from './component/ElevatedCards';
import FancyCard from './component/FancyCard';
import ActionCard from './component/ActionCard';
import ContactList from './component/ContactList';

const App = (): JSX.Element => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <FlatList />
        <ElevatedCards />
        <FancyCard />
        <ActionCard />
        <ContactList />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
});

export default App;
