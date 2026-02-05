import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container}>
        {contacts.map(contact => (
          <View key={contact.uid} style={styles.userCard}>
            <Image
              style={styles.avatar}
              source={{ uri: `${contact.imageUrl}` }}
            />
            <View>
              <Text style={styles.userName}>{contact.name}</Text>
              <Text>{contact.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 5,
  },
  container: {
    paddingHorizontal: 5,
  },
  userCard: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginVertical: 4,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  userName: { fontWeight: 'bold' },
});

export default ContactList;
