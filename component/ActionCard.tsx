import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ActionCard = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in JavaScript ES6?</Text>
        </View>
        <Image
          source={{
            uri: 'https://cdn.prod.website-files.com/5e0f1144930a8bc8aace526c/662e5f9f46ce2d2450186839_662b08cfab87818173b64466-ce8f6f9a59aad8a2ef2a04f3fb1d4f37.jpeg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={2}>
            🎯 Explore the latest features in JavaScript ECMAScript 2023 (ES14)
            and how they enhance coding efficiency and capabilities. Learn about
            new tools like top-level await, RegExp improvements, and more.
            JavaScript's latest update, ECMAScript 2023 (ES14), released in June
            2023, brings several exciting features to enhance coding efficiency
            and capabilities.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://daily.dev/blog/javascript-latest-version-whats-new',
              )
            }
          >
            <Text style={styles.socialLinks}>Read more...</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://daily.dev/blog/javascript-latest-version-whats-new',
              )
            }
          >
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 5,
  },
  card: {
    height: 300,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  elevatedCard: {
    backgroundColor: '#fff',
    elevation: 3,
  },
  headingContainer: { padding: 3 },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  cardImage: {
    height: 200,
    borderRadius: 5,
  },
  bodyContainer: {
    paddingVertical: 4,
  },
  footerContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  socialLinks: {
    textDecorationLine: 'underline',
    color: 'green',
    fontSize: 16,
  },
});

export default ActionCard;
